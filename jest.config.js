module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/app/**/*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'node',
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
};
