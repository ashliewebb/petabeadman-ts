import React from 'react';
import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';

export const revalidate = 60;

export default async function Home() {
    const client = createClient();
    const page = await client.getSingle('homepage', {
        fetchLinks: [
            'background_colour.colour_hexcode',
            'testimonial.title',
            'testimonial.testimonial',
            'testimonial.author',
            'testimonial.source',
        ] });

    return (
        <main>
            <SliceZone slices={page.data.slices} components={components} />
        </main>
    );
}
