import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs';
import matter from 'gray-matter';

export async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

export function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

export async function getMarkupContent(path, slug) {
    let markdownWithMeta = fs.readFileSync(path, 'utf-8');
    let { data: frontMatter, content } = matter(markdownWithMeta);
    content = await markdownToHtml(content || '');
    return {
        frontmatter: frontMatter,
        content: content,
        slug: slug
    }
}