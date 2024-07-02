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
        'src/components/**/*.ts(x)?',
        'src/templates/**/*.ts(x)?',
        '!src/**/stories.tsx'
    ]
}

module.exports = createJestConfig(customJestConfig)