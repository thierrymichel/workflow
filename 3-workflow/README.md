# Getting started

> Prerequisite : 
> + node.js (v0.12.7)
> + npm (v2.14.1)
> + gulp (`npm i -g gulp`, v3.9.0)
> + sass (`gem install sass`, 3.4.18)
> + [livereload Chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

## Scaffold the project

Grab it [here](#) or use Yeoman (coming soon?)

+ `package.json`
+ `gulpfile.js`
+ `src/` folder

> [example](test/)

## Install the packages (from `package.json`)

```bash
$ npm i
```

## Gulp settings

+ set the `destDir` path
+ if needed, set the `scriptsConcat` paths (3rd party JS, that can not be 'required')


## Project settings

+ RWD: `./src/scripts/parts/breakpoints.json`
+ JS libs/partials: `./src/scripts/parts/` and `./src/scripts/lib/`

# Usage

__Dev mode__

```
cd ~/client/project
gulp
```

__Build mode__ (for deployments)

```
cd ~/client/project
gulp build
```
