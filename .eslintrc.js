module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint"],
	"rules": {
		"import/no-namespace": "error",
		"import/no-relative-parent-imports": "error",
		"import/no-anonymous-default-export": [
			"error",
			{
				"allowArray": true,
				"allowArrowFunction": false,
				"allowAnonymousClass": false,
				"allowAnonymousFunction": false,
				"allowCallExpression": true, // The true value here is for backward compatibility
				"allowLiteral": true,
				"allowObject": true
			}
		],
		"import/order": [
			"error",
			{
				"pathGroups": [
					{
						"pattern": "consts/**",
						"group": "external",
						"position": "after"
					},
					{
						"pattern": "components/**",
						"group": "external",
						"position": "after"
					},
					{
						"pattern": "helpers/**",
						"group": "external",
						"position": "after"
					}
				],
				"pathGroupsExcludedImportTypes": ["builtin"]
			}
		],
		"prettier/prettier": ["error", { endOfLine: "auto" }],
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": "off",
		"react/function-component-definition": [
			"error",
			{
				"namedComponents": "arrow-function",
				"unnamedComponents": "arrow-function"
			}
		],
		"react/forbid-dom-props": ["error", { "forbid": ["style"] }],
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/no-null": "off",
		"unicorn/filename-case": [
			"error",
			{
				"case": "camelCase",
				"ignore": ["App.tsx"]
			}
		]
	},
    "overrides": [
        {
          "files": ["src/**/*.js"],
          "rules": {
            "unicorn/filename-case": [
              "error",
              {
                "case": "pascalCase",
              },
            ],
          },
        },
        {
          "files": ["src/**/*.js"],
          "rules": {
            "unicorn/filename-case": [
              "error",
              {
                "case": "kebabCase",
              },
            ],
          },
        },
      ]
}
