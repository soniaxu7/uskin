# USkin

USkin is a front-end framework (or a theme) which provides basic web components and widgets.

## Table of contents

 - [Quick start](#quick-start)
 - [Compiling CSS and JavaScript](#compiling-css-and-javascript)
 - [Versioning](#versioning)
 - [Authors](#author)
 - [License](#license)

## Quick start

Three steps to go:

- [Download the latest release](https://github.com/icecreamliker/uskin/archive/master.zip). Or clone the repo: `git clone https://github.com/icecreamliker/uskin.git`.
  
- You can first compile the scripts via [Grunt](http://gruntjs.com/) or make command (make sure Grunt is installed).

- Under the folder docs, we provide versatile samples that you can learn the baisc usage from them. And in the short future, a overview-introduction page will be shown.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
uskin/
├── less/
├── js/
├── fonts/
│   ├── icomoon.eot
│   ├── icomoon.svg
│   ├── icomoon.ttf
│   └── icomoon.woff
├── dist/
│   ├── css/
│   │   ├── uskin.css
│   │   ├── uskin.min.css
│   │   └── uskin.css.map
│   ├── js/
│   │   ├── uskin.js
│   │   └── uskin.min.js
│   └── fonts/
└── docs/
    ├── examples/
    └── dist/
```

### Available commands

When Grunt is installed, go ahead and compile all the files:

```
grunt (default) or make uskin
```
Run the script below to clean the generated files:
```
grunt clean or make clean
```
When test is needed:
```
grunt test or make test
```
If you want to make some slight changes, start up the following script which will compile the files when the changes are saved.
```
grunt watch or make watch
```


## Author

**Lee Yao**

- Weibo: <http://weibo.com/icecreamliker>
- Email: yaoli111144@gmail.com


## License

USkin is available under the terms of [the MIT license](LICENSE).
