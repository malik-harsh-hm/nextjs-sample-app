
import { Card } from 'antd';
import MarkdownToHtml from '../markdownToHtml/index';
import Image from 'next/image';

const { Meta } = Card;

export default function CardWithBody({frontmatter, content, slug}) {
    return (
        <Card
            style={{ width: "100%" }}
            cover={
                <Image
                    alt="example"
                    src={frontmatter.image}
                    width = {500}
                    height = {300}
                />
            }
        >
            <Meta
                title={frontmatter.title}
                description={frontmatter.description}
            />
            <MarkdownToHtml content = {content} />
        </Card>
    )
  }
  