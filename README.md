# lint-rule-checks

### Prerequisites
- Need to install [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin in vscode from extension

### Required node packages
- **Eslint** - npm install eslint
- **Prettier** - npm install prettier
- **Prettier config** - npm install eslint-config-prettier
- **Prettier plugin** - npm install eslint-plugin-prettier
> If any additional dependency is needed, please update the **dev** branch with changes and intimate the changes by raising pull request to **master** branch

### Commands to run in your terminal
- To download a copy of **eslint rules** you can run

  `curl 'https://raw.githubusercontent.com/sriramgroot/lint-rule-checks/main/.eslintrc.json' > .eslintrc.json`
- To download a copy of **eslint ignores** you can run

  `curl 'https://raw.githubusercontent.com/sriramgroot/lint-rule-checks/main/.eslintignore' > .eslintignore`
- To download a copy of **prettier formatting config** you can run

  `curl 'https://raw.githubusercontent.com/sriramgroot/lint-rule-checks/main/.prettierrc' > .prettierrc`
  
### Scripts to be included
Add these code block under scripts in **package.json**
```
"lint": "eslint './src/'",
"lint:fix": "eslint --fix",
"format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
```
> `npm run format` command can format your code block based on the file extension & folder path

> `npm run lint` command will be listing the errors in the code standards

### Things to remember
- These rules are customized based on our internal discussion among the team. If any change in rules needed and that would serve globally better then, post your suggestions as **[pull request](https://github.com/sriramgroot/lint-rule-checks/compare) or [issues](https://github.com/sriramgroot/lint-rule-checks/issues/new)**
- You can also play with these eslint rule [here](https://eslint.org/play/)
- You can also play with these prettier configuration [here](https://prettier.io/playground/)

### Notes
- Eslint rules updated based on **8.15.0** version's configuration
- Prettier rules are added based on **2.6.2** version's configuration.
