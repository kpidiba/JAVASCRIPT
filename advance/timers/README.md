# TIMERS

Fonctionnement asynchrone permet d'effectuer plusieurs operations en meme temps(Exemple: restaurant).Effectuer plusieurs operations avec un seul processus.

- **setTimeout**: allows us to run a function once after the interval of time.

```javascript
function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);
```

- **clearTimeout** : A call to `setTimeout` returns a “timer identifier” `timerId` that we can use to cancel the execution.

```javascript
let timerId = setTimeout(...);
clearTimeout(timerId);
```

- **setIntervall** : allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

```javascript
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);
```
