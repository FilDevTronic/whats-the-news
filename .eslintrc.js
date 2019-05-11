module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base'
  ],
  plugins: ["@typesscript-eslint"],
 parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  ecmaFeatures:  {
    jsx:  true,
  },
  rules:  {},
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
