import React, { Fragment } from 'react';
import postsService from '../../services/postsService';
import cacheService from '../../services/cacheService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function PostsPage({ data }) {

    return (<Fragment>
        <h1>Caching Example</h1>
        <p>The example below shows highly dynamic language specific content loaded per request via SSR getServerSideProps() from a CMS API. The initial CMS API call takes around 5 seconds to respond and the response is then cached in Redis for 30 seconds.</p>
        <br></br>
        {data.content.posts.map((post, index) => {
            return (
                <Card key ={index} sx={{ margin: 2 }} variant="outlined" >
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="body2">
                            {post.body}
                        </Typography>
                    </CardContent>
                </Card>
            );
        })}
    </Fragment>);

}

export async function getServerSideProps(context) {

    const fetcher = async () => {
        // CMS API
        let posts = await postsService.getPostsFromCMS(context.locale);
        let content = {
            posts
        }
        return content;
    }

    const cacheKey = `posts-${context.locale}`;
    const cacheDuration = 30; // seconds
    const cachedContent = await cacheService.fetch(cacheKey, fetcher, cacheDuration);

    return {
        props: {
            data: {
                content: cachedContent
            }
        }
    };
}