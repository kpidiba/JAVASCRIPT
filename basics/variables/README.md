# VARIABLES

A variable is a label that references a value like a number or string. Before using a variable, you need to declare it ,variables are used to store this information..

****

- **;** n ' es pas obligatoire avec javascript

- **concatenation** avec **+** 

- **type of** : to know variable type

- all variables are default objects with attributes

- **javascript** concatenate string number with number by default

- **javascript** mutiple string number with number

- **NaN** (Not a Number) example: 2*'a'

- when we pass arrays or objects, they refer to something so when we modify them it impacts everything

**Variables Declarations**

- **let** is a modern declaration

-  **var** is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from `let`(big scope)

- **const** : the value of the variable can’t be changed.

- **undefined** : a variable with no base type, which is not yet initialized

- **Table** : a variable that can contain several independent data, indexed by a number, called an index.

- **OBJECT** : It is used to store key/value sets and more complex entities, **[]** (use it to put variable as key to object)

## VARIABLE SCOPE

The scope of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes.

- **Global Variables** :  A global variable has global scope which means it can be defined anywhere in your JavaScript code.

- **Local Variables** : A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

```html
<html>
   <body onload = checkscope();>   
      <script type = "text/javascript">
         <!--
            var myVar = "global";      // Declare a global variable
            function checkscope( ) {
               var myVar = "local";    // Declare a local variable
               document.write(myVar);
            }
         //-->
      </script>     
   </body>
</html>
```

### STRING QUOTES

```javascript
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```

# Type Conversions for primitives types

Most of the time, operators and functions automatically convert the values given to them to the right type.

For example, `alert` automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

- **String Conversion** 

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

- **Numeric Conversion**    

```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

- **Boolean Conversion**

Values that are intuitively “empty”, like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`, other values become `true`.

```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

### INCREMENT/DECREMENT

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value

- Arithmetic Operators
- Comparison Operators
- Logical (or Relational) Operators
- Assignment Operators
- Conditional (or ternary) Operators
