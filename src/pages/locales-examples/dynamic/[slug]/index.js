
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';


export default function DynamicSSGDetailsPage({ data }) {

    const router = useRouter();

    return (<Fragment>
        <h1>{`Dynamic SSG Details Page for ${router.query.slug}`}</h1>
        <p>{data.content}</p>
    </Fragment>);
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    slug: 'sub-route-1',
                },
            },
            {
                params: {
                    slug: 'sub-route-2',
                },
            },
        ],
        fallback: false
    };
}

export async function getStaticProps(context) {
    // console.log('DynamicSSGDetailsPage getStaticProps() called ', context.locale);
    return {
        props: {
            data: {
                content: `SSG content in ${context.locale} for ${context.params.slug}`
            }
        }
    };
}
