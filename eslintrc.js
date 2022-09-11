const prettierOptions = require("./.prettierrc");

module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended", "@react-native-community"],
  parser: "@typescript-eslint/parser",
  env: {
    jest: true,
  },
  plugins: ["prettier", "react", "import", "react-hooks"],
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "arrow-body-style": [0, "as-needed"],
    "class-methods-use-this": 0,
    semi: 0,
    "react-native/no-inline-styles": 0,
    "comma-dangle": [0, "always-multiline"],
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    "import/order": [
      "error",
      {
        groups: ["external", "internal"],
        "newlines-between": "always",
      },
    ],
    "linebreak-style": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "prefer-template": 2,
    "react/jsx-closing-tag-location": 0,
    "react/no-unused-state": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/sort-comp": 0,
    "react/no-did-update-set-state": 0,
    "react/no-did-mount-set-state": 0,
    "redux-saga/no-yield-in-race": 2,
    "redux-saga/yield-effects": 2,
    "require-yield": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "error",
      {additionalHooks: "useSkipFirstRenderEffect"},
    ],
    indent: "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "no-unexpected-multiline": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/camelcase": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
  },
};
