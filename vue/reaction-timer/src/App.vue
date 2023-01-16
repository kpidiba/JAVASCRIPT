<template>
  <h1>{{ title }}</h1>
  <button @click="start" :disabled="isPlaying">
    start button
  </button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" /> 
  <!-- <p v-if="showResult" >Reaction time {{ score }}</p> -->
  <Result  v-if="showResult" :score="score"  />
</template>

<script>
import Block from './components/Block.vue';
import Result from './components/Result.vue';
export default {
  name: 'App',
  components: {
    Block,Result
  },
  data(){
    return {
      'title' : "REACTION TIMER",
      isPlaying:false,
      delay: null,
      score:null,
      showResult:false
    }
  },
  methods:{
    start(){
      this.delay = 1000 + Math.random() *5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime){
      this.showResult= true;
      this.score = reactionTime;
      this.isPlaying=false;
    }
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
