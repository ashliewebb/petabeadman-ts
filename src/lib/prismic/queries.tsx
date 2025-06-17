import { client } from './client';
import * as prismic from '@prismicio/client';

export const getHomePage = async () => {
    return await client.getByUID('page', 'home');
};

export const getBlogPostBySlug = async (slug: string) => {
    return await client.getByUID('article', slug);
};
