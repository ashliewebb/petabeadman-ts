import * as prismic from '@prismicio/client';
import sm from '../../../slicemachine.config.json'; // your Slice Machine config

export const repositoryName = sm.apiEndpoint.split('/')[2];

export const client = prismic.createClient(repositoryName, {
    // Add custom options or fetch if needed
    routes: [
        {
            type: 'page',
            path: '/:uid',
        },
    ],
});
