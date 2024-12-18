module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:storybook/recommended"
  ],
  "ignorePatterns": ["*.pnp.*", "*.config.ts", "node_modules", ".yarn", ".eslintrc.cjs", "dist"],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.app.json"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
    "react/react-in-jsx-scope": 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/require-default-props': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    "jsx-a11y/label-has-associated-control": {
      "some": ["nesting", "id"],
    },
  }
}
