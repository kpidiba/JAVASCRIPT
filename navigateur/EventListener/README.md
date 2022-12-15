# EVENTLISTENER

*An event* is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

Here’s a list of the most useful DOM events, just to take a look at:

**Mouse events:**

- `click` – when the mouse clicks on an element (touchscreen devices generate it on a tap).
- `contextmenu` – when the mouse right-clicks on an element.
- `mouseover` / `mouseout` – when the mouse cursor comes over / leaves an element.
- `mousedown` / `mouseup` – when the mouse button is pressed / released over an element.
- `mousemove` – when the mouse is moved.

**Keyboard events:**

- `keydown` and `keyup` – when a keyboard key is pressed and released.

**Form element events:**

- `submit` – when the visitor submits a `<form>`.
- `focus` – when the visitor focuses on an element, e.g. on an `<input>`.

**Document events:**

- `DOMContentLoaded` – when the HTML is loaded and processed, DOM is fully built.

**CSS events:**

- `transitionend` – when a CSS-animation finishes.

There are many other events. We’ll get into more details of particular events in upcoming chapters.

## DEFINITION

To react on events we can assign a *handler* – a function that runs in case of an event.

Handlers are a way to run JavaScript code in case of user actions.

There are several ways to assign a handler. Let’s see them, starting from the simplest one.

### SYNTAX

```js
element.addEventListener(event, function, useCapture);
```

**example**

```js
element.addEventListener("click", function(){ alert("Hello World!"); });
```

**example(sur plusieurs button)**

```js
const btn = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e =>{
        const text = button.innerText;
    if(text === "123"){
        button.innerText = '1234';
    }else{
        button.innerText = '123';
    }
    })
})
```

### EVENT PROPERTY

- **target**(la veritable cible de l' evenement)

- **currentTargent**(l' element sur lequel on ecoute)

### METHOD DANS addEventListiner

```js
button.addEventListener("click", (e) => this.remove(e));
```

### METHODS

- preventDefault(): empeche le comportement par defaut

- **stopPropagation()**: eviter la propagation quand on a plusieurs listeners des elements parents aux enfants(jusqu'au body).

### USECAPTURE

- **once** : on peut utiliser le listener qu' une seul fois(boolean)

- **capture** :inverse le systeme de propagation
* **passive** : la fonction du listener n' appliquera pas preventDefault(),question de performance.

### CUSTOM EVENT

creer nos propres evenements

```js
this.element.dispatch(
    new CustomEvent('delete',property:value)
)
```

**property**

- detail: put the value of variable or other.

- cancelable: to use preventDefault on the event.
