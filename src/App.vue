<template>
  <div id="app">
    <Date v-bind:dateCst="dateCst" v-bind:onDate='onDate' v-bind:todos="todos" />
    <Todos  v-bind:show="showInput" v-bind:todos='todos' v-bind:onDate='onDate'/>
    <InputTodo class="inputTodo" v-show="showInput.show" v-bind:show="showInput" v-bind:onDate='onDate' v-bind:todos="todos"
     v-on:listen='ievent' />
    <SignOrLogin v-bind:currentUser="currentUser" v-on:listenUser="listenUser"  v-on:listenTodos="listenTodos" v-bind:todos="todos" />
    <div class="navIcon" v-on:click="logout1.show1=true">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-1-copy"></use>
      </svg>
    </div>
    <NavLeft v-bind:currentUser="currentUser" v-if="logout1.show1" v-bind:logout1="logout1" />
  </div>
</template>

<script>
  import Date from './components/Date.vue'
  import Todos from './components/Todos'
  import Date1 from './components/Date-module'
  import InputTodo from './components/InputTodo'
  import SignOrLogin from './components/SignOrLogin'
  import NavLeft from './components/NavLeft'
export default {
  name: 'app',
  components:{
      Date,Todos,InputTodo,SignOrLogin,NavLeft
  },
  data(){
    return {
      dateCst:Date1.dateConstructor,
      showInput:{show:false},
      onDate:{date:''},
      todos:[],
      currentUser:{id:'',username:''},
      logout1:{show1:false}
    }
  },
  created(){

  },
  methods:{
    ievent(date,obj){
      this.todos[date]=obj
    },
    listenUser(a,b,c){
      this.currentUser=a
    },
    listenTodos(a,b){
      this.todos=a
      this.todos.id=b
    }
  }

}
</script>

<style lang='scss'>
  $color:#31C1FD;
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
  position: fixed; z-index: 12;
}
  .navIcon{
    position: fixed; top: 16px; left: 16px;
    .icon{
      width: 22px; height: 22px; fill:$color;
    }
  }
}
</style>
