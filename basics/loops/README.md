# LOOPS

*Loops* are a way to repeat the same code multiple times.

### WHILE LOOP

```php
while (condition) {
  // code
  // so-called "loop body"
}
```

- **Curly braces are not required for a single-line body** 

```php
let i = 3;
while (i) alert(i--);
```

### DO WHILE LOOPS

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

```php
do {
  // loop body
} while (condition);
```

### FOR LOOPS

 **An iterative statement which you use to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met**

```php
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
```

- **Skipping parts**

```php
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
```

- **use to iterate through arrays**

```php
const parc = [0, 12, 45, 49];
      for (let a = 0; a < 4; a++) {
        console.log(parc[a]);
      }
```

**or** with a equals key or index

```php
const parc = [0,1,2,3];
for(let a in parc){
    console.log(parc[a]);
}
```

**or** with i equals value

```php
const parc = [0,1,2,3];
for(let a of parc){
    console.log(parc[a]);
}
```
