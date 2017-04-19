<img src="https://icecreamliker.github.io/uskin/images/logo.png" width="100" height="100">

# USkin

[![version](https://img.shields.io/npm/v/uskin.svg)](https://www.npmjs.com/package/uskin)
[![Build status](https://ci.appveyor.com/api/projects/status/dflrwd6sm6e6o8da?svg=true)](https://ci.appveyor.com/project/icecreamliker/uskin)
[![Build Status](https://travis-ci.org/icecreamliker/uskin.svg?branch=master)](https://travis-ci.org/icecreamliker/uskin)
[![Coverage Status](https://coveralls.io/repos/github/icecreamliker/uskin/badge.svg?branch=master)](https://coveralls.io/github/icecreamliker/uskin?branch=master)
[![bitHound Score](https://www.bithound.io/github/icecreamliker/uskin/badges/score.svg)](https://www.bithound.io/github/icecreamliker/uskin)
[![downloads](https://img.shields.io/npm/dt/uskin.svg)](https://www.npmjs.com/package/uskin)
[![license](https://img.shields.io/github/license/icecreamliker/uskin.svg)](https://github.com/icecreamliker/uskin)


USkin is a front-end framework which provides stunning web components based on CSS3 and ReactJS.

## Quick start

- [Download the latest release](http://git.ustack.com/ustack/uskin/repository/archive.zip), or clone the repo `git clone http://git.ustack.com/ustack/uskin.git`.

- Install all the denpendecies by `npm install`, and your first compile will also be completed by this command.

- You can compile your code via [Grunt](http://gruntjs.com/) using `grunt build` or `make build` at any time you need.

- You can find demos in folder `docs`, showing the basic usage of the components. Congratulations, an overview-introduction page is coming soon.

## Available commands

Before using the commands, please make sure all the dependencies are well installed.

Compile all the files:
```
grunt build
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

## Note

Details for each release are documented in the [release notes](https://github.com/icecreamliker/uskin/releases).

Any questions to the releases are welcome, feel free to [create issues](https://github.com/icecreamliker/uskin/issues).

## Authors

**Lee Yao**

- Weibo: <http://weibo.com/icecreamliker>
- Email: yaoli111144@gmail.com

**Sonia Xu**

- Email: soniaxu7@foxmail.com

## License

USkin is available under the terms of [the MIT license](LICENSE).
