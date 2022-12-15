# EXCEPTIONS

No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.

Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

But there’s a syntax construct `try...catch` that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

```javascript
try {

  // code...

} catch (err) {

  // error handling

}
```

## THROW OPERATOR

The `throw` operator generates an error.

```javascript
throw  <error object>
```

Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with `name` and `message` properties (to stay somewhat compatible with built-in errors).

JavaScript has many built-in constructors for standard errors: `Error`, `SyntaxError`, `ReferenceError`, `TypeError` and others. We can use them to create error objects as well.

- **Error Object**

```javascript
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```


