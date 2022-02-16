import ArticleTile from './articleTile/index'
import PageIntro from '../pageIntro/index'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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
                            <Paper elevation={0} key={index}>
                                <ArticleTile
                                    key={index}
                                    articleHeading={blog.frontmatter.articleHeading}
                                    articleDate={blog.frontmatter.articleDate}
                                    articleTags={blog.frontmatter.articleTags}
                                    articleImage={blog.frontmatter.articleImage}
                                    articleDescription={blog.frontmatter.articleDescription}
                                    articleLink={`/technology/${blog.slug}`}
                                />
                            </Paper>
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </>
    )
}
