
import React, { Fragment } from 'react';
import { useSession } from 'next-auth/react';

import AccessDenied from '../../components/shared/accessDenied/index'
import MarkdownExample from '../../components/markdown-example/index';

import { getBaseMarkup } from '../../services/siteContentService';

export default function HRPage({ data }) {
    let { data: session, status } = useSession();
    let loading = status === "loading";

    if (!session) {
        return (
            <AccessDenied />
        )
    }
    return (<Fragment>
        <MarkdownExample {...data.data} />
    </Fragment>);
}

export async function getStaticProps(context) {
    const baseFolder = context.locale + '/hr';

    // CMS API
    let data = await getBaseMarkup(baseFolder);

    let content = {data}

    return {
        props: {
            data: content
        }
    };
}