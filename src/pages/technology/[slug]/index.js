
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

export async function getStaticPaths({ locales }) {
    let all_paths = [];
    const baseFolder = 'technology';
    const siteContentFolder = 'siteContent';
        locales.forEach((locale, index) => {
        let folders = getDirectories(path.join(siteContentFolder, locale, baseFolder));
        let sub_paths = folders.map( (subFolder) => {
            let slug = subFolder;
            return {
                params: { slug: slug },
                locale: locale
            };
        });
        all_paths = [...all_paths, ...sub_paths];
    });

    return {
        paths: all_paths,
        fallback: false
    };
}

export async function getStaticProps(context) {

    let baseFolder = context.locale + '/technology/' + context.params.slug;

    // CMS API
    let article = await getBaseMarkup(baseFolder);

    let content = { article };

    return {
        props: {
            data: content
        }
    };
}
