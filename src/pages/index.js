
import React, { Fragment } from 'react';
import MarkdownExample from '../components/markdown-example/index';
import { getBaseMarkup } from '../services/siteContentService';



export default function HomePage({ data }) {

    return (<Fragment>
        <MarkdownExample {...data.data} />
    </Fragment>);
}

export async function getStaticProps(context) {

    const baseFolder = 'home';
    let data = await getBaseMarkup(baseFolder);
    return {
        props: {
            data: {
                data
            }
        }
    };
}