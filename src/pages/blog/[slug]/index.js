// www.domain.com/blog/[slug]


// ----------------------------------------------------------Client side only-------------------------------------------------------------------


import React, {Fragment} from 'react';
import ArticleDetails from '../../../components/blog/articleDetails/index';

export default function BlogDetail(props) {
    return(<Fragment><ArticleDetails {...props}/></Fragment>);
}

// ----------------------------------------------------------Server side only-------------------------------------------------------------------

// server side imports
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../../../utils/utils';
 
// Helper
function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

// Only required for Dyanamic SSG pages
export async function getStaticPaths() {
    let baseFolder = 'blog'; // static slug how to get ??
    let folders = getDirectories(path.join('siteContent', baseFolder));
    let paths = await Promise.all(folders.map(async (subFolder) => {
        let slug = subFolder;
        return {
            params: {slug:slug}
        };
    }));

    return {
        paths,
        fallback: true // false means we have supplied all possible keys; true means we dont have all possible keys, those pages will be pre-generated when request comes
    };
}
// SSG
export async function getStaticProps(context) {

    let slug = context.params.slug;
    // however, getStaticPaths is also required for dyanamic SSG pages (not for SSR)
    // ---------------------------------------gets nested markups---------------------------------------------
    let baseFolder = 'blog'; // static slug how to get ??
    let markdownWithMeta = fs.readFileSync(path.join('siteContent', baseFolder, slug, slug + '.md'), 'utf-8');
    let { data: frontmatter, content } = matter(markdownWithMeta);
    content = await markdownToHtml(content || '');
    return {props:{
        frontmatter: frontmatter,
        content: content,
        slug: slug
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