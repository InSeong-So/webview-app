module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/typescript', 'module:metro-react-native-babel-preset'],
    env: {
      development: {
        plugins: ['@babel/transform-react-jsx-source'],
      },
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
          },
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
        },
      ],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      'react-native-reanimated/plugin',
    ],
  };
};
