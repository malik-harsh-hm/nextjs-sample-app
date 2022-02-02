---
articleHeading: 'Different ways to fetch data in Next.js (server-side) and when to use them'
articleImage: '/images/nextjs-serverside-data-fetching.png'
articleDate: '2nd March 2021'
---

When building an application powered by Next.js it's probable that you'll need to fetch data from either a file, an internal API route or an external API [such as the Dev.to API](https://dev.to/jameswallis/i-completely-rewrote-my-personal-website-using-dev-to-as-a-cms-2pje). Moreover, determining what data fetching method to use in a Next.js application can easily become confusing - especially as it isn't as simple as making an API request inside your components render function, as you might in a stock React app.

The following guide will help you carefully select the server-side data fetching method that suits your app (FYI you can use multiple methods in a single app). For each method, I have outlined when it runs, it's benefits and an example of when you could use the method in your Next.js application.

The following methods fetch data either at build time or on each request before the data is sent to the client.

### [getStaticProps (Static Generation)](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

> Fetch data at **build time**.

The `getStaticProps` method can be used inside a page to fetch data at build time, e.g. when you run `next build`. Once the app is built, it won't refresh the data until another build has been run.

_Note: Added in Next 9.3_

#### Usage:

    export async function getStaticProps(context) {
      const res = await fetch(`https://.../data`)
      const data = await res.json()
    
      if (!data) {
        return {
          notFound: true,
        }
      }
    
      return {
        props: {}, // will be passed to the page component as props
      }
    }

#### Benefits:

*   It enables the page to be statically generated and will produce fast load times of all the data fetching methods.
*   If each page in your app uses `getStaticProps` (or no server-side data fetching methods) then Next.js will be able to export it into static HTML using [`next export`](https://nextjs.org/docs/advanced-features/static-html-export). This is advantageous if you want to create a static site that can be hosted on places [such as GitHub Pages](https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn).
*   The data is rendered before it reaches the client - great for SEO.

#### Example usage:

Imagine you have a personal blog site that renders pages from markdown files at build time. `getStaticProps` can read the files and pass the data into the page component at build time. When you make a change to a blog entry, you rebuild the site to see the changes. [ameira.me](https://ameira.me), a site I built, uses this method - each time Ameira makes a change to her portfolio, Vercel automatically rebuilds and republishes the site.

### [getServerSideProps (Server-side Rendering)](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)

> Fetch data on **each request**.

The `getServerSideProps` method fetches data each time a user requests the page. It will fetch the data before sending the page to the client (as opposed to loading the page and fetching the data on the client-side). If the client makes a subsequent request, the data will be fetched again.

_Note: Added in Next 9.3_

#### Usage:

    export async function getServerSideProps(context) {
      const res = await fetch(`https://...`)
      const data = await res.json()
    
      if (!data) {
        return {
          notFound: true,
        }
      }
    
      return {
        props: {}, // will be passed to the page component as props
      }
    }

#### Benefits:

*   The data is refreshed each time a client loads the page meaning that it is up to date as of when they visit the page.
*   The data is rendered before it reaches the client - great for SEO.

#### Example usage:

`getServerSideProps` is perfect for building an application that requires the client to see the most up to date information, but isn't refreshed while the client is on the page (see client-side for constantly updating information). For example, if I had a page on my personal site that displayed information about my last GitHub commit or my current Dev.to stats, I'd want these fetched each time a page is viewed.

### [getInitialProps (Server-side Rendering)](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps)

> Fetch data on **each request**.

`getInitialProps` was the original way to fetch data in a Next.js app on the server-side. As of Next.js 9.3 you should use the previously discussed methods over `getInitialProps` but I'm including it in this article because:

1.  It can still be used - although the Next.js maintainers advise you not to as `getStaticProps` and `getServerSideProps` enable you to choose from static or server-side data fetching.
2.  Knowing about `getInitialProps` helps when you come across an old Stack Overflow query that mentions it, and also that you shouldn't just copy and paste that solution!.

_Note: If you're on Next.js 9.3 or above, use the two methods above._

#### Usage:

    function Page({ stars }) {
      return <div>Next stars: {stars}</div>
    }
    
    Page.getInitialProps = async (ctx) => {
      const res = await fetch('https://api.github.com/repos/vercel/next.js')
      const json = await res.json()
      return { stars: json.stargazers_count }
    }
    
    export default Page

#### Benefits:

Same as `getServerSideProps` - use `getServerSideProps`!

#### Example usage:

Same as `getServerSideProps` - use `getServerSideProps`!

### How to decide which one to use?

When using Next.js, I always aim to make each page static. This means that I try to avoid using `getServerSideProps` and favour `getStaticProps`. However, if the data that I am fetching changes often then of course I will use `getServerSideProps`. I never use `getInitialProps` anymore.

So normally I try `getStaticProps` and if that is causing data to become outdated then I move to `getServerSideProps`.

### A word on client-side data fetching

This article hasn't covered any client-side data fetching methods but you can use the `useEffect` hook to make the request or the [`useSwr`](https://swr.vercel.app) custom hook made by Vercel engineers which implements `stale-while-revalidate`.

> SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

_\- [swr.vercel.app](https://swr.vercel.app)_

#### SWR Usage:

    import useSWR from 'swr'
    
    function Profile() {
      const { data, error } = useSWR('/api/user', fetcher)
    
      if (error) return <div>failed to load</div>
      if (!data) return <div>loading...</div>
      return <div>hello {data.name}!</div>
    }

Final words
-----------

In this article, I've introduced three Next.js methods that can be used to fetch data either at build time or before each client request.

Liked this article? Hit the like button!

Thanks for reading!