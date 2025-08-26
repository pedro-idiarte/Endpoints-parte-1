/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest"
  },
  testMatch: [
    "**/test/**/*.(test|spec).ts",
    "**/tests/**/*.(test|spec).ts"
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  reporters: ["./custom-test-results-processor"],
  globalTeardown: './jest.teardown.js',
  cache: false
};