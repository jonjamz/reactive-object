Package.describe({
  summary: "Reactive objects using ECMAScript 5 Object features, without the need for getters and setters.",
  version: "0.2.2",
  name: "mrt:reactive-object",
  git: "https://github.com/jonjamz/reactive-object.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['deps', 'ejson', 'underscore'], ['client', 'server']);
  api.export('ReactiveObject');
  api.addFiles('lib/reactive-object.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use(['tinytest', 'mrt:reactive-object'], ['client', 'server']);
  api.addFiles('lib/reactive-object-test.js', ['client', 'server']);
});
