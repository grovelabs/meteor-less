Package.describe({
  name: "grove:less",
  summary: "Import all of your Less files in one step, in the order you want",
  version: "0.0.1"
});

Package.registerBuildPlugin({
  name: 'less-compiler',
  use: [],
  sources: [
    'plugin.js',
  ],
  npmDependencies: {
    "less": "2.2.0",
    "less-plugin-autoprefix": "1.3.0"
  }
});
