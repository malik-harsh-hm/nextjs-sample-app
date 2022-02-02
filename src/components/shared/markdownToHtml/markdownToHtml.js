
export default function MarkdownToHtml({ content }) {
  return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
  )
}
