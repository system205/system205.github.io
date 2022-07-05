import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// import { base } from '$app/paths';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/system205.github.io',
		},
		prerender: {
			default: true
		},
	}
};

export default config;