import ArticleTile from './articleTile/index'
import PageIntro from '../pageIntro/index'


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

            <section>
                {props.blogs.map((blog, index) => {
                    return <ArticleTile 
                    key = {index}
                    articleHeading = {blog.frontmatter.articleHeading}
                    articleDate = {blog.frontmatter.articleDate}
                    articleTags = {blog.frontmatter.articleDescription}
                    articleDescription = {blog.frontmatter.articleDescription}
                    articleLink = {`/blog/${blog.slug}`}
                    />
                })}
            </section>
        </>

    )
}
