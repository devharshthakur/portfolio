import { Config } from 'prettier';

const config: Config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 150,
  tabWidth: 2,
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
  // These options affect vertical spacing
  proseWrap: 'never',
  insertPragma: false,
  requirePragma: false,
  // Custom options for reducing vertical space
  importOrder: ['^@/(.*)$', '^[./]'], // Group imports to reduce blank lines
  importOrderSeparation: false, // Don't add blank lines between import groups
  importOrderSortSpecifiers: true, // Sort import specifiers to reduce lines
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};

export default config;
