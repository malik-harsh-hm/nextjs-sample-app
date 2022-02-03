---
articleHeading: 'Using getStaticProps and getStaticPaths with TypeScript - Next.js'
articleImage: '/images/blogs/nextjs-getstaticprops-and-getstaticpaths-with-typescript.png'
articleDate: '24th March 2021'
---


My [personal website](https://wallis.dev) is [built on Next.js](https://dev.to/jameswallis/i-completely-rewrote-my-personal-website-using-dev-to-as-a-cms-2pje) and uses both the `getStaticProps` and `getStaticPaths` functions to dynamically generate the `/blog/` and `/portfolio/` pages at build time. While updating both methods to use their proper TypeScript types, [following the documentation](https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops), I ran into an error when reading the parameter that I was passing from `getStaticPaths` into `getStaticProps`.

The error that appeared was:

> _Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'_

After doing some research and finding [a discussion on the Next.js GitHub regarding this issue](https://github.com/vercel/next.js/discussions/16522), I recognised it was a gap in their documentation. It explains how to add the type to `getStaticProps` when used on its own but it doesn't demonstrate how to access the property you've declared in `getStaticPaths`.

* * *

Background
----------

[`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) and [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) are two methods that can be used for data fetching in Next.js. Briefly speaking `getStaticProps` lets you fetch data at build time and `getStaticPaths` enables you to specify dynamic routes to pre-render pages based on data.

For more information on these functions, read my post on [different ways to fetch data in Next.js](https://dev.to/jameswallis/different-ways-to-fetch-data-in-next-js-server-side-and-when-to-use-them-1jb0).

* * *

The error
---------

Using the example code below I will demonstrate the TypeScript error and advise you on how to fix it. I'm using the variable name `slug` to create the dynamic routes, but you could use anything - another common name is `id`.

    import { GetStaticPaths, GetStaticProps } from 'next'
    import { ParsedUrlQuery } from 'querystring'
    
    export const getStaticPaths: GetStaticPaths = async () => {
        const arr: string[] = ['slug1', 'slug2']
        const paths = arr.map((slug) => {
            return {
                params: { slug },
            }
        })
        return { paths }
    }
    
    export const getStaticProps: GetStaticProps = async (context) => {
        // This is where the error occurs
        const { slug } = context.params // Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
        const props = fetch(`/api/${slug}`)
        return { props }
    }

Note the first line of the `getStaticProps`. Here we are attempting to access the slug variable that was created in `getStaticPaths` and returned inside the `params` object. This is the line that causes the error as `context.params` has the type `ParsedUrlQuery | undefined` and `slug` does not exist in `ParsedUrlQuery`.

    const { slug } = context.params

* * *

The fix
-------

Fortunately, fixing the issue is as simple as creating an interface that extends `ParsedUrlQuery` and contains a `slug` property.

    interface IParams extends ParsedUrlQuery {
        slug: string
    }

Once we've added that to the file, we need to assert that `context.params` is of type `IParams`. This is done like so:

    const { slug } = context.params as IParams

It's as simple as that! Just adding the `IParams` interface makes the TypeScript error disappear.

Updated example code:

    import { GetStaticPaths, GetStaticProps } from 'next'
    import { ParsedUrlQuery } from 'querystring'
    
    interface IParams extends ParsedUrlQuery {
        slug: string
    }
    
    export const getStaticPaths: GetStaticPaths = async () => {
        const arr: string[] = ['slug1', 'slug2']
        const paths = arr.map((slug) => {
            return {
                params: { slug },
            }
        })
        return { paths }
    }
    
    export const getStaticProps: GetStaticProps = async (context) => {
        const { slug } = context.params as IParams // no longer causes error
        const props = fetch(`/api/${slug}`)
        return { props }
    }

* * *

Round up
--------

If this post has helped you use Next.js together with TypeScript, react or let me know in the comments!

Thanks for reading!

Sources:

*   [Data fetching in Next.js (`getStaticProps` and `getStaticPaths`)](https://nextjs.org/docs/basic-features/data-fetching)
*   [GitHub discussion on the type for `context.params.slug`](https://github.com/vercel/next.js/discussions/16522)