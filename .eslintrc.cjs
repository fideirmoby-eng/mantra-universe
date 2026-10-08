module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '18',
    },
  },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    // React
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off',        // TypeScript-style prop documentation via JSDoc comments
    'react/display-name': 'off',

    // Code quality
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'prefer-const': 'error',
    'no-var': 'error',

    // Import order is enforced by Prettier + convention (documented in IMPLEMENTATION_BLUEPRINT.md)
    // Not enforced by ESLint to keep the config lean.
  },
}
