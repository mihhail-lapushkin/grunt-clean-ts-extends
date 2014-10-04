# grunt-clean-ts-extends

![](https://badge.fury.io/js/grunt-clean-ts-extends.svg)&nbsp;&nbsp;
![](https://david-dm.org/mihhail-lapushkin/grunt-clean-ts-extends.png)

> In compiled TypeScript files remove all `__extends` declarations except the first one

If you first compile all your TypeScript sources and then concatenate them into one file you might get quite a lot of `__extends` declarations. This plugin leaves the first one and removes all following.


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-clean-ts-extends --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-clean-ts-extends');
```

## cleanTsExtends task
Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Task must be used on _non-minified_ JavaScript!

### Usage Example

```js
cleanTsExtends: {
  clean: {
    src: './dist/concat.ts'
  }
}
```

## Release History
 * **0.1.0** / 2014-10-04
   * First version.