<template>
  <div id="inputTodo" v-if="onDate['date']">
    <header><span v-on:click="goback"><</span>输入待办事件</header>
    <form>
      <div class="line">
        <label>日期</label>
        <input type="text" disabled v-model="onDate['date']"/>
      </div>
      <div class="line">
        <label>时间</label>
        <input type="text" v-model="td['time']" />
      </div>
      <div class="line">
        <label>事件</label>
        <input type="text" v-model="td['event']" />
      </div>
      <button v-on:click="confirm">确定</button>
    </form>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'
  export default{
    props:['show','onDate','todos'],
    data(){
        return {
            td:{date:'',time:'',event:''}
        }
    },
    methods:{
        goback(){
          this.show.show=false
        },
        confirm(){
            if(this.td['time']&&this.td['event']){
              let date=this.onDate['date'];
              let newTodo={}
              newTodo={date:date,time:this.td.time,event:this.td.event,completed:false,deleted:false}
              this.td={date:'',time:'',event:''}
              this.todos.push(newTodo)
              this.saveOrUpdateTodos()
//              this.todos[date]={time:this.td.time,event:this.td.event}
              this.show.show=false
            }
        },
      saveOrUpdateTodos(){
        if(this.todos.id){
          this.updateTodos()
        }else{
          this.saveTodos()
        }
      },
      saveTodos(){
        let dataString = JSON.stringify(this.todos)
        var AVTodos = AV.Object.extend('AllTodos');
        var avTodos = new AVTodos();
        var acl = new AV.ACL()
        acl.setReadAccess(AV.User.current(),true)
        acl.setWriteAccess(AV.User.current(),true)
        avTodos.set('content', dataString);
        avTodos.setACL(acl)
        avTodos.save().then((todo)=>{
          this.todos.id = todo.id
          console.log('保存成功');
        }, function (error) {
          alert('保存失败');
        });
      },
      updateTodos(){
        let dataString = JSON.stringify(this.todos)
        let avTodos = AV.Object.createWithoutData('AllTodos', this.todos.id)
        avTodos.set('content', dataString)
        avTodos.save().then(()=>{
          console.log('更新成功')
        })
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
