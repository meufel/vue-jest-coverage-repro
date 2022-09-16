module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '16.13',
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false,
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
