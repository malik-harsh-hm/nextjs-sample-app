import MarkdownToHtml from '../markdownToHtml/index';
import Link from 'next/link';


export default function ArticleTile({ articleHeading, articleDate, articleTags, articleDescription, articleLink }) {
    return (
        <div>
            <h3>{articleHeading}</h3>
            <p>
                <span>{articleDate}</span>
                <span>-</span>
                <span>{articleTags}</span>
            </p>
            <p>{articleDescription}</p>
            <Link href={articleLink}>Read More</Link>

        </div>
    )
}
