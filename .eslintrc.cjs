module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint', 'prettier', 'jest'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2021: true,
		node: true,
		es6: true,
		'jest/globals': true,
	},
	rules: {
		'import/prefer-default-export': 'off',
		'import/no-unresolved': ['off', { ignore: ['$\\w/'] }],
	},
};
