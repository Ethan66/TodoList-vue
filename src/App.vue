<template>
  <div id="app">
    <Date />
    {{d}}
    <Todos />
  </div>
</template>

<script>
  import Date from './components/Date'
  import Todos from './components/Todos'
  import date from './components/Date.js'
export default {
  name: 'app',
  components:{
      Date,Todos
  },
  data(){
    return {
        d:date
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
