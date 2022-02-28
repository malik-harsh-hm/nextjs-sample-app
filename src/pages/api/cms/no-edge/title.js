// returning post via API route handler function

// https://domain.com/api/cms/no-edge/title?&postId=1


export default async function handler(req, res) {
    console.log('/api/cms/no-edge/title handler invoked');

    const { postId } = req.query;
    if (!postId) {
        res.status(500).json({ error: 'postId is required' });
    }
    else {
        // CMS API call
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        res.status(200).json(post);
    }
}