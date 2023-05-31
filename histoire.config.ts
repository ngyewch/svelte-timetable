import {defineConfig} from 'histoire'
import {HstSvelte} from '@histoire/plugin-svelte'
import path from 'path';

export default defineConfig({
    outDir: 'build/histoire',
    routerMode: 'hash',
    setupFile: 'src/stories/setup.ts',
    plugins: [
        HstSvelte(),
    ],
    theme: {
        title: 'svelte-timetable',
    },
    tree: {
        groups: [
            {
                id: 'top',
                title: '',
            },
            {
                id: 'usage',
                title: '',
            }
        ],
    },
    vite: {
        base: '/svelte-timetable/',
        resolve: {
            alias: {
                '@arl/svelte-timetable': path.resolve(__dirname, '/src'),
            },
        },
    },
});
