<template>
  <div id="todos">
    <h3>我当天的任务清单</h3>
    <ol>
      <li v-for="(todo,index) in onDateTodo" v-bind:class="{completed:todo['completed'],deleting:delete1==index}" v-on:click="deletingTodo(index)">
        <input type="checkbox" v-model="todo['completed']" />
        <i class="time">{{todo['time']}}</i>
        <span>{{todo['event']}}</span>
        <p class="delete" v-on:click="onDateTodo=todo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shanchu"></use>
          </svg>
        </p>
      </li>
    </ol>
    <div class="btn" v-on:click="show.show=true">
      <p >+</p>
    </div>
  </div>
</template>

<script>
  export default{
      props:['show','todos','onDate'],
      computed:{
        onDateTodo:{
            get(){
              let arr=this.todos.filter((value,index)=>{
                    return (value['date']==this.onDate.date&&value['deleted']==false)
                })
              return arr
            },
          set(todo){
            for(let i=0;i<this.todos.length;i++){
              if(this.todos[i]==todo){
                this.todos[i]['deleted']=true
              }
            }
          }
        }
      },
      data(){
          return {
              delete1:'999999'
          }
      },
      methods:{
          deletingTodo(index){
              this.delete1=index
          },
      }
  }
</script>

<style lang='scss'>
  $color:#31C1FD;
  #todos{
    margin-top: 12px; background: #fff; text-align: left;
    h3{
      font-size: 14px; padding: 8px 32px; border-bottom: 1px solid #ddd; display: flex; align-items: center; font-weight: normal;
      color: #000;
      &:before{
        display: block; content: ""; width: 3px; height: 14px; background: $color; margin-right: 16px;
      }
    }
    ol{
      overflow: hidden;
    }
    li{
      padding: 16px 32px; border-bottom: 1px solid #ddd; font-size: 16px; position: relative;
      &.completed{
        color: #aaa;
      }
      &.deleting{
        left: -52px;
      }
      i{
        font-style: normal; margin-right: 8px; color: #999;
      }
      span{
         font-size: 15px; max-width: 200px;
      }
      input{
        vertical-align: 0px;
      }
      .delete{
        height: 100%; padding: 10px 12px; position: absolute; top: 0; right: -52px; background: #72617E;
        .icon{
          width: 28px; height: 28px; fill: white;
        }
      }
    }
    .btn{
      position: fixed; bottom: 4px; right: 8px; padding: 6px; border-radius: 50%; background: rgba(49, 193, 253,.2);
      p{
        line-height: 40.03px; padding: 0 6px; font-size: 48px; color: #fff; background:$color;
        border-radius: 50%;
      }
    }
  }
</style>
