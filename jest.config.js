module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native/.*))',
  ],
};
