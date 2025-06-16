import "@/styles/globals.css";
import React from 'react';

import { createClient } from '@/prismicio';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { components } from '@/slices';

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
    const { uid } = await params;
    const client = createClient();
    const page = await client.getByUID("article", uid, {
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
        ],
    });

    return (
        <>
            <div className={`page-header section`}>
                <div className={`sectionInner`}>
                    <h1 className='heading heading1'>{page.data.title}</h1>
                    <div className='page-intro'><PrismicRichText field={page.data.page_intro} /></div>
                </div>
            </div>
            <SliceZone slices={page.data.slices} components={components} />
        </>
    )
}
