# bigger

Every vue file represent a single vue component

### PARTS

- **Html template** (a la place de l' html)

```js
<template>


</template>
```

- **script**: export component object

- style tag (optional)

- **App.vue** is a route component, tous les composents se greffent sur lui

- child component, parent component, Component tree

- component herite du style du parent

- style apply for global application create style in assets and import it.

- **custom event** 

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

- node_modules : library and dependencies are stored in

- public: where vue inject dynamicly template.

### VUE JS ARCHITECTURE

It is a pretty standard structure, but not suitable for middle or large applications. We’re going to concentrate on the `src`folder, but before we continue let’s take a quick look at other folders.

`public` folder is using if you need:

- file with special name in the build output
- dynamic reference for images
- if library is incompatible with Webpack

More info how to use public folder you can find [here](https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder).

`tests/e2e` for end-to-end tests.

`tests/unit` for unit tests.

# Source folder structure

How let’s start to structure our new project and `src` folder. Here is the structure I would like to present:

src  
--assets  
--common  
--layouts  
--middlewares  
--modules  
--plugins  
--router  
--services  
--static  
--store  
--views

We are going to walk through all folders one by one and understand why we need it.

## Assets

In this directory, we are going to store all assets files. Here we want to save fonts, icons, images, styles etc.

## Common

This folder is using to save common files. Usually, it could be separated into multiple inner folders: `components` `mixins` `directives` etc, or single files: `functions.ts` `helpers.ts` `constants.ts` `config.ts` and other. The main reason to put a file into this folder is using it in many places. For example: inside `src/common/components` you can store `Button.vue` — the shared component, used throughout the whole application. In `helpers.ts` you can write a common function to use it in multiple places.

## Layouts

I already covered the layout problem in one of my previous [articles](https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b). You can save your app layouts in this directory. For example: `AppLayout.vue`.

## Middlewares

This directory closely works with vue router. You can store your navigation guards inside this folder. Here is a short example of a single middleware

*export default function* checkAuth(next, isAuthenticated) {  
  *if* (isAuthenticated) {  
    next('/')  
  } *else {*    next('/login');  
  }  
}

and use it inside the vue-router

*import* Router *from* 'vue-router'  
import checkAuth from '../middlewares/checkAuth.js'  
const isAuthenticated = true*const* router = *new* Router({  
  ***routes:*** [],  
  mode: 'history'  
})router.beforeEach((to, from, next) => {  
  *checkAuth(next,* isAuthenticated*)*  
});

More advance topic about router and middlewares you can find in this [article](https://itnext.io/vue-tricks-smart-router-for-vuejs-93c287f46b50).

## Modules

This is the core of our application. Here we store all our modules — logically separated parts of our application. I encourage you inside each module create:

- an inner components' folder where you can save your vue components
- tests folder (I prefer to keep all related tests in the module)
- store.ts or store directory, where you keep your store module
- other files related to this module. It could be helper functions related only to the module.

For example, this is the example of a `orders` module, where you store all components related to orders in your app: list of orders, order details, etc. Orders vuex store module. Additional related files. It could look like:

src  
--modules  
----orders  
------__tests__  
------components  
--------OrdersList.vue  
--------OrderDetails.vue  
------store  
--------actions.ts  
--------getters.ts  
--------mutations.ts  
--------state.ts  
------helpers.ts  
------types.ts

## Plugins

In this folder you can create and connect all your plugins. Here is an example of plugin connection in Vue 2

import MyPlugin from './myPlugin.ts'Vue.use(MyPlugin, { someOption: true })

In Vue 3 you will connect your plugin in main.ts. But you still can create your plugins inside plugin folder.

More about plugins you can read [here](https://vuejs.org/v2/guide/plugins.html) and [here](https://v3.vuejs.org/guide/plugins.html#using-a-plugin).

## Services

This folder is needed to store your services. For example, you can create and save an API connections service, localStorage manager service, etc.

More about vue api module you can read [here](https://itnext.io/vue-tricks-smart-api-module-for-vuejs-b0cae563e67b?source=your_stories_page-------------------------------------).

## Static

Usually, you do not need this folder. It could be used to save some dummy data.

## Router

Inside this directory you can store all files related to vue-router. It could be just index.ts with router and routes in one place (in this case it probably a good idea to store this file in `src` root). I prefer to separate router and routes into two different files to avoid mess.

In this [article](https://itnext.io/vue-tricks-smart-router-for-vuejs-93c287f46b50?source=your_stories_page-------------------------------------) you can read how to create an automatic router for your application.

## Store

This is vuex store directory where you can save all vuex related files. Since you want to separate your vuex modules, in this folder you should store root state, actions, mutations and getters and automatically connect all vuex modules from the `modules` directory.

## Views

This is the second most important folder in our application. Here we store all entry points for applications’ routes. For example, in your application you can have `/home` `/about` `/orders` routes. Respectively, in the `views` folder you should have `Home.vue` `About.vue` `Orders.vue`.

You could argue, why we should separate `views` and `modules`, if we can store them in the one place? I see a few pros to separate them:

- more clear files structures
- let you quick understand which routes you have in the application
- easy to understand which file is root on the page and where it starts to work

### EVENT MODIFIER

- @click.right

### SLOTS (for template)

- [Slots | Vue.js](https://vuejs.org/guide/components/slots.html) 
