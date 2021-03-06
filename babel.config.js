module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {},
      },
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: false,
        jsxPragma: 'React',
        allExtensions: false,
        allowNamespaces: true,
        allowDeclareFields: false,
        onlyRemoveTypeImports: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: false,
        throwIfNamespace: true,
        importSource: 'react',
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        useBuiltIns: false,
        useSpread: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    },
  },
};
