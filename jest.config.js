module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['client/src/**/*.{js,jsx,mjs}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost:4000',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
