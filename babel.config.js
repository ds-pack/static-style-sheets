module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          targets: {
            node: 12,
          },
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-typescript',
        {
          // force typescript to support jsx in all files no matter the extension I guess
          isTSX: true,
          allExtensions: true,
          allowDeclareFields: true,
          onlyRemoveTypeImports: true,
        },
      ],
    ],
    ignore:
      process.env.NODE_ENV !== 'test'
        ? [
            'src/test.js',
            'src/test.tsx',
            'src/test.ts',
            'src/__tests__/*.js',
            'src/__tests__/*.tsx',
            'src/__tests__/*.ts',
            'src/__fixtures__/**/*.js',
            'src/__fixtures__/**/*.tsx',
            'src/__fixtures__/**/*.ts',
          ]
        : [],
  }
}
