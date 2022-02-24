
import React, { Fragment } from 'react';


export default function SSRPage({ data }) {
    return (<Fragment>
        <h1>SSR Page</h1>
        <p>{data.content}</p>
    </Fragment>);
}

export async function getServerSideProps(context) {

    // console.log('SSRPage getServerSideProps() called ', context.locale);

    return {
        props: {
            data: {
                content: `SSR content in ${context.locale}`
            }
        }
    };
}