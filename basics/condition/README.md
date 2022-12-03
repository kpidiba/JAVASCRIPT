# CONDITIONS

Sometimes, we need to perform different actions based on different conditions.

```javascript
      if (year < 2015) {
        alert("Too early...");
      } else if (year > 2015) {
        alert("Too late");
      } else {
        alert("Exactly!");
      }
```

### SWITCH

The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression. The interpreter checks each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.

```javascript
switch (expression) {
   case condition 1: statement(s)
   break;

   case condition 2: statement(s)
   break;
   ...

   case condition n: statement(s)
   break;

   default: statement(s)
}
```

- **difference between == and ===** : == is used for comparing two variables, but it ignores the datatype of variable whereas === is used for comparing two variables, but this operator also checks datatype and compares two values.

- **[] == []** : because it creates new different objects for the two arrays.

## METHODS

- **isNaN** :  **determines whether the passed value is the number value NaN , and returns false if the input is not of the Number type**..
