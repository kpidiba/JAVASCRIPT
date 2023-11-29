# SIGNALS

documentation:  https://angular.io/guide/signals 

First, continue to use event handlers in a component as you do now for user actions. Actions such as a selection from a drop down list, a click on a button, or an entry in a textbox.

Use a signal or a computed signal in a component for any state that could change. In this context, state refers to any data that the component manages. Everything from an `isLoading` flag to the current displayed "page" of data to the user's selected filter criteria could be signals. Signals are especially useful when displaying data in the template when that data should react to other actions.

## Genesis

Let’s start with the basics: why were they created? One may think 
that it was just a matter of “let’s add a new feature to the framework”,
 but it’s not that simple. And it’s not even a matter of *copying* what other frameworks are doing, as signals are not a new concept, they
 have been around for a while, and they are used in other libraries like
 [Preact](https://preactjs.com/guide/v10/signals/) or frameworks like [SolidJS](https://www.solidjs.com/docs/latest/api#createsignal). Indeed, SolidJS author himself says signals have been around “[since the dawn of declarative JavaScript Frameworks](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)”.  
This is not a case of “monkey see, monkey do”, but rather a case of *“let’s see what we can do better”*.
The reasoning behind these changes can be well represented by this quote by the tech lead of the Angular team, Alex Rickabaugh:

> The nature of web applications is always evolving, the performance 
> requirements evolve, the web platform itself is evolving. So Angular 
> needs to be stable, but not stagnant”. And so signals were born.

As a matter of fact, for the last decade, Angular’s team listened to 
the users’ most requested features to improve the developer experience. 
Amongst other things, some reoccurring requests concerned the necessity 
to **simplify** the usage of Angular, requiring **less boilerplate** code, augmented **performances**, more **reactivity**, and **finer control** over the components.  
(Following this [link](https://github.com/angular/angular/discussions/49090) you will find the PR that answered these requests, introducing signals for the first time.)

<img src="https://tech.sparkfabrik.com/images/content/angular-signals/ikea_signals_meme.png" title="ikea signals meme" alt="ikea signals meme" data-align="center">

### Change detection

To gain a better understanding of these requests, we must first 
digress a little bit, explaining a fundamental concept of Angular: [change detection](https://angular.io/guide/change-detection).  
At the time of writing the framework uses a library called *zone.js* to control the various changes of state inside the application.

*Zone.js* tracks all the browser’s events and every time it 
sees that something has changed, it starts a change detection cycle, in 
which it checks the components tree of the app to see if something has 
been modified, updating the views that need to be updated. On the one 
hand, this behavior is extremely useful because it automatically manages
 these checks, on the other hand, it underperforms because it constantly
 checks **all** of the components, sometimes even when there is no need to update anything.

![zone.js change detection gif](https://tech.sparkfabrik.com/images/content/angular-signals/zone_bg.gif "zone.js change detection gif")

An alternative strategy can be to use *zone.js with OnPush* in
 every component. This makes it so that the component that uses it is 
not checked during a change detection cycle unless explicitly marked 
with the `markForCheck()` function.  
This behavior may seem similar to the one before, but the main difference is that `markForCheck()` doesn’t automatically trigger the change detection for its component, 
but it just marks it to be checked on the next change detection cycle 
scheduled by zone.js .  
The downside to this strategy is that it marks not just the component that raised the `markForCheck()` flag, but **also its parent nodes**. So we have fewer components checked than before, but there is still some, let’s say over-checking spillage.

![zone.js with onpush change detection gif](https://tech.sparkfabrik.com/images/content/angular-signals/onpush_bg.gif "zone.js with onpush change detection gif")

With *signals*, however, change detection is much more precise, indicating **only** the component, or components, that have undergone some changes.

![signals change detection gif](https://tech.sparkfabrik.com/images/content/angular-signals/signals_bg.gif "signals change detection gif")

## But what is a signal?

A signal can be seen as a box around a value, and it can alert interested consumers when its value changes.

![box with value](https://tech.sparkfabrik.com/images/content/angular-signals/box_with_value.png "box with value")

It can contain every kind of value, from primitive ones to more 
complex data structures. The value of a signal is always read using a 
getter function, which is what allows Angular to track when it has been 
used.  
**Side note:** as a signal contains a value, it must always be initialized, or by default, it will be equal to `undefined`, which is not ideal.

A signal can be of one of two categories:

- [Writable](https://angular.io/guide/signals#computed-signals), which contains a value that can be directly edited
- [Computed](https://angular.io/guide/signals#writable-signals),
   in which the value is derived from other signals; in this case, we 
  can’t directly modify the computed value but this type has the added 
  plus that it has a lazy approach. This means that its value will be 
  re-evaluated not when the signals it checks are updated, but when a 
  consumer tries to read the derived computed value, which makes it useful
   to do complex operations like array filtering.

## Signals VS observables

By now, the more careful reader would probably start to think *“By
 this explanation, signals seem to be a copy of RxJS observables, as 
they seem to do the same thing, so are we reinventing the wheel here ?”*.  
To answer this question we need to open another small parenthesis before
 continuing, to get a clearer context for the ones among us who don’t 
know what observables are.

### What is an observable?

An [observable](https://rxjs.dev/guide/observable) is a collection of objects which can be observed in time, they are part of alibrary called [RxJS](https://rxjs.dev/guide/overview) which is often used in tandem with the Angular framework to manage 
asynchronous events. Unlike a normal array it does not keep memory of 
the elements, it just emits them.  
To get a silly visual aid: we can imagine an observable as a fast food 
employee manning the drive-through window: it just knows that it has to 
deliver bags of objects to consumers as time passes, in an uninterrupted
 line of customers that go by during the day.

![observable as a drive through employee delivering data object to consumer](https://tech.sparkfabrik.com/images/content/angular-signals/drive_through.png "observable as a drive through employee delivering data object to consumer")

As much as they can work with synchronous data, observables shine in 
working with asynchronous events (clicking on keyboard keys, mouse 
clicks, HTTP calls responses) or notifications (a completed or failed 
process). But they are not perfect, as observables require a manual 
subscription, and of course a manual un-subscription. Moreover, the data
 is not readily available but has to be extracted from the emitted 
values stream first.
On the other hand, signals don’t need a manual subscription, or more 
precisely, they have an implicit quasi-subscription automatically 
managed when a consumer starts listening to a signal’s value.
In addition, a signal can be called and read directly, immediately 
obtaining the value it encapsulates.
These may seem like minor differences, but for *simpler* actions 
signals require much less code and, more importantly, less RxJS 
experience, which can be extremely powerful but also really difficult 
for new (and even not-so-new) devs.

## Are we going to use only signals?

So, the one-million-dollar question is: are signals better than observables?
Well, it depends.

![it depends oranges apples meme](https://tech.sparkfabrik.com/images/content/angular-signals/it_depends.jpg "it depends oranges apples meme")

If you need to observe (no pun intended) values that change with 
time, without knowing when they do change, so asynchronously, you will 
be better off using observables. Instead, if time isn’t something you 
need to keep in the equation, you will need only signals, which are 
simpler to use.
Realistically, in the future, we will most likely use signals for most 
use cases, and only in some particular circumstances we will need all 
the power of observables.

Having reflected upon these differences, you can see how titles that 
claim that the end of RxJS in favor of signals is imminent are just 
click-bait. It’s just a matter of knowing when to use the right tool for
 the right job.
More so, the RxJS team, seeing the big picture, has already implemented 
two functions that allow the [interoperability between signals and observables](https://angular.io/api/core/rxjs-interop): `toObservable()`and `toSignal()`, allowing the 
management of complex data flux or asynchronous data without having to 
give up the usage of signals.
I want to highlight this point, as I think it’s one of the key concepts 
of Angular and its libraries: to always allow retro compatibility, 
letting new and old functionalities live side-by-side without the risk 
of breaking anything, which is not to be taken for granted. So let’s 
keep feuds to important matters, like if you can add heavy cream to a 
carbonara sauce (pro tip: never).

h signals, this is bound to change because you no longer need complex patterns to start writing performant Angular code. The introduction of signals makes Angular more approachable to beginners, and in that sense, it does mark the beginning of a completely new phase.

## Reactivity as a fundamental change

The Angular team’s motivation for introducing this feature was adding fine-grained reactivity into the framework. This concept is fundamentally different from how Angular functions today, where zone.js is used to trigger global change detection for the whole application. The changes introduced will allow:

- removal of zone.js at a certain point in the future (not imminent future; for now it is here to stay)
- creating a clear model of how data flows through the application
- built-in support for derived state
- synchronizing the parts of the UI that need to be updated
- better interoperability with other reactive libraries like RxJS. The Angular team announced a partnership with major state management libraries like NgRx, RxAngular, and many others in order to support interoperability
- simplification of the entire framework

## Why signals?

First of all, signals’ values are synchronous and always available. How many times did you want to get a simple value from an RxJS chain but had to go through all the hassle of subscribing and unsubscribing to read it? Here are some more upsides to using signals.

## Local change detection.

Whereas zone.js triggered a global change detection check, a signal-based component will be scheduled for change detection check only when a signal read in the template notifies it that it has been changed. This allows for very precise updates.

## Reading a value doesn’t trigger side effects.

## Automatic dependencies tracking.

## Signals and consumers

Signals are a system that allows Angular to granularly track where a state is used and updated in the application, which then allows the framework to optimize the application’s rendering.

Signals wrap a value that notifies all the consumers of a particular signal when this value is changed.

In signals, consumers are any part of the code that uses a signals’ value and wants to be notified about a change in that value. When a change occurs, the signal notifies all the consumers, which then act upon the change in the Signal’s value.

A signal can contain any value. It can be either read-only or writable, and it can be called anywhere in the code. Let’s say you define a signal in a service. You can then use it in a template, component, pipe, or even other services. A signal value is reactive.

## Where to find Signals

Signals are available as of Angular version 16 as a developer preview, which allows you to experiment with them. Even though the majority of the API is stable and functional, this is a major change, so you can expect bugs, and the API is still subject to change.

We would recommend avoiding using signals in production projects until they are 100% stable, and expect this to happen in Angular version 17. The developer preview only lists a basic subset of the API, while the inputs, outputs, etc., are announced for v17+.

## Overview of Signals syntax and usage

### Creating a Signal

You can create a new signal by calling a `signal()` function and passing in an argument that contains its initial value. Think of it as `BehaviorSubject` in the RxJS, but without the subscribe part.

```javascript
// Creates new signal 
const isActive = signal(false)

// Reads a signal
isActive()
```

### Marking signal as read-only

The method `asReadonly()` will return a signal which is non-writeable. You can access its value, but it does not allow changing the signal.

```javascript
// Creates new signal
 const isActive = signal(false)

 // Returns read only version of isActive signal
 const readonlyIsActive = isActive.asReadonly()
```

### Set a new signal value

To set or change the value of a signal programmatically, call the `set()` method.

```javascript
// Sets value of isActive signal to true
 isActive.set(true)
```

### Update signal value based on the previous state

If a new state is derived from an old one, use the `update()` method where the first argument of the callback function is the previous state of the signal. You can then use it to calculate the new state.

```javascript
// Updates the state based on the previous value
 isActive.update(value => !value)
```

### Mutating a signal

When working with arrays or objects, use the `mutate()` method to trigger updates. This is very useful because mutating a signal that contains an object will trigger change detection, whereas using a conventional approach wouldn’t because the object reference would remain the same. Before signals, you would either have to create a new array or object or call change detection manually.

```javascript
// Creates new signal
const items = signal({content: 'Item content'})

// Updates the property of an object
items.mutate(value => {
    value.content = 'Updated item content'
})
```

### Computed signals

Computed signals derive their value based on one or more other signals. Whenever one of those signals changes, the computed signal also changes.

It’s important to note that computed values are cached, meaning that every future read of that computed signal will return cached values instead of recalculating them, until the signals computed depend on the changes. You can think of them as pure pipes where the `transform()` function won’t run until the value changes. Computed signals take a derivation function to calculate value, and it is not possible to programmatically set the value using `set` or `mutate` methods. The dependencies inside the computed signals are dynamic, which means if you have some expensive nested signal computations, only the ones read during computations will be executed.

There’s another important note here – anything derived from a signal is also a signal.

```javascript
// Creates new signal
const isActive = signal(false)

// Creates new signal based on isActive
const isActiveLabel = computed(() => 
   isActive() ? 'Active' : 'Inactive'
 )
```

### Running side effects

The `effect` function is used for triggering side effects when one or more signals inside it change. Every effect function will run at least once, and every signal that has been called inside it becomes tracked. If any of those signals change, the effect function will execute again.

Use the `effect` function wisely and don’t use it to propagate state changes, as you can unintentionally introduce circular references or change detection cycles. An effect can only be called inside of the injection context, similar to the inject API. Meaning you cannot register an effect inside of a function call, for example.

Effects automatically destroy when the context they were created in (component/service) gets destroyed or they can be removed manually using the destroy method. Always make sure to destroy an effect, similar to how you would handle subscriptions in an app, or you risk memory leaks.

```javascript
// Creates new signal
const isActive = signal(false)

// Registers new effect which will run whenever isActive changes
effect(()=> {
    console.log(`The isActive signal changed value to ${isActive()}`)
 })
```

### Interoperability with RxJS

The introduction of signals doesn’t mean that the Angular team is abandoning RxJS. In fact, they will make RxJS integration easier.

While signals are great for handling synchronous reactivity, they are not a good out-of-the-box solution for asynchronous reactivity (think API calls). The reason for this is that signals are synchronous and will set the value that came in last. For example, since the time of API calls varies, it may happen that a wrong value is set. However, you can transform an observable into a signal by calling `toSignal()` or vice versa by calling `toObservable()`.

#### toSignal

The `toSignal` function internally subscribes to the given Observable and updates the returned signal any time the Observable emits a value. This subscription is created immediately as opposed to waiting until the signal is read.

The signature of the `toSignal` function supports both synchronous and asynchronous Observables. Signals always need to have an initial value. In case one is not provided, the signal value remains undefined until an Observable emits the first value. This is useful if the Observable turned to signal is, for example, an API call.

The unsubscribe part is the same as the effect when the context in which the signal has been created is destroyed.

```javascript
// Creates an source observable
 const isActive$ = of(true).pipe(delay(5000))

// Transforms an observable to a signal with initial value of false
// The value of signal will be set to true after 5 seconds
 const isActive = toSignal(isActive$, {initialValue: false})
```

#### toObservable

`toObservable` is a function that takes an Angular Signals and returns an Observable. It does this by creating an effect under the hood when the Observable is subscribed to. This effect takes values from the signal and streams them to subscribers. All values are asynchronous. The function `toObservable` must be called in an injection context.

```javascript
// Creates new signal
const isActive = signal(true)

// Transforms a signal to an observable
const isActive$ = toObservable(isActive)
```

### Function calls in a template

Over the years, Angular developers have learned to avoid calling functions inside templates because a function re-runs every change detection and used pure pipes instead. This would cause expensive computations to run multiple times unnecessarily if the passed arguments did not change.

In a signal-based component, this idea no longer applies because the expressions will only re-evaluate as a result of a signal dependency change.

With signals, we no longer have to care about handling subscriptions. It is absolutely fine to call a signal function in the template since only the part that depends on that signal will be updated.

```javascript
// example.component.ts
// Creates new signal
const isActive = signal(false)

// Creates new signal based on isActive
const isActiveLabel = computed(() => 
     isActive() ? 'Active' : 'Inactive'
 )

// example.component.html
// isActiveLabel will only run when the signal changes
<p>
  {{ isActiveLabel() }}
</p>
```

- When you need to **update a simple value** (string, number, boolean), use `set()`.
- If that **new value is based on the previous one**, use `update()` instead of `set()`
- Finally, **in all other scenarios**, when working with objects or arrays, use `mutate()`

Despite the possibility of its reduced usage in the future, RxJS is a long-term fixture that will remain relevant. Angular has no intentions of eliminating RxJS or compelling users to switch from observables to signals. In fact, using RxJS is likely a superior approach for responding to signal changes compared to utilizing effects.

There is also the option of utilizing signals and observables simultaneously and converting between the two. The newly introduced @angular/core/rxjs-interop package provides two functions for this purpose.

For converting a signal into an observable, the toObservable function can be employed.

***const count$ = toObservable(count);***

Please be aware that the observable you create will not capture every single value alteration of the signal. This is due to the fact that an effect is employed in the background, and effects are exclusively executed during the change detection process.

***const count = signal(0);***

***const count$ = toObservable(count);***

***count$.subscribe(value => console.log(value));***

***count.set(1);***

***count.set(2);***

You must use the to Signal method for converting the observable to signals.

***const count = toSignal(count$);***

The signal obtained from the observable will either contain the most recent emitted value or throw an error in case of an error emitted by the observable. It’s important to mention that the subscription created using the toSignal() function will be automatically unsubscribed when the component that initially created it is destroyed.

Since observables can operate asynchronously, you have the option to provide an initial value to the function.

***const count = toSignal(count$, { initialValue: 0}););***

Without an initial value, it will be considered “undefined”. You can use the “requireSync” for allowing the signal to throw an error if it is read before the observable emits the value.

***const count = toSignal(count$, { requireSync: true }););***

Reading all the exciting scopes of signals in [Angular](https://bit.ly/3ov3GiM) and how it can turn the tables for Angular, it seems that Angular has much to offer in the coming years.

No doubt that Angular is growing into a beautiful framework allowing developers to improve their coding skills with improved experiences.

### EFFECT

Un **effet** est une opération qui s’exécute lorsqu’une ou plusieurs valeurs de signal changent. Il est possible de **créer un effet** via la fonction `effect` :

```
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

Les effets vont toujours s’exécuter **au moins une fois**.
 Lorsqu’un effet s’exécute, il va suivre toute la valeur de signal lue. 
Chaque fois qu’une des valeurs de signal change, l’effet **s’exécute en amont**.
 De plus, les effets gardent une trace de leurs dépendances de façon 
dynamique et ils ne suivent que les signaux lus pendant l’exécution. Ces
 effets s’exécutent toujours de **manière asynchrone** lors du processus de détection des modifications.



### Use cases for effects

Effects are 
rarely needed in most application code, but may be useful in specific 
circumstances. Here are some examples of situations where an `[effect](https://angular.io/api/core/effect)` might be a good solution:

- Logging data being displayed and when it changes, either for analytics or as a debugging tool
- Keeping data in sync with `window.localStorage`
- Adding custom DOM behavior that can't be expressed with template syntax
- Performing custom rendering to a `<canvas>`, charting library, or other third party UI library

#### When not to use effects

Avoid using effects for propagation of state changes. This can result in `ExpressionChangedAfterItHasBeenChecked` errors, infinite circular updates, or unnecessary change detection cycles.

Because of these risks, setting signals is disallowed by default in effects, but can be enabled if absolutely necessary.

### Injection context

By default, registering a new effect with the `[effect](https://angular.io/api/core/effect)()` function requires an [injection context](https://angular.io/guide/dependency-injection-context) (access to the `inject` function). The easiest way to provide this is to call `[effect](https://angular.io/api/core/effect)` within a component, directive, or service `constructor`:

      ``@[Component](https://angular.io/api/core/Component)({...}) export class EffectiveCounterCmp {   readonly count = [signal](https://angular.io/api/core/signal)(0);   constructor() {     // Register a new effect.     [effect](https://angular.io/api/core/effect)(() => {       console.log(`The count is: ${this.count()})`);     });   } }``

Alternatively, the effect can be assigned to a field (which also gives it a descriptive name).

      ``@[Component](https://angular.io/api/core/Component)({...}) export class EffectiveCounterCmp {   readonly count = [signal](https://angular.io/api/core/signal)(0);     private loggingEffect = [effect](https://angular.io/api/core/effect)(() => {     console.log(`The count is: ${this.count()})`);   }); }``

To create an effect outside of the constructor, you can pass an `[Injector](https://angular.io/api/core/Injector)` to `[effect](https://angular.io/api/core/effect)` via its options:

      ``@[Component](https://angular.io/api/core/Component)({...}) export class EffectiveCounterCmp {   readonly count = [signal](https://angular.io/api/core/signal)(0);   constructor(private injector: [Injector](https://angular.io/api/core/Injector)) {}    initializeLogging(): void {     [effect](https://angular.io/api/core/effect)(() => {       console.log(`The count is: ${this.count()})`);     }, {injector: this.injector});   } }``

### Destroying effects

When you create an
 effect, it is automatically destroyed when its enclosing context is 
destroyed. This means that effects created within components are 
destroyed when the component is destroyed. The same goes for effects 
within directives, services, etc.

Effects return an `[EffectRef](https://angular.io/api/core/EffectRef)` that can be used to destroy them manually, via the `.destroy()` operation. This can also be combined with the `manualCleanup` option to create an effect that lasts until it is manually destroyed. 
Be careful to actually clean up such effects when they're no longer 
required.
