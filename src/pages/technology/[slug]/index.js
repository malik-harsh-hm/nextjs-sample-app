
import React, { Fragment } from 'react';
import { useSession } from "next-auth/react";
import path from 'path';
import ArticleDetails from '../../../components/article/articleDetails/index';
import AccessDenied from '../../../components/shared/accessDenied/index';
import { getBaseMarkup } from '../../../services/siteContentService';
import { getDirectories } from '../../../utils/utils';

export default function ArticleDetailPage({ data }) {
    let { data: session, status } = useSession();
    let loading = status === "loading";

    if (!session) {
        return (
            <AccessDenied />
        )
    }
    return (<Fragment><ArticleDetails {...data?.article} /></Fragment>);
}

export async function getStaticPaths() {
    const baseFolder = 'technology';
    const siteContentFolder = 'siteContent';
    let folders = getDirectories(path.join(siteContentFolder, baseFolder));
    let paths = await Promise.all(folders.map(async (subFolder) => {
        let slug = subFolder;
        return {
            params: { slug: slug }
        };
    }));

    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps(context) {
    let baseFolder = 'technology/' + context.params.slug;
    let article = await getBaseMarkup(baseFolder);
    return {
        props: {
            data: {
                article: article
            }
        }
    };
}
