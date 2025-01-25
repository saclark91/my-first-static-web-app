module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/api/src/functions/**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};