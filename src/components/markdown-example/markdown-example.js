
import MarkdownToHtml from '../shared/markdownToHtml/index'


export default function MarkdownExample({frontmatter, content, slug}) {
    return (
        <div>
            <div>
                <h1>{frontmatter?.pageHeading}</h1>
            </div>
            <p>{frontmatter?.pageDescription}</p>

            <section>
                <article style={{width:'400px'}}>
                    <MarkdownToHtml content = {content} />
                </article>
            </section>          

        </div>
    )
}
