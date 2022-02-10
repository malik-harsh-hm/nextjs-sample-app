// www.domain.com/article
// Client side authentication + SSG

import React, { Fragment } from 'react';
import Article from '../../components/article/index'
import AccessDenied from '../../components/shared/accessDenied/index'
import { useSession } from "next-auth/react"
import { getNestedMarkup, getBaseMarkup } from '../../services/siteContentService';

export default function ArticleHome({ data }) {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    if (!session) {
        return (
            <AccessDenied />
        )
    }
    return <Fragment><Article {...data} /></Fragment>;
}

export async function getStaticProps(context) {

    let baseFolder = 'article';
    let article = await getBaseMarkup(baseFolder);
    let articles = await getNestedMarkup(baseFolder);

    return {
        props: {
            data: {
                article: article,
                articles: articles
            }
        }
    };
}