import { getBlogPostBySlug } from '@/lib/prismic/queries';

export default async function BlogPostPage({ params }) {
    const post = await getBlogPostBySlug(params.slug);

    return (
        <article>
            <h1>{post.data.title}</h1>
            <div>{/* Rich text rendering here */}</div>
        </article>
    );
}
