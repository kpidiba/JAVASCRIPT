<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <!--NOTE: Dynamic link -->
    <router-link :to="{ name : 'about' }" >About</router-link>|
    <router-link :to="{name : 'jobDetail',params:{ id: 12 }}">Job</router-link>

    <!-- NOTE: buttons  -->
    <br/><br/>
   
  </div>
    <button @click="redirect">Redirecct</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go Forward</button>
    <button>kddkdk</button>
  <router-view/>
</template>

<script>
export default {
  methods:{
    redirect(){
      this.$router.push({name: 'about'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
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
}
button{
  margin: 0 10px;
  padding:10px;
  border:none;
  border-radius: 4px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding:10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
