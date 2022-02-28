
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';


export default function DynamicSSGDetailsPage({ data }) {

    const router = useRouter();

    return (<Fragment>
        <h1>{`Dynamic SSG Details Page for ${router.query.slug}`}</h1>
        <p>{data.content}</p>
    </Fragment>);
}

export async function getStaticPaths({locales}) {
    let paths = [];
    let sub_paths = ['sub-route-1', 'sub-route-2']; 
    sub_paths.forEach((sub_path, sp_index)=>{
        locales.forEach((locale, index)=>{
            paths.push({ params: { slug: sub_path }, locale: locale, });
        });
    });

    return {
        paths: paths,
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
