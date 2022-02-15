
import React, { Fragment } from 'react';
import { getSession, useSession } from 'next-auth/react';
import AccessDenied from '../../components/shared/accessDenied/index'
import { getBaseMarkup } from '../../services/siteContentService';
import MarkdownExample from '../../components/markdown-example/index';


export default function MarkdownExamplePage({ data }) {
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
    const baseFolder = 'markdown-example';
    let data = await getBaseMarkup(baseFolder);
    return {
        props: {
            data: {
                data
            }

        }
    };
}