module.exports = {
    preset: 'ts-jest',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    testRegex: '/__tests__/.*\\.test.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['<rootDir>/setupTests.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['app/react/**/*.{ts,tsx}', '!app/react/__tests__/api/api-test-helpers.ts']
};
