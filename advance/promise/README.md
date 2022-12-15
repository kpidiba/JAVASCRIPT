# PROMISE

-

- Eviter les callback dans les callback( setTimeout )
- The keyword `await` makes JavaScript wait until that promise settles and returns its result.

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
```

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- `resolve(value)` — if the job is finished successfully, with result `value`.
- `reject(error)` — if an error has occurred, `error` is the error object.

The `promise` object returned by the `new Promise` constructor has these internal properties:

- `state` — initially `"pending"`, then changes to either `"fulfilled"` when `resolve` is called or `"rejected"` when `reject` is called.
- `result` — initially `undefined`, then changes to `value` when `resolve(value)` is called or `error` when `reject(error)` is called.

### THEN

Si le promise reussie(reslove)

```javascript
promise.then(
  function(result) { /* handle a successful result */ },
);
```

### CATCH

Si le promise echoue

```javascript
promise.catch(
    function(error)
)
```

**FINALLY**

s'execute quoi qu' il arrive

## ASYNCHRONE

```javascript
async function test{

}
```

Fonctionne comme une promesse,avec les valeurs de retours

### AWAIT

```javascript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

## FUNCTIONS

- **Promise.all()** : promise avec resultat la resolution de toutes les promesses

```javascript
Promise.all([wait(1000),wait(2000)])
.then(console.log)
.cath(console.log)
```

- **Promise.allSettled** : ignore les promesse qui echouent.

- **Promise.race** : Si la premiere promesse echou c' est un echec

- **Promise.any** : resultat de la premiere promesse resolu
