<template>
  <div class="reactive">
    Home
    <p ref="p">Reactive : MY name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <!-- NOTE: names -->
    <br />
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";

export default {
  setup() {
    const search = ref("");
    const name = ref("florento");
    const age = ref(20);

    const names = ref([
      "jojo",
      "bizarre",
      "adventure",
      "kujo jotaro",
      "dio brando",
    ]);

    const handleClick = () => {
      console.log("reactive");
      name.value = "david";
      age.value = 23;
    };

    watch(search, ()=>{
        console.log("modification de la valeur");
    })
    //opposite stopwatch or stopEffect and pass watch or Effect 
    watchEffect(()=>{
        console.log("watchEffect function ran",search.value);
    })

    const matchingNames = computed(()=>{
        return names.value.filter((name) => name.includes(search.value))
    })

    return { name, search,matchingNames, age, names, handleClick };
  },
};
</script>

<style>
</style>