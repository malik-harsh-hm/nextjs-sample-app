import React, { Fragment } from 'react';
import { useSession } from "next-auth/react"
import Article from '../../components/article/index'
import AccessDenied from '../../components/shared/accessDenied/index'
import { getNestedMarkup, getBaseMarkup } from '../../services/siteContentService';

export default function ArticleHomePage({ data }) {
    let { data: session, status } = useSession();
    let loading = status === "loading";

    if (!session) {
        return (
            <AccessDenied />
        )
    }
    return <Fragment><Article {...data} /></Fragment>;
}

export async function getStaticProps(context) {
    const baseFolder = context.locale + '/technology'

    // CMS API
    let article = await getBaseMarkup(baseFolder);
    let articles = await getNestedMarkup(baseFolder);

    let content = {
        article,
        articles
    }

    return {
        props: {
            data: content
        }
    };
}