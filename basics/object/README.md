# OBJECTS

Seven of them are called "primitive", because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets `{…}` with an optional list of *properties*. A property is a "key: value" pair, where `key` is a string (also called a "property name"), and `value` can be anything.

- **Methods:** isEmpty()

- [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) creates an array containing the keys of an object.

- [`Object.values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) creates an array containing the values of an object.

- **Object.getPrototypeOf**

- **property name :** start with underscore.

### Object references and copying

**When an object variable is copied, the reference is copied, but the object itself is not duplicated.**

For instance:

```js
let user = { name: "John" };

let admin = user; // copy the reference
```

**A variable assigned to an object stores not the object itself, but its "address in memory" -- in other words "a reference" to it.**

- **Object.assign()**

```javascript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

*!*
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
*/!*

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
```

- **structuredClone**
  
  The call `structuredClone(object)` clones the `object` with all nested properties.
  
  Here's how we can use it in our example:
  
  ```javascript
  let user = {
          name: "John",
          sizes: {
            height: 182,
            width: 50,
          },
        };
  
        let clone = structuredClone(user);
  
        console.log(user.sizes === clone.sizes); // false, different objects
  
        // user and clone are totally unrelated now
        user.sizes.width = 60; // change a property from one place
        console.log("clone size:"+clone.sizes.width);
        console.log("user size:"+user.sizes.width);
  ```

**Declare**

```javascript
let user = new Object();//

let user = {};// "object literal" syntax
```

**Literals and properties**

We can immediately put some properties into `{...}` as "key: value" pairs:

```js
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

**Access propreties**

```js
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
```

**Accessor descriptor**

```javascript
let user = {
  name: "John",
  surname: "Smith"
};

*!*
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
*/!*
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```

**Variable as property**

```js
let key = 'age';
let user = {
    name: "KPIDIBA",
    [key]:22
}
```

**Property existence test, "in" operator**

A notable feature of objects in JavaScript, compared to many other languages, is that it's possible to access any property. There will be no error if the property doesn't exist!

Reading a non-existing property just returns `undefined`. So we can easily test whether the property exists:

```javascript
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
```

**or**

```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

### FOR LOOPS

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

### Property flags and descriptors

Object properties, besides a **`value`**, have three special attributes (so-called "flags"):

- **`writable`** -- if `true`, the value can be changed, otherwise it's read-only.
- **`enumerable`** -- if `true`, then listed in loops, otherwise not listed.
- **`configurable`** -- if `true`, the property can be deleted and these attributes can be modified, otherwise not.

```javascript
//OUTPUT
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

**Modify property**

```javascript
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
*!*
  writable: false
*/!*
});

*!*
user.name = "Pete"; // Error: Cannot assign to read only property 'name'
*/!*
```

### Object methods, "this"

Objects are usually created to represent entities of the real world, like users, orders

```javascript
let user ={
            name:"Dx",
            age : function(){
                console.log(20)
            },
            sayHi() { // same as "sayHi: function(){...}"
               alert("Hello");
            }
        }
```

**To access the object, a method can use the `this` keyword.**

The value of `this` is the object "before dot", the one used to call the method.

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
*!*
    // "this" is the "current object"
    alert(this.name);
*/!*
  }

};

user.sayHi(); // John
```

In JavaScript, keyword `this` behaves unlike most other programming languages. It can be used in any function, even if it's not a method of an object.

The value of `this` is evaluated during the run-time, depending on the context.

**NB :**  **Arrow functions** have no "this" :they don't have their "own" `this`. If we reference `this` from such a function, it's taken from the outer "normal" function

```javascript
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

### Garbage collection

Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions... All that takes memory.

What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?

#### Reachability

The main concept of memory management in JavaScript is *reachability*.

Simply put, "reachable" values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

1. There's a base set of inherently reachable values, that cannot be deleted for obvious reasons.

For instance:

- The currently executing function, its local variables and parameters.

- Other functions on the current chain of nested calls, their local variables and parameters.

- Global variables.

- (there are some other, internal ones as well)
  
  These values are called *roots*.
2. Any other value is considered reachable if it's reachable from a root by a reference or by a chain of references.

For instance, if there's an object in a global variable, and that object has a property referencing another object, *that* object is considered reachable. And those that it references are also reachable. Detailed examples to follow.

There's a background process in the JavaScript engine that is called [garbage collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)). It monitors all objects and removes those that have become unreachable.
