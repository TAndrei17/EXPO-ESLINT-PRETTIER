import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
			import: importPlugin,
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'react/react-in-jsx-scope': 0,
			'react/jsx-uses-react': 0,
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'prettier/prettier': ['error', config],
		},
		ignores: ['/.expo', 'node_modules/', 'assets/'],
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
