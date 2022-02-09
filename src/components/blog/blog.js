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


export default function Blog(props) {
    console.log(props);
    return (
        <>
            <div>
                <PageIntro
                    pageHeading={props.blog.frontmatter.pageHeading}
                    introText={props.blog.frontmatter.pageDescription}
                />
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {props.blogs.map((blog, index) => {
                        return (<Grid item xs={4}>
                            <Item>
                                <ArticleTile
                                    key={index}
                                    articleHeading={blog.frontmatter.articleHeading}
                                    articleDate={blog.frontmatter.articleDate}
                                    articleTags={blog.frontmatter.articleTags}
                                    articleImage={blog.frontmatter.articleImage}
                                    articleDescription={blog.frontmatter.articleDescription}
                                    articleLink={`/blog/${blog.slug}`}
                                />
                            </Item>
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </>
    )
}
