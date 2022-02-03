// www.domain.com/blog

// ----------------------------------------------------------Client side-------------------------------------------------------------------
// client side imports
import React, { Fragment } from 'react';
import Blog from '../../components/blog/index'

export default function BlogHome(props) {

    return <Fragment><Blog {...props} /></Fragment>;
}

// ----------------------------------------------------------Server side-------------------------------------------------------------------

// server side imports
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../../../lib/markdownToHtml';

// // Only required for Dyanamic SSG pages
// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: 'key1' },
//             { params: 'key2' },
//         ],
//         fallback: false // false means we have supplied all possible keys; true means we dont have all possible keys, those pages will be pre-generated when request comes
//     };
// }


// Helper
function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

// SSG
export async function getStaticProps(context) {

    // ---------------------------------------gets base markup---------------------------------------------
    // const slug = context.params; // in case of dyanamic path
    let baseFolder = 'blog'; // static slug how to get ??
    let slug = 'blog'; // static slug how to get ??
    // get front matter + content
    let markdownWithMeta = fs.readFileSync(path.join('siteContent', baseFolder, slug + '.md'), 'utf-8');
    let { data: frontMatter, content } = matter(markdownWithMeta);
    content = await markdownToHtml(content || '');
    let blog = {
        frontmatter: frontMatter,
        content: content,
        slug: slug
    }
    // ---------------------------------------gets nested markups---------------------------------------------

    let folders = getDirectories(path.join('siteContent', baseFolder));

    let blogs = await Promise.all(folders.map(async (subFolder) => {
        const slug = subFolder;
        // get front matter + content
        let markdownWithMeta = fs.readFileSync(path.join('siteContent', baseFolder, subFolder, slug + '.md'), 'utf-8');
        let { data: frontMatter, content } = matter(markdownWithMeta);
        content = await markdownToHtml(content || '');
        return {
            frontmatter: frontMatter,
            content: content,
            slug: slug
        };
    }));

    // ---------------------------------------final props---------------------------------------------

    return {
        props: {
            blog: blog,
            blogs: blogs
        }
    };
}

// // ----------------------SSR----------------------
// export async function getServerSideProps(context) {
//     // context.req
//     // context.res
//     return {
//         props: {
//             content: 'Home Page'
//         }
//     };
// }