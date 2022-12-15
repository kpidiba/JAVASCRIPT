# MODULES

## INTRODUCTION

As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.

For a long time, JavaScript existed without a language-level module syntax. That wasn’t a problem, because initially scripts were small and simple, so there was no need.

But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.

**WHAT IS A MODULE?**

A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives `export` and `import` to interchange functionality, call functions of one module from another one:

- `export` keyword labels variables and functions that should be accessible from outside the current module.
- `import` allows the import of functionality from other modules.

For example, if we have a file `sayHi.js` exporting a function:

```javascript
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

Another can access to it

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

The `import` directive loads the module by path `./sayHi.js` relative to the current file, and assigns exported function `sayHi` to the corresponding variable.

- import rename

```js
import {sum as somme,hello} from './array.js'
```

- import all

```js
import * as A  from './Array.js'
A.sum([1,2,3]);
```

- **export default**

```js
export default function (){
    console.log('hello');
}
//in the import file
import hello from './hello.js'
hello();


//syntax
import {sum,default as hello} from './array.js'
```
