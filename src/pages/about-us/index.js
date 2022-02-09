// www.domain.com/about-us
// Server side Authentication + SSR

// client side imports
import React, { Fragment } from 'react';
import CardWithBody from '../../components/shared/card/index'

// server side imports
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getSession, useSession } from 'next-auth/react';
import markdownToHtml from '../../../lib/markdownToHtml';


export default function AboutUs({ data }) {
    // can use session data below if not using redirecting strategy
    const { data: session, status } = useSession();
    const loading = status === "loading";
    
    return (<Fragment><CardWithBody {...data} /></Fragment>);
}

// ----------------------SSG----------------------
// export async function getStaticProps(context) {

//     // const slug = context.params; // in case of dyanamic path
//     let slug = 'about-us'; // static slug how to get ??
//     // get front matter
//     let markdownWithMeta = fs.readFileSync(path.join('siteContent', slug + '.md'), 'utf-8');

//     let { data, content } = matter(markdownWithMeta);

//     content = await markdownToHtml(content || '');

//     return {
//         props: {
//             frontmatter: data,
//             content: content,
//             slug: slug
//         }
//     };
// }

// ----------------------SSR----------------------
export async function getServerSideProps(context) {
    let slug = 'about-us';
    // Get hold of current auth session
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/about-us',
                permanent: false
            }
        }
    }
    // Get markdown
    let markdownWithMeta = fs.readFileSync(path.join('siteContent', slug + '.md'), 'utf-8');
    let { data, content } = matter(markdownWithMeta);
    content = await markdownToHtml(content || '');
    return {
        props: {
            session,
            data: {
                frontmatter: data,
                content: content,
                slug: slug
            }
        }
    };
}