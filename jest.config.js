const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './'
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'app/**/*.ts(x)',
        'components/**/*.ts(x)?',
        'templates/**/*.ts(x)?',
    ]
}

module.exports = createJestConfig(customJestConfig)