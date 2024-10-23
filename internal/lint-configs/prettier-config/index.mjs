export default {
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'strict',
  overrides: [
    {
      files: '.*rc',
      options: {
        parser: 'json',
      },
    },
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
  printWidth: 120,
  proseWrap: 'never',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
};
