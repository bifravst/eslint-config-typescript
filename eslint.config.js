// @ts-check

import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import prettier from 'eslint-config-prettier'
import preferArrow from 'eslint-plugin-prefer-arrow'
import unicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				warnOnUnsupportedTypeScriptVersion: false,
			},
		},
	},
	prettier,
	{
		plugins: { 'prefer-arrow': preferArrow, unicorn, '@stylistic': stylistic },
	},
	{
		rules: {
			'@typescript-eslint/indent': ['off'],
			'@typescript-eslint/no-object-literal-type-assertion': ['off'],
			'@typescript-eslint/explicit-function-return-type': ['off'],
			'@typescript-eslint/await-thenable': ['error'],
			'@typescript-eslint/no-extraneous-class': ['error'],
			'@typescript-eslint/no-floating-promises': ['error'],
			'@typescript-eslint/no-for-in-array': ['error'],
			'@typescript-eslint/no-require-imports': ['error'],
			'@typescript-eslint/no-this-alias': ['error'],
			'@typescript-eslint/no-type-alias': ['off'],
			'@typescript-eslint/no-unnecessary-type-assertion': ['error'],
			'@typescript-eslint/no-useless-constructor': ['error'],
			'@typescript-eslint/prefer-for-of': ['error'],
			'@typescript-eslint/prefer-function-type': ['error'],
			'@typescript-eslint/prefer-includes': ['error'],
			'@typescript-eslint/prefer-readonly': ['error'],
			'@typescript-eslint/prefer-regexp-exec': ['error'],
			'@typescript-eslint/prefer-string-starts-ends-with': ['error'],
			'@typescript-eslint/promise-function-async': ['error'],
			'@typescript-eslint/require-array-sort-compare': ['error'],
			'@typescript-eslint/restrict-plus-operands': ['error'],
			semi: 'off',
			'@typescript-eslint/semi': ['off'],
			'@stylistic/member-delimiter-style': [
				'error',
				{
					multiline: {
						delimiter: 'none',
						requireLast: false,
					},
					singleline: {
						delimiter: 'semi',
						requireLast: false,
					},
				},
			],
			'@typescript-eslint/prefer-interface': ['off'],
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/no-explicit-any': ['off'],
			'no-console': ['off'],
			'@typescript-eslint/strict-boolean-expressions': ['error'],
			'@typescript-eslint/prefer-nullish-coalescing': ['error'],
			'@typescript-eslint/prefer-optional-chain': ['error'],
			'@typescript-eslint/explicit-module-boundary-types': ['error'],
			'prefer-promise-reject-errors': ['error'],
			'unicorn/prefer-string-slice': ['error'],
			'@typescript-eslint/switch-exhaustiveness-check': ['error'],
			'prefer-arrow/prefer-arrow-functions': ['error'],
			'object-shorthand': ['error'],
			'@typescript-eslint/no-unsafe-enum-comparison': ['warn'],
			'@typescript-eslint/no-unsafe-assignment': ['warn'],
			'@typescript-eslint/no-unsafe-member-access': ['warn'],
			'@typescript-eslint/no-unsafe-return': ['warn'],
			'@typescript-eslint/no-unsafe-argument': ['warn'],
			'@typescript-eslint/no-unsafe-call': ['warn'],
			'@typescript-eslint/require-await': ['off'],
			'@typescript-eslint/no-misused-promises': ['warn'],
			'@typescript-eslint/no-base-to-string': ['warn'],
			'@typescript-eslint/consistent-type-imports': ['error'],
			// Disallow TypeScript syntax that is not erasable, because it is not supported by the type stripping in Node.js.
			// See https://nodejs.org/api/typescript.html#type-stripping
			// Namespaces are disallowed by @typescript-eslint/no-namespace, `import x = require()` by @typescript-eslint/no-require-imports.
			'@typescript-eslint/no-namespace': ['error'],
			'no-restricted-syntax': [
				'error',
				{
					selector: 'TSEnumDeclaration',
					message:
						'Enums are not supported by the TypeScript type stripping in Node.js. Use a union type or an `as const` object instead.',
				},
				{
					selector: 'TSParameterProperty',
					message:
						'Parameter properties are not supported by the TypeScript type stripping in Node.js. Declare the property in the class body and assign it in the constructor instead.',
				},
				{
					selector:
						'TSImportEqualsDeclaration[importKind="value"]:not([moduleReference.type="TSExternalModuleReference"])',
					message:
						'Import aliases (`import x = N.y`) are not supported by the TypeScript type stripping in Node.js. Use `const x = N.y` instead.',
				},
				{
					selector: 'TSExportAssignment',
					message:
						'`export =` is not supported by the TypeScript type stripping in Node.js. Use `export default` instead.',
				},
			],
		},
	},
	{
		ignores: ['eslint.config.js', 'commitlint.config.cjs'],
	},
	// Do not require return declaration on JSX components
	{
		files: ['**/*.tsx'],
		rules: {
			'@typescript-eslint/explicit-module-boundary-types': ['off'],
		},
	},
	// Be less strict on test files
	{
		files: ['**/*.spec.ts', '**/*.test.ts'],
		rules: {
			'@typescript-eslint/no-unsafe-assignment': ['off'],
		},
	},
)
