import "@/styles/globals.css";
import React from 'react';

import { Grid } from '@/components/Grid/Grid'
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import Link from "next/link";

export default async function BlogIndexPage() {
    const client = createClient();

    const blogPosts = await client.getAllByType("article", {
        fetch: ["blog.title", "blog.page_intro", "blog.uid"],
        orderings: [{ field: "document.first_publication_date", direction: "desc" }],
    });
    const page = await client.getSingle("blog", {
        fetchLinks: [
            'background_colour.colour_hexcode',
            'resource.title',
            'resource.description',
            'resource.file',
            'resource.button_label',
            'testimonial.title',
            'testimonial.testimonial',
            'testimonial.author',
            'testimonial.source',
        ] });

    return (
        <>
            <div className={`page-header section`}>
                <div className={`sectionInner`}>
                    <h1 className='heading heading1'>{page.data.title}</h1>
                    <div className='page-intro'><PrismicRichText field={page.data.page_intro} /></div>
                </div>
            </div>
            <Grid
                gridCountMed={'2'}
                gridCountWide={'2'}
            >
                {blogPosts.map((post) => (
                    <div key={post.id} className='article-item'>
                        <Link href={`/blog/${post.uid}`} className='article-item__link'>
                            <h2 className="heading article-item__title">{post.data.title}</h2>
                            {post.data.page_intro && (
                                <div className="blog-intro">
                                    <PrismicRichText field={post.data.page_intro} />
                                    <span className='article-item__more'>Read more &rarr;</span>
                                </div>
                            )}
                        </Link>
                    </div>
                ))}
            </Grid>
        </>
    )
}
