module.exports = {
  root: true,
  extends: [
    "@nuxt/eslint-config",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/enforces-negative-arbitrary-values": "warn",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/migration-from-tailwind-2": "off",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "error",
    "vue/multi-word-component-names": "off",
    "vue/no-setup-props-destructure": "off",
  },
};
