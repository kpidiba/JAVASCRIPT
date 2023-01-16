<template>
    <h1>
     Titre {{ title }}
    </h1>
    <p>{{ nom }}</p>
    <input type="text" ref="name" />
    <button @click="handleClick" >click here</button>
    <button @click="opencloseModal">open modal</button>
    <div v-if="showModal">
      <Modal :page="nom" :price="title" salaire="salaire" @close="opencloseModal" >
        <h1>Style</h1>
      <template v-slot:links >
        <a href="#">link 1</a>
        <a href="#">link 2</a>
      </template>
      <p>"une nouvelle page s' ouvre"</p>
      <p>price: tout a un price</p>
      </Modal>
    </div>
</template>

<script>
import Modal from "./components/Modal"


export default {
  name: 'App',
  components: {Modal},
  data(){
    return {
      title: "hello world",
      nom: "davido",
      page:"page have a value",
      price:4000,
      showModal:false
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      //NOTE: get focus on element 
      this.$refs.name.focus();
    },
    opencloseModal(){
      this.showModal= !this.showModal;
    },
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
