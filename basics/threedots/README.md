# THREE DOTS

`   ...` (three dots in JavaScript) is called the Spread Syntax or Spread Operator. This allows an iterable such as an **array** expression or **string** to be expanded or an **object** expression to be expanded wherever placed. This is not specific to React. It is a JavaScript operator.

All these answers here are helpful, but I want to list down the mostly used practical Use Cases of the [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (Spread Operator).

**1. Combine Arrays (Concatenate Arrays)**

There are a [variety of ways to combine arrays](https://davidwalsh.name/combining-js-arrays), but the spread operator allows you to place this at any place in an array. If you'd like to combine two arrays and place elements at any point within the array, you can do as follows:

```javascript
var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];

// arr2 = ["one", "two", "three", "four", "five"]
```

**2. Copying Arrays**

When we wanted a copy of an array, we used to have the [`Array.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method. But, you can do the same with the spread operator.

```javascript
var arr = [1,2,3];
var arr2 = [...arr];
// arr2 = [1,2,3]
```

**3. Calling Functions without Apply**

In ES5, to pass an array of two numbers to the `doStuff()` function, you often use the [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) method as follows:

```javascript
function doStuff (x, y, z) {}
var args = [0, 1, 2];

// Call the function, passing args
doStuff.apply(null, args);
```

However, by using the spread operator, you can pass an array into the function.

```javascript
doStuff(...args);
```

**4. Destructuring Arrays**

You can use destructuring and the rest operator together to extract the information into variables as you'd like them:

```javascript
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
```

**5. Function Arguments as Rest Parameters**

ES6 also has three dots (`...`) which indicates a rest parameter that collects all remaining arguments of a function into an array.

```javascript
function f(a, b, ...args) {
  console.log(args);
}

f(1, 2, 3, 4, 5); // [3, 4, 5]
```

**6. Using Math Functions**

Any function where spread is used as the argument can be used by functions that can accept any number of arguments.

```javascript
let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1
```

**7. Combining Two Objects**

You can use the spread operator to combine two objects. This is an easy and cleaner way to do it.

```javascript
var carType = {
  model: 'Toyota',
  yom: '1995'
};

var carFuel = 'Petrol';

var carData = {
  ...carType,
  carFuel
}

console.log(carData);
// {
//  model: 'Toyota',
//  yom: '1995',
//  carFuel = 'Petrol'
// }
```

**8. Separate a String into Separate Characters**

You can use the spread operator to spread a string into separate characters.

```javascript
let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]
```

You can think of more ways to use the Spread Operator. What I have listed here are the popular use cases of it.
