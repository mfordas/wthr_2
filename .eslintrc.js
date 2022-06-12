module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/order': [
          'error',
          {
            groups: [
              ['builtin', 'external'],
              ['internal', 'parent', 'sibling', 'index', 'unknown'],
            ],
            pathGroups: [
              {
                pattern: 'app/**',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: {order: 'asc'},
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
