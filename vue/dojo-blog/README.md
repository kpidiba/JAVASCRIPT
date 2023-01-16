# dojo-blog

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### COMPOSITION API

Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options. It is an umbrella term that covers the following APIs:

- [Reactivity API](https://vuejs.org/api/reactivity-core.html), e.g. `ref()` and `reactive()`, that allows us to directly create reactive state, computed state, and watchers.

- [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle.html), e.g. `onMounted()` and `onUnmounted()`, that allow us to programmatically hook into the component lifecycle.

- [Dependency Injection](https://vuejs.org/api/composition-api-dependency-injection.html), i.e. `provide()` and `inject()`, that allow us to leverage Vue's dependency injection system while using Reactivity APIs.

The Composition API is an addition to the Vue framework created to address the limitations of the Options API used in Vue 2. The Composition API provides a way to manage reactivity in an application without compromising code organization and readability. As an alternative to the Options API offers more benefits. With the Composition API, you can restructure data, method, computed, and watch, in a clearer structure.

```java
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### COMPONENTS VS VIEWS

Generally re-usable views are suggested to be placed in `src/components` directory. Examples like Header, Footer, Ads, Grids or any custom controls likes styled text boxes or buttons. One or more components can be accessed inside a view.

A View can have component(s) and a view is actually intended to be accessed by navigation url. They are generally placed in `src/views`.

Remember that you are not constrained to access the Components via url. You are free to add any component to the `router.js` and access it too. But if you are intended to do it so, you can move it to a `src/views` rather than placing it in `src/components`.

### COMPUTED

You can use computed properties to calculate and display values based on a value or set of values in the data model. It can also have some custom logic that is cached based on its dependencies, meaning it doesn’t reload but does have a dependency that changes, allowing it to somewhat listen to changes and act accordingly.

```javascript
<template>
  <div class="hello">
    <h1>{{ count }}</h1>
  </div>
</template>


<script>
export default {
  name: "HelloWorld", 
  data() {
    return {
      shopNumber: 2
    }
  },
  computed: {
    count: function() {
      return 'The shop number is ' + this.shopNumber 
    }
  }
}; 
</script>
```

```javascript
<script>
export default {
  name: "ComputedCalculation",

data() {
  return {
    number: 2
  }
},
computed: {
  totalMarks() {
    return this.number * 2;
  }
}
};
</script>
```

### DIFFERENCE REF AND REACTIVE

```javascript
//ref access value
variable.value.age =14
//reactive, don't take primitive type
variable.age =14
```
