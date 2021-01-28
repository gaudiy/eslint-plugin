/**
 * @fileoverview custom rule plugin for gaudiy front application
 * @author winor30
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const requireIndex = require('requireindex');

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');

module.exports.configs = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "globalReturn": false,
          "impliedStrict": true
      },
      "ecmaVersion": 2019, // Node.js 12の場合は2019
      "tsconfigRootDir": ".",
      "sourceType": "module"
  },
  "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest/globals": true,
      "serviceworker": true
  },
  "plugins": [
      "@typescript-eslint",
      "spellcheck",
      "security",
      "jest",
      "react-hooks",
      "react",
      "react-perf",
      "promise",
      "optimize-regex"
  ],
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "plugin:security/recommended",
      "plugin:jest/recommended",
      "plugin:react-hooks/recommended",
      "plugin:react/recommended",
      "plugin:react-perf/all",
      "plugin:promise/recommended",
      "eslint:recommended",
      "plugin:you-dont-need-lodash-underscore/all",
      "prettier", // prettierの責任範囲のconfigの設定をeslint分offにする
      "prettier/@typescript-eslint", // @typescript-eslint分offにする
      "prettier/react" // react分offにする
  ],
  "rules": {
    // @typescript-eslint
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/triple-slash-reference": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-var-requires": 1,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-triple-slash-reference": 0,
    "@typescript-eslint/no-unused-expressions": 1,
    // spellcheck
    "spellcheck/spell-checker": 1,
    // react
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/jsx-boolean-value": 1,
    // optimize-regex
    "optimize-regex/optimize-regex": 1,
    // eslint
    "spaced-comment": [ // allow special triple slashes comment
        2,
        "always",
        {
            "line": {
                "markers": [
                    "/"
                ]
            },
            "block": {
                "balanced": true
            }
        }
    ],
    // Gaudiy
    // "no-import-mui": 2,
  },
  "overrides": [{
      "files": ["*.stories.tsx"],
      "rules": {
          "react-perf/jsx-no-new-object-as-prop": "off",
          "react-perf/jsx-no-new-function-as-prop": "off",
          "@typescript-eslint/no-empty-function": "off"
      }
  }],
  "settings": {
      "react": {
          "version": "detect"
      }
  }
}
