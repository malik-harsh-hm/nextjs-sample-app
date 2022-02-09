import MarkdownToHtml from '../shared/markdownToHtml/index';
import Image from 'next/image';


export default function PageIntro({pageHeading, introText}) {
    return (
<div>
<h1>{pageHeading}</h1>
<p>{introText}</p>
</div>
    )
  }
  