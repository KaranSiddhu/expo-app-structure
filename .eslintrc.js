module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks', 'prettier'],
	rules: {
		'no-multi-assign': 'error',
		'no-eval': 'error',
		'no-new-wrappers': 'error',
		'no-else-return': 'error',
		'default-case': 'error',
		'implicit-arrow-linebreak': 'error',
		'prefer-rest-params': 'error',
		'comma-dangle': ['error', 'never'],
		'one-var': ['error', 'never'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'func-call-spacing': ['error', 'never'],
		'react-native/no-unused-styles': 'warn',

		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/no-explicit-any': 'off'
	}
};
