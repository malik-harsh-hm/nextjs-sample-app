
// client side imports
import React, { Fragment } from 'react';
import CardWithBody from '../../components/shared/card/index'

// server side imports
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../../../lib/markdownToHtml';


export default function AboutUs(props) {
    return (<Fragment><CardWithBody {...props} /></Fragment>);
}

// SSG
export async function getStaticProps(context) {

    // const slug = context.params; // in case of dyanamic path
    let slug = 'about-us'; // static slug how to get ??
    // get front matter
    let markdownWithMeta = fs.readFileSync(path.join('siteContent', slug + '.md'), 'utf-8');

    let { data, content } = matter(markdownWithMeta);

    content = await markdownToHtml(content || '');

    return {
        props: {
            frontmatter: data,
            content: content,
            slug: slug
        }
    };
}