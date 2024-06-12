/** @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PluginConfig} */
const config = {
	bracketSameLine: false,
	importOrder: [
		'^(next/(.*)$)|^(next$)|^(react/(.*)$)|^(react$)',
		'<THIRD_PARTY_MODULES>',
		'^@/(.*)$',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	printWidth: 80,
	quoteProps: 'consistent',
	semi: false,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
}

export default config
