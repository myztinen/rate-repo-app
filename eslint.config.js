const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactNative = require("eslint-plugin-react-native");
const babelParser = require("@babel/eslint-parser");

module.exports = defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...(reactNative.environments?.["react-native"]?.globals ?? {}),
      },
    },
    plugins: {
      react,
      "react-native": reactNative,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]);
