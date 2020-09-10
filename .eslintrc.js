module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest/globals": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/style"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jest"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "space-before-function-paren": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "comma-spacing": [
      2
    ],
    "comma-dangle": ["error", "never"],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "jsx-quotes": [
      2
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "overrides": [
    {
      "files": ["**/*.jsx/*.js"],
      "rules": {
        "strict": "off"
      }
    }
  ]
};
