module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    // disable the rule for all files
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_',
      }
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      'files': ['src/services/**/*.ts'], 'rules': {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    }
  ],
};
