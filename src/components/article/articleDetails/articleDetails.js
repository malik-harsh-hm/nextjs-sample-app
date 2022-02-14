import Link from 'next/link';
import Image from 'next/image';
import MarkdownToHtml from '../../shared/markdownToHtml/index'


export default function ArticleDetails({frontmatter, content, slug}) {
    return (
        <div>
            <Image src={frontmatter?.articleImage} alt={frontmatter?.articleHeading} layout="responsive" width="400px" height="200px"></Image>
            <div>
                <h1>{frontmatter?.articleHeading}</h1>
            </div>
            <p>{frontmatter?.articleDate}</p>

            <section>
                <article>
                    <MarkdownToHtml content = {content} />
                </article>
            </section>
           

        </div>
    )
}
