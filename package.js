Package.describe({
  summary: "Reactive objects using EMCA5 Object features, without the need for getters and setters."
});

var path = Npm.require("path");
Package.on_use(function(api) {

  // Required packages
  api.use(["deps", "ejson", "underscore"], ["client", "server"]);

  // Server and client side code
  api.add_files([
    path.join("lib","reactive-object.js")
  ], ["client", "server"]);

});

Package.on_test(function(api) {
  // Required packages
  api.use(["tinytest", "reactive-object"], ["client", "server"]);

  // Server and client side tests
  api.add_files([
    path.join("lib","reactive-object-test.js")
  ], ["client", "server"]);
});
