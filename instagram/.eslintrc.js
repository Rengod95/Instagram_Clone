// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['warn'],
    // More rules
    'linebreak-style': ['error', 'unix'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'off',
    'no-useless-escape': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'no-param-reassign': 'error',
    curly: ['error', 'multi-line'],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow empty reject
    'prefer-promise-reject-errors': 'off',
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true
    }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: []
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/self-closing-comp': 'error'
  }
};