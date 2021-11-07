'use strict';

const OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    indent: [WARN, 2, { SwitchCase: 1, VariableDeclarator: 0 }],
    'linebreak-style': [WARN, 'unix'],
    'one-var': OFF,
    'space-before-function-paren': OFF,
    quotes: [WARN, 'single'],
    semi: [WARN, 'always'],
    'brace-style': [WARN, '1tbs'],
    'array-bracket-spacing': [WARN, 'never'],
    camelcase: [WARN, { properties: 'always' }],
    'keyword-spacing': [WARN],
    'eol-last': [WARN],
    'no-trailing-spaces': [WARN],
    'no-case-declarations': OFF,
    'no-path-concat': OFF,
    'no-unused-expressions': OFF,
    'no-multi-str': OFF,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0
  },
  globals: {
    Promise: true,
    describe: true,
    it: true,
    xit: true,
    beforeEach: true,
    afterEach: true,
    should: true,
    expect: true,
    assert: true,
    after: true
  }
};
