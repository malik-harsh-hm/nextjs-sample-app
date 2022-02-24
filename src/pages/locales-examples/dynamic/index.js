
import React, { Fragment } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';


export default function DynamicSSGPage({ data }) {
    const pages = [
        { key: 'sub-route-1', nav: '/locales-examples/dynamic/sub-route-1' },
        { key: 'sub-route-2', nav: '/locales-examples/dynamic/sub-route-2' },
    ];

    return (<Fragment>
        <h1>Dynamic SSG Page</h1>
        <p>{data.content}</p>
        {pages.map((page, index) => (
            <Box key={index} style={{ padding: '0 10px' }}>
                <Link color="primary" href={page.nav}>{page.key}</Link>
            </Box>
        ))}
    </Fragment>);
}

export async function getStaticProps(context) {
    // console.log('DynamicSSGPage getStaticProps() called ', context.locale);
    return {
        props: {
            data: {
                content: `SSG content in ${context.locale}`
            }
        }
    };
}