# BASIC

- add this  or download it for local work

- ```
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>\
  ```

- Getting starting

```js
const app = Vue.createApp({
    template: "<i>simple page</i>" 

}); 

app.mount('#app');
```

## DATA COMPONENTS

- injection de donne

```js
data(){
        return {
            title:"hello world"
        }
    }
```

- recuperer avec **{{ title }}**

- modify **data** inside the app

```js
 <button v-on:click="salary*=2">Increase salary</button>
```

- modify **data** inside the component

```js
methods:{
    changeSalary(){
        this.salary+=20;
        console.log('click this')
    }
  }
```

```html
<button @click="changeSalary">change salary</button>
```

### EVENTS

- directive to react to event **v-on:event(exemple:click)**

- **v-on:** equals **@** 

- **v-bind** equals **:** 

### CONDITIONAL RENDERING

- **v-if="true"** ,can remove element from the dom

```html
<div v-if="true">

</div>
```

- **v-show** to show an element or not ,**boolean** value, use display:none; don't remove element from the dom

- 
