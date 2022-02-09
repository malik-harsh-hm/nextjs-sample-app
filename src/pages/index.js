// www.domain.com/

export default function Home({ data }) {
    return <>{data.content}</>
}


export async function getStaticProps(context) {

    return {
        props: {
            data: { content: 'Home Page' }
        }
    };
}