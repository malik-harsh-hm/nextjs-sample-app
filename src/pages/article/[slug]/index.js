// www.domain.com/blog/[slug]

import React, { Fragment } from 'react';
import ArticleDetails from '../../../components/article/articleDetails/index';
import { getBaseMarkup } from '../../../services/siteContentService';
import { getDirectories } from '../../../utils/utils';
import path from 'path';

export default function BlogDetail({ data }) {
    return (<Fragment><ArticleDetails {...data?.article} /></Fragment>);
}

export async function getStaticPaths() {
    let baseFolder = 'article';
    let folders = getDirectories(path.join('siteContent', baseFolder));
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

    let baseFolder = 'article/' + context.params.slug;
    let article = await getBaseMarkup(baseFolder);
    return {
        props: {
            data: {
                article: article
            }
        }
    };
}