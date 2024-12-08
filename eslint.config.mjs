import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import config from './prettier.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'react/react-in-jsx-scope': 0,
			'react/jsx-uses-react': 0,
			'prettier/prettier': ['error', config],
		},
		ignores: ['/.expo', 'node_modules/', 'assets/', 'config/*'],
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
