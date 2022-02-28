// returning post title via a terminal middleware (edge function)

export async function middleware(req, ev) {
    console.log('/api/cms/edge/title middleware invoked');

    const url = req.nextUrl;
    let postId = null;

    url.searchParams.forEach((val, key) => {
        if (key === "postId") {
            postId = val;
            return;
        }
    });

    if (!postId) {
        return new Response
            (
                JSON.stringify({ error: 'postId is required' }),
                {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
    }
    else {
        // CMS API call
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();

        return new Response
            (
                JSON.stringify(post),
                {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
    }

}