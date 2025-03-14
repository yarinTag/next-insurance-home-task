import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|css)$': '<rootDir>/test/mocks/fileMock.js',
    // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
export default config;
