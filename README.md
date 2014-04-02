# Meteor Reactive Object package
This is a [Meteor](http://meteor.com/) smart package containing a class for reactive objects.
These reactive objects use EMCA5 Object features to hook into the normal JS getters and setters.
This means that once you establish the initial properties in the object, there's no need to call a
setter or an update method on the properties again. You can set them as you would any normal JS
object, and Deps will be triggered.
These objects can be easily used within Meteor.

## Install

### Meteorite
Using [meteorite](http://oortcloud.github.io/meteorite/) do the following:
```
mrt add reactive-object
```

### Other
If you don't like using meteorite create the folder `packages/reactive-object/` and can copy the `packages.js` and `lib/` to it.

## ReactiveObject
A reactive object implementation.
Checkout the [api docs](http://boekkooi.github.io/reactive-object/reactive-object.html)

### Usage

```javascript
var obj = new ReactiveObject({'foo':'1'});
obj.defineProperty('bar', 2);

obj.foo = '2';
obj.undefineProperty('foo'); // Don't use 'delete obj.foo' it will give strange results
```

### Authors

Originally a smart package by [Warnar Boekkooi](https://github.com/boekkooi). Forked and edited by me, [Jon Jamz](https://github.com/jonjamz). I'm currently maintaining this as a separate package.