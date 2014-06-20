# About

Now features support for array prototype methods.

This is a [Meteor](http://meteor.com/) smart package containing a class for reactive objects.
These reactive objects use ECMAScript 5 Object features to hook reactivity into the normal JS getters and setters.
This means that once you establish the initial properties in the object, there's no need to call a
setter or an update method on the properties to change them. You can set them as you would any normal JS
object property, and Deps will be triggered.
These objects can be easily used within Meteor, up to and including version 0.8.

## Install

### Meteorite
Using [meteorite](http://oortcloud.github.io/meteorite/) do the following:
```
mrt add reactive-object
```

### Other
If you don't like using meteorite, create the folder `packages/reactive-object/` and copy the `packages.js` and `lib/` to it.

## Usage

```javascript
var obj = new ReactiveObject({'foo':'1'});
obj.defineProperty('bar', 2);

obj.foo = '2';
obj.undefineProperty('foo'); // Don't use 'delete obj.foo' it will give strange results
```

## Authors

[Warnar Boekkooi](https://github.com/boekkooi), author of the more feature-rich `reactive-extra`. Forked and edited by me, [Jon Jamz](https://github.com/jonjamz). I'm maintaining this as a separate package.

# Alternatives

The main difference between this package and [reactive-objects](https://github.com/Meteor-Reaction/meteor-reactive-objects/) is that you need to do some extra work to get `reactive-objects` going. This one is simpler and just assumes that all the properties in an object are supposed to be reactive.
