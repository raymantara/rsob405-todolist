module.exports = {
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  settings: { react: { version: "detect" } },
  plugins: ["react"],
  rules: { "react/react-in-jsx-scope": "off" }
};