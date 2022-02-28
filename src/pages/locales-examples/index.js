
import React, { Fragment } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';


export default function LocalesExamplePage() {

    const pages = [
        { key: 'Client-Side', nav: '/locales-examples/client-side' },
        { key: 'SSR', nav: '/locales-examples/SSR' },
        { key: 'SSG', nav: '/locales-examples/SSG' },
        { key: 'Dynamic', nav: '/locales-examples/dynamic' },

    ];

    return (<Fragment>
        <h1>Locales samples Page</h1>
        {pages.map((page, index) => (
            <Box key={index} style={{ padding: '0 10px' }}>
                <Link color="primary" href={page.nav}>{page.key}</Link>
            </Box>
        ))}
    </Fragment>);
}
