# Objects

* primitives
  - string
    - "some text"
  - number 
    - 1, 2, 3, 1.2,
  - undefined
    - undefined
  - null
    - null
  - boolean
    - true, false
  - Symbol (we don't care about this right now) 

* data structures
  - structure a collection of data.
  - store, organize, retrieve data.
  - examples:
    - array, objects, set, map

<aside>arrays are objects</aside>

* Objects: keys & values

```js
var dog = {
  "type": "labrador",
  "color": "chocolate"
};
```

`{}` literally creates an object.

* What is as valid key?
  - Any valid string is a key
* What can a value be in an objhect?
  - Any primitive or object.
  - Any value. 

* storing and retrieving values

 - dot notation when the property (key) is a valid identifier
 - square brackets when you want or have to use a string for the property (key) name.

* nested Objects
* arrays of Objects
* for...in

```js
var things = {};
for (var key in things) {
  var thing = things[key];
  thing.whateverPropertyName;
}
```

* methods & this
  - it's a function
  - `toString();`
  - . word bracket
  - a function that is a property of an object

always use `this` to refer to the current object from inside the method.f

## out of scope for today

* `delete` a key from an object
* `for...of` works fine with arrays, but you have to do a lot of extra setup with generators and itterators for it to work with custom objects.
* `this`