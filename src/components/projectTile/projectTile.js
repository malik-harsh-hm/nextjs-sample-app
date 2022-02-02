import MarkdownToHtml from '../markdownToHtml/index';
import Image from 'next/image';
import Link from 'next/link';


export default function ProjectTile({ projectHeading, projectDescription, projectLink, projectImage }) {
    return (
        <div>
            <h3>{projectHeading}</h3>
            <p>{projectDescription}</p>
            <Link href={projectLink}>Read More</Link>
            <div>
                <Image src={projectImage}></Image>
            </div>
        </div>
    )
}
