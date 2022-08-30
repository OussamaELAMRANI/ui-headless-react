import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@\\/(.*)": "<rootDir>/src/$1",
    "\\.(css)$": "<rootDir>/node_modules/jest-css-modules",
  },
  transform: {},
  transformIgnorePatterns: ["/node_modules/"],
};

export default config;
