Package.describe({
  name: "grove:less",
  summary: "A better Less package. Everything the original does plus ordered imports and Autoprefixer",
  version: "0.2.0",
  git: 'https://github.com/grovelabs/meteor-less.git'
});

Package.registerBuildPlugin({
  name: 'less-build-plugin',
  use: [],
  sources: [
    'plugin.js',
  ],
  npmDependencies: {
    "less": "2.6.0",
    "less-plugin-autoprefix": "1.5.1"
  }
});

Package.onTest(function (api) {
  api.use([
    'grove:less',
    'practicalmeteor:munit',
    'templating'
  ]);
  api.addFiles([
    'tests/foo.html',
    'tests/foo.less',
    'tests/tests.js',
  ], 'client');
});
