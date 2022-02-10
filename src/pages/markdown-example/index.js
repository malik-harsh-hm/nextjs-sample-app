// www.domain.com/about-us
// Server side Authentication + SSR

// client side imports
import React, { Fragment } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { getBaseMarkup } from '../../services/siteContentService';


export default function MarkdownExample({ data }) {
    // can use session data below if not using redirecting strategy
    const { data: session, status } = useSession();
    const loading = status === "loading";

    return (<Fragment>Markdown-Example Page</Fragment>);
}

export async function getServerSideProps(context) {
    let baseFolder = 'markdown-example';
    // Get hold of current auth session
    const session = await getSession(context);
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