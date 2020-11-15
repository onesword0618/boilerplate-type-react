/* eslint-disable max-len */
/*
*     ####  #######   #####   ######              ####    #####   ##   ##  #######   ####      ####
*      ##    ##   #  ##   ##  # ## #             ##  ##  ##   ##  ###  ##   ##   #    ##      ##  ##
*      ##    ## #    #          ##              ##       ##   ##  #### ##   ## #      ##     ##
*      ##    ####     #####     ##              ##       ##   ##  ## ####   ####      ##     ##
*  ##  ##    ## #         ##    ##              ##       ##   ##  ##  ###   ## #      ##     ##  ###
*  ##  ##    ##   #  ##   ##    ##               ##  ##  ##   ##  ##   ##   ##        ##      ##  ##
*   ####    #######   #####    ####               ####    #####   ##   ##  ####      ####      #####
*/

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx)',
    '**/?(*.)+(spec|test).+(ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
};
