// Server side Authentication + SSR

// client side imports
import React, { Fragment } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { getBaseMarkup } from '../../services/siteContentService';
import MarkdownExample from '../../components/markdown-example/index';


export default function MarkdownExamplePage({ data }) {
    return (<Fragment>
        <MarkdownExample {...data.data} />
    </Fragment>);
}

export async function getServerSideProps(context) {
    const baseFolder = 'markdown-example';
    // Get hold of current auth session
    let session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.DOMAIN_URL}/markdown-example`,
                permanent: false
            }
        }
    }
    // Get content
    let data = await getBaseMarkup(baseFolder);
    return {
        props: {
            session,
            data: {
                data
            }

        }
    };
}