<template>
  <div id="app">
    <Date />
  </div>
</template>

<script>
  import Date from './components/Date'
export default {
  name: 'app',
  components:{
      Date
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
