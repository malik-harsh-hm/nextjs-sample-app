// www.domain.com/blog/[slug]


// ----------------------------------------------------------Client side only-------------------------------------------------------------------


import React, {Fragment} from 'react';

export default function BlogDetail(props) {
    return(<Fragment>{props.content}</Fragment>);
}

// ----------------------------------------------------------Server side only-------------------------------------------------------------------

// Only required for Dyanamic SSG pages
export async function getStaticPaths() {
    return {
        paths: [
            { params: {slug:'key1'} },
            { params: {slug:'key2'} },
        ],
        fallback: true // false means we have supplied all possible keys; true means we dont have all possible keys, those pages will be pre-generated when request comes
    };
}
// SSG
export async function getStaticProps(context) {

    const slug = context.params.slug;
    // however, sadly, getStaticPaths is also required for dyanamic SSG pages (not for SSR)
    return {
        props: {
            content: slug
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