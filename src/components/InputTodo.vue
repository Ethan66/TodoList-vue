<template>
  <div id="inputTodo">
    <header><span v-on:click="goback"><</span>输入待办事件</header>
    <form>
      <div class="line">
        <label>日期</label>
        <input type="text" disabled v-model="onDate['date']"/>
      </div>
      <div class="line">
        <label>时间</label>
        <input type="text" v-model="todo['time']" />
      </div>
      <div class="line">
        <label>事件</label>
        <input type="text" v-model="todo['event']" />
      </div>
      <button v-on:click="confirm">确定</button>
    </form>
  </div>
</template>

<script>

  export default{
    props:['show','onDate','todos'],
    data(){
        return {
            todo:{date:'',time:'',event:''}
        }
    },
    methods:{
        goback(){
          this.show.show=false
        },
        confirm(){
            if(this.todo['time']&&this.todo['event']){
              let date=this.onDate['date'];
              let newTodo={}
              newTodo[date]={time:this.todo.time,event:this.todo.event}
              this.todos.push(newTodo)
              this.todo={date:'',time:'',event:''}
              this.show.show=false
            }
        }
    }
  }

</script>

<style lang="scss">
  $color:#31C1FD;
  #inputTodo{
    position: fixed; top: 0; left: 0;  width: 100%; height: 100vh; background: #F1F1F1;
    header{
      padding: 16px; background:$color; color: #fff; font-size: 18px; position: relative;
      span{
        position: absolute; left: 16px; top: 13px; font-size: 24px;
      }
    }
    form{
      margin: 30px 10px 0;
      .line{
        width: 100%; position: relative;
        label{
          position: absolute; top: 13px; left: 13px; padding-right: 13px; border-right: 1px solid #eee;
          color: $color;
        }
        input{
          width: 100%; padding: 12px 0; background: #fff; border: none; border-bottom: 1px solid #eee;
          text-indent: 68px; font-size: 16px; outline: 0;
        }
        &:last-child{
          input{
            border-bottom: none;
          }
        }
      }
      button{
        width: 100%; padding: 12px 0; background: $color; border: none; margin-top: 20px; color: #fff;
        border-radius: 4px; letter-spacing: 4px; font-size: 16px; outline: 0;
      }
    }
  }
</style>
