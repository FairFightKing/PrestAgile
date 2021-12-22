module.exports = {
    //testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    //moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },
}