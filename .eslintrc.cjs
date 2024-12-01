/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  extends: [
    // We will use the default rules from the plugins we have installed.
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // Disable the rules that eslint conflicts with prettier.
    // Put this at the bottom to override the rules above!.
    "eslint-config-prettier",
    "prettier",
  ],
  plugins: ["prettier"],
  settings: {
    react: {
      // Tell eslint-plugin-react to automatically detect the version of React.
      version: "detect",
    },
    // Tell ESLint how to handle imports
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "")],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    node: true,
  },
  rules: {
    // Disable the rule that requires importing React in jsx files
    "react/react-in-jsx-scope": "off",
    // Warn when an <a target='_blank'> tag does not have rel="noreferrer"
    "react/jsx-no-target-blank": "warn",
    // Enhance some prettier rules (copied from the .prettierrc file)
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "always",
        semi: false,
        trailingComma: "none",
        tabWidth: 2,
        endOfLine: "auto",
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true,
      },
    ],
  },
};
