import ArticleTile from './articleTile/index'
import PageIntro from '../pageIntro/index'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


export default function Article({article, articles}) {
    return (
        <>
            <div>
                <PageIntro
                    pageHeading={article.frontmatter.pageHeading}
                    introText={article.frontmatter.pageDescription}
                />
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {articles.map((blog, index) => {
                        return (<Grid key={index} item xs={4}>
                            <Item key={index}>
                                <ArticleTile
                                    key={index}
                                    articleHeading={blog.frontmatter.articleHeading}
                                    articleDate={blog.frontmatter.articleDate}
                                    articleTags={blog.frontmatter.articleTags}
                                    articleImage={blog.frontmatter.articleImage}
                                    articleDescription={blog.frontmatter.articleDescription}
                                    articleLink={`/article/${blog.slug}`}
                                />
                            </Item>
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </>
    )
}
