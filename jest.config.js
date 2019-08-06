module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy' // map less imports to an empty module, we don't need them for tests
  },
  /**
   * Note: if you are using babel-jest with additional code preprocessors, you have to explicitly define babel-jest as
   * a transformer for your JavaScript code to map .js files to the babel-jest module.
   * https://jestjs.io/docs/en/webpack
   * **/
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/tests/utils/fileTransformer.js'
  },
  setupFiles: [
    '<rootDir>/tests/utils/throw-on-prop-type-error.js' // Force PropTypes to throw an error instead of a warning
  ],
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['.story.js']
};
