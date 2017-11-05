<template>
  <div id="app">
    <Date v-bind:dateCst="dateCst" />
    <Todos />
  </div>
</template>

<script>
  import Date from './components/Date.vue'
  import Todos from './components/Todos'
  import Date1 from './components/Date-module'
export default {
  name: 'app',
  components:{
      Date,Todos
  },
  data(){
    return {
      dateCst:Date1.dateConstructor
    }
  },
  created(){

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eee;

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
}
</style>
