
import React, { Fragment } from 'react';


export default function SSGPage({ data }) {
    return (<Fragment>
        <h1>SSG Page</h1>
        <p>{data.content}</p>
    </Fragment>);
}

export async function getStaticProps(context) {

    // console.log('SSGPage getStaticProps() called ', context.locale);

    return {
        props: {
            data: {
                content: `SSG content in ${context.locale}`
            }
        }
    };
}