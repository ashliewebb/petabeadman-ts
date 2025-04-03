import "@/styles/globals.css";
import React from 'react';


import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';

export default async function Home() {
    const client = createClient();
    const page = await client.getSingle('homepage', { fetchLinks: ['background_colour.colour_hexcode'] });

    return (
        <main>
            <SliceZone slices={page.data.slices} components={components} />
        </main>
    );
}
