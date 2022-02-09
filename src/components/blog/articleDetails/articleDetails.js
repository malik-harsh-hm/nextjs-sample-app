import Link from 'next/link';
import Image from 'next/image';
import MarkdownToHtml from '../../shared/markdownToHtml/index'


export default function ArticleDetails({frontmatter, content, slug}) {
    return (
        <div>
            <Image src={frontmatter.articleImage} alt={frontmatter.articleHeading} layout="responsive" width="400px" height="200px"></Image>
            <div>
                <h1>{frontmatter.articleHeading}</h1>
            </div>
            <p>{frontmatter.articleDate}</p>

            <section>
                <article>
                    <MarkdownToHtml content = {content} />
                </article>
            </section>

            
                <div style={{padding: '50px', textAlign:'center'}}>
                <span>React, comment and follow on </span>
                <br/>
                <a href='https://www.linkedin.com/in/harsh-m-8107a4187/' target='_blank'>
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="2em" width="2em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
                </a>
</div>
           

        </div>
    )
}
