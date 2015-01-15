Package.describe({
  name: "ordered-less",
  summary: "Import all of your Less files in one step, in the order you want",
  version: "0.0.1"
});

Package.registerBuildPlugin({
  name: 'compileLessIndex',
  use: [],
  sources: [
    'plugin.js',
  ],
  npmDependencies: {
    "less": "2.2.0"
  }
});
