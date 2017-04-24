## Available commands

Before using the commands, please make sure all the dependencies are well installed.

Compile all the files:
```
npm run build
```
In most of the situations, you can use make command instead. In this case, `make build`.

Clean all generated files:
```
grunt clean
```
Equivalent command, `make clean`.

When test is needed:
```
npm run test
```
Use ESLint for code parsing:
```
npm run eslint
```

Watch changes of your code real time while developing, you can run the dev mode:
```
npm run dev
```

Customize the theme of uskin:
```
npm run dev --theme=default
```
or
```
npm run build --theme=default
```
Currently, we only provide two themes: `default` and `premium`.
