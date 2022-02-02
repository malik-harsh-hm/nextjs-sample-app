// www.domain.com/blog


// ----------------------------------------------------------Client side only-------------------------------------------------------------------


import React, {Fragment} from 'react';

export default function Blog(props) {
    return(<Fragment>{props.content}</Fragment>);
}

// ----------------------------------------------------------Server side only-------------------------------------------------------------------

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
// SSG
export async function getStaticProps(context) {

    // context.params // can be used for dyanamic pages
    // however, sadly, getStaticPaths is also required for dyanamic SSG pages (not for SSR)
    return {
        props: {
            content: 'Blogs Page'
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