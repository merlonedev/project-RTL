{
    "env": {
      "browser": true,
      "es2020": true,
      "jest": true
    },
    "extends": ["plugin:react/recommended", "airbnb", "eslint:recommended"],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": ["react", "sonarjs", "testing-library", "jest-dom"],
    "overrides": [
      {
        "files": ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
        "extends": ["plugin:testing-library/react"]
      }
    ],
    "rules": {
      "indent": ["error", 2],
      "linebreak-style": 0,
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "class-methods-use-this": ["off"],
      "no-magic-numbers": [
        "error",
        {
          "ignore": [0, 1, 2, 100],
          "ignoreArrayIndexes": true,
          "enforceConst": true,
          "detectObjects": false
        }
      ],
      "react/button-has-type": [
        "error",
        {
          "button": true,
          "submit": true,
          "reset": true
        }
      ],
      "no-console": ["off"],
      "no-underscore-dangle": ["off"],
      "no-param-reassign": ["off"],
      "consistent-return": ["off"],
      "no-undef": ["off"],
      "max-len": [
        "error",
        {
          "code": 90,
          "ignoreComments": true,
          "ignoreUrls": true
        }
      ],
      "max-params": ["error", 4],
      "max-lines": ["error", 250],
      "max-lines-per-function": ["error", 150],
      "complexity": ["error", 15],
      "object-curly-newline": ["off"],
      "import/no-extraneous-dependencies": ["off"],
      "sonarjs/cognitive-complexity": ["error", 15],
      "sonarjs/no-collapsible-if": ["error"],
      "sonarjs/no-collection-size-mischeck": ["error"],
      "sonarjs/no-duplicate-string": ["error"],
      "sonarjs/no-duplicated-branches": ["error"],
      "sonarjs/no-extra-arguments": ["error"],
      "sonarjs/no-identical-conditions": ["error"],
      "sonarjs/no-identical-expressions": ["error"],
      "sonarjs/no-identical-functions": ["error"],
      "sonarjs/no-inverted-boolean-check": ["error"],
      "sonarjs/no-one-iteration-loop": ["error"],
      "sonarjs/no-redundant-boolean": ["error"],
      "sonarjs/no-unused-collection": ["error"],
      "sonarjs/no-use-of-empty-return-value": ["error"],
      "sonarjs/no-useless-catch": ["error"],
      "sonarjs/prefer-object-literal": ["error"],
      "sonarjs/prefer-single-boolean-return": ["error"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/default-props-match-prop-types": [
        "error",
        {"allowRequiredDefaults": false}
      ],
      "react/no-array-index-key": ["off"],
      "react/destructuring-assignment": ["error", "always"],
      "react/forbid-component-props": ["error"],
      "react/forbid-prop-types": ["error"],
      "react/no-did-mount-set-state": ["error"],
      "react/no-did-update-set-state": ["error"],
      "react/jsx-props-no-spreading": ["off"],
      "react/no-multi-comp": ["error", {"ignoreStateless": false}],
      "react/prefer-stateless-function": ["off"],
      "react/no-access-state-in-setstate": ["error"],
      "react/no-redundant-should-component-update": ["error"],
      "react/no-this-in-sfc": ["error"],
      "react/no-typos": ["error"],
      "react/no-unsafe": ["error"],
      "react/no-unused-state": ["error"],
      "react/no-will-update-set-state": ["error"],
      "react/prefer-es6-class": ["error", "always"],
      "react/self-closing-comp": ["error"],
      "react/state-in-constructor": ["error", "always"],
      "react/void-dom-elements-no-children": ["error"],
      "react/jsx-closing-bracket-location": ["error"],
      "react/jsx-closing-tag-location": ["error"],
      "react/jsx-curly-newline": ["error"],
      "react/jsx-fragments": ["error"],
      "react/jsx-max-depth": ["error", {"max": 4}],
      "react/jsx-no-useless-fragment": ["error"],
      "react/jsx-curly-spacing": ["error", {"when": "always"}],
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-indent": [
        "error",
        2,
        { "checkAttributes": true, "indentLogicalExpressions": true }
      ],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-key": ["error"],
      "react/jsx-max-props-per-line": [
        "error",
        {"maximum": 1, "when": "multiline"}
      ],
      "react/jsx-tag-spacing": [
        "error",
        {
          "closingSlash": "never",
          "beforeSelfClosing": "always",
          "afterOpening": "never",
          "beforeClosing": "never"
        }
      ],
      "react/jsx-wrap-multilines": [
        "error",
        {
          "declaration": "parens",
          "assignment": "parens",
          "return": "parens",
          "arrow": "parens",
          "condition": "ignore",
          "logical": "ignore",
          "prop": "ignore"
        }
      ]
    }
  }