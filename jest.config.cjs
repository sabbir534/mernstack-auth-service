const { createDefaultPreset } = require('ts-jest');

/** @type {import('jest').Config} */
const config = {
  ...createDefaultPreset(),
  testEnvironment: 'node',
};

module.exports = {
  preset: 'ts-jest', // or whatever preset you are using
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Tells Jest to ignore the .js extension
  },
};
