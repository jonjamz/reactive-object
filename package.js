Package.describe({
  summary: "Reactive objects using EMCA5 Object features, without the need for getters and setters."
});

Package.on_use(function(api) {
  api.use(["deps", "ejson", "underscore"], ["client", "server"]);
  api.export && api.export('ReactiveObject');
  api.add_files("lib/reactive-object.js", ["client", "server"]);
});

Package.on_test(function(api) {
  // Required packages
  api.use(["tinytest", "reactive-object"], ["client", "server"]);

  // Server and client side tests
  api.add_files("lib/reactive-object-test.js", ["client", "server"]);
});
