import graphqlPlugin from "@graphql-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.graphql", "**/*.gql"],
    languageOptions: {
      parser: graphqlPlugin.parser,
    },
    plugins: {
      "@graphql-eslint": graphqlPlugin,
    },
    rules: {
      "@graphql-eslint/no-anonymous-operations": "error",
      "@graphql-eslint/no-duplicate-fields": "error",
      "@graphql-eslint/naming-convention": [
        "error",
        {
          OperationDefinition: {
            style: "PascalCase",
            forbiddenPrefixes: ["Query", "Mutation", "Subscription", "Get"],
            forbiddenSuffixes: ["Query", "Mutation", "Subscription"],
          },
        },
      ],
    },
  },
  {
    name: "thecodingmontana/tailwind",
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
