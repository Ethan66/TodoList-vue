<template>
  <div id="app">
    <Date v-bind:dateCst="dateCst" v-bind:onDate='onDate' v-bind:todos="todos" />
    <Todos  v-bind:show="showInput" v-bind:todos='todos' v-bind:onDate='onDate'/>
    <InputTodo class="inputTodo" v-show="showInput.show" v-bind:show="showInput" v-bind:onDate='onDate' v-bind:todos="todos"
     v-on:listen='ievent'/>
  </div>
</template>

<script>
  import Date from './components/Date.vue'
  import Todos from './components/Todos'
  import Date1 from './components/Date-module'
  import InputTodo from './components/InputTodo'
export default {
  name: 'app',
  components:{
      Date,Todos,InputTodo
  },
  data(){
    return {
      dateCst:Date1.dateConstructor,
      showInput:{show:false},
      onDate:{date:''},
      todos:[]
    }
  },
  created(){

  },
  methods:{
      ievent(date,obj){
         this.todos[date]=obj
      }
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
  background: #f1f1f1;

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.inputTodo{

}
}
</style>
