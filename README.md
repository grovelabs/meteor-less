# Meteor Less Build Plugin

This a build plugin for [Less](http://lesscss.org) for Meteor that replaces the `less` package [suggested by MDG](http://docs.meteor.com/#/full/less) with one where you can control load order and run [Autoprefixer](https://github.com/postcss/autoprefixer) on the output CSS to get all of your needed vendor prefixes.

## Why
Less is an awesome CSS preprocessor. It has variables, functions (mixins), and importing — all things needed to be able to write modular, reusable stylesheets. But the behavior of the MDG Less package to process every `.less` file independently makes it very tough to implement modular styles across your application. Given an application like such:

```js
/client/stylesheets/globals/body.less	   // Global styling
/client/stylesheets/vendor/normalize.less  // Reset stylesheet
/client/stylesheets/classes.less		 // Normal CSS class declarations
/client/stylesheets/variables.less   // Shared theme variables
/client/stylesheets/mixins.less		// Helpful mixins
/client/templates/awesome-widget/awesome-widget.less
```

The order you would want to load those files in is

1. `normalize.less` — reset the styles
2. `variables.less`, `mixins.less`, and `classes.less` — setup your toolkit
3. `body.less` — set your global state
4. `awesome-widget.less` — bring in your components

With the default `less` package, if you wanted to control the order in which your application stylesheets are loaded in you would have to make every Less file have an extension of `.import.less` and have one plain `.less` file where you explicitly `@import` every stylesheet you want. This package basically automates that process, but instead of naming every file except one with a special name, just one has a special name — `main.less` (changeable with the `indexFilePath` option).


## Usage
* In a Meteor application directory, in your terminal enter `meteor add grove:less`. Without any additional configuration , this package will automatically parse all `.less` files, compile them with Less, and add them to the client CSS bundle. Same behavior as with the MDG Less package.
* Create `config/less.json`. Here's a template:

```js
{
  "enableAutoprefixer": true,  // defaults to false
  "autoprefixerOptions": {
      "browsers": ["> 2%", "last 2 versions"],
      "cascade": true
  },
  "useIndex": true,	// defaults to false
  "indexFilePath": "client/stylesheets/main.less" // defaults ./client/main.less
}

```
* Run `meteor` — a file will be created at the path specified in the `indexFilePath` with all of your Less files expliclity imported. This is the only file that will actually be compiled by Less. It will never be overwritten, only appended to. Order the imports as you see fit. If a file is deleted or moved you will have to manually delete that now error-throwing import.

### Autoprefixer
Autoprefixer is ran with the [Less plugin](https://github.com/less/less-plugin-autoprefix). See the [Autoprefixer docs](https://github.com/postcss/autoprefixer#browsers) for more information on the options you can set for that.

## Testing

```sh
git clone https://github.com/grovelabs/meteor-less
cd meteor-less
meteor test-packages ./
# App running at http://localhost:3000
```

Open localhost:3000 in your browser and watch the tests run in the TinyTest HTML runner. The test Meteor process will not end on its own, you must kill it yourself (Ctrl+C) in your terminal to end the process.
