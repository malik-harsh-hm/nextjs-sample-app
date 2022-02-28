// www.domain.com/

export default function HomePage() {


    return (<div>
        <h1>Application Tech Stack Overview</h1>

        <ul>
            <li>Material UI based components</li>
            <li>React</li>
            <li>Next.js</li>
            <ul>
                <li>Routing</li>
                <ul>
                    <li>Page based routing</li>
                    <li>Navigation between pages</li>
                    <li>Dynamic Routes</li>
                    <li>API Routes</li>
                </ul>
                <li>Markdown</li>
                <ul>
                    <li>Render Markdown using remark</li>
                </ul>
                <li>Authentication</li>
                <ul>
                    <li>Authentication with nextAuth</li>
                    <li>Integration with okta oAuth provider</li>
                    <li>Client Side Authentication</li>
                    <li>Server Side Authentication</li>
                    <li>API Route Authentication</li>
                </ul>
                <li>Pre-rendering and Pre-fetching</li>
                <ul>
                    <li>Server Side Rendering (getServerSideProps)</li>
                    <li>Static Site Generation (getStaticProps)</li>
                </ul>
                <li>SSR with Caching</li>
                <li>Internationalization (en-US, de-DE)</li>
            </ul>
            <li>CI / CD using Github Actions</li>
            <li>Deployment on Vercel</li>
        </ul>

    </div>)
}