const path = require('path');

module.exports = {
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  rootDir: path.resolve(__dirname, '../'),
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  transform: {
    '.+\\.vue$': '<rootDir>/node_modules/@vue/vue2-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.vue',
  ],
  coverageReporters: ['text-summary', 'text', 'cobertura', 'html'],
  coverageDirectory: '<rootDir>/tests/coverage',
  testMatch: ['<rootDir>/tests/**/*.spec.js'],
};
