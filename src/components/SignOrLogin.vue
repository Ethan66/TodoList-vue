<template>
  <div id="signOrLogin" v-show="!currentUser">
    <div class="wrap">
      <div class="title">
        <h2>Welcome TodoList!</h2>
        <p>Record every day's things</p>
      </div>
      <form v-if="show">
        <div class="line">
          <label >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-user"></use>
            </svg>
          </label>
          <input type="text" placeholder="username" v-model="formData.username" />
        </div>
        <div class="line">
          <label >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mima"></use>
            </svg>
          </label>
          <input type="password" placeholder="password" v-model="formData.password" />
        </div>
        <p class='btn'>
          <button v-on:click="login">Login</button>
        </p>
        <p class="go">
          <span>Not Registered?</span><button v-on:click="show=false">GO</button>
        </p>
      </form>
      <form v-else>
        <div class="line">
          <label >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-user"></use>
            </svg>
          </label>
          <input type="text" placeholder="username" v-model="formData.username" />
        </div>
        <div class="line">
          <label >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mima"></use>
            </svg>
          </label>
          <input type="password" placeholder="password" v-model="formData.password" />
        </div>
        <p class='btn'>
          <button v-on:click="signUp">Sign In</button>
        </p>
        <p class='btn'>
          <button v-on:click="show=true">Go back</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import AV from 'leancloud-storage'

  var APP_ID = 'q3ldfYbcpfsA4huh3VTThWo2-gzGzoHsz';
  var APP_KEY = 'fwAIkyQgu5zxnagRTK3nAxCH';

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });


  export default{
      created(){
        this.$emit("listenUser",this.getCurrentUser())
        this.fetchTodos()
      },
      props:['currentUser','todos'],
      data(){
          return {
            show:true,
            formData:{username:'',password:''},
          }
      },
    methods:{
      fetchTodos(){
        if(this.currentUser){

          var query = new AV.Query('AllTodos');
          query.find()
            .then((todos)=>{
              let avAllTodos = todos[0]
              let id = avAllTodos.id
              let tds = JSON.parse(avAllTodos.attributes.content)
              this.$emit("listenTodos",tds,id)

            }, function(error){
              console.error(error)
            })
        }
      },
       signUp(){
         let user = new AV.User();
         user.setUsername(this.formData.username);
         user.setPassword(this.formData.password);
         user.signUp().then( (loginedUser)=> {
           window.location.reload()
           this.currentUser=this.getCurrentUser()
         }, (error)=>{
           alert("注册失败")
           console.log(error)
         });
       },
      login(){
        AV.User.logIn(this.formData.username, this.formData.password).then( (loginedUser)=>{
          window.location.reload()
          this.currentUser=this.getCurrentUser()
          this.fetchTodos()
        }, (error)=>{
          alert('登录失败')
          console.log(error)
        });
      },
      getCurrentUser(){
        let current = AV.User.current()
        if (current) {
          let {id, attributes: {username}} = current
          console.log({id, username})
          return {id, username}
        } else {
          return null
        }
      },
    }
  }
</script>

<style lang='scss'>
  #signOrLogin{
    position: fixed; top: 0; left: 0; z-index: 10; background: #fff; width: 100%; height: 100vh;
    .wrap{
      position: fixed; top: 50%; left: 0; width: 100%; margin-top: -216px;
    }
    .title{
      margin-bottom: 50px;
      h2{
        margin-bottom: 8px;
      }
      p{
        color: #999;
      }
    }
    .line{
      padding: 0 32px 0 56px; margin-bottom: 16px; position: relative;
      .icon{
        width: 18px; height: 18px;
      }
      label{
        position: absolute; left: 34px; top: 7px;
      }
      input{
        width: 100%; padding: 8px 0; text-indent: 16px; border: 0; outline: 0; border-bottom: 1px solid #ddd;
      }
    }
    .btn{
      padding: 16px 32px 0;
      button{
        width: 100%; padding: 16px 0; border: 0; background: #999; border-radius: 4px; color: #fff; text-transform: uppercase;
        outline: 0;
      }
    }
    .go{
      display: flex; justify-content: space-between; align-content: center; padding: 16px 32px 0;
      span{
        line-height: 40px; font-size:13px; text-transform: uppercase;
      }
      button{
        width: 50%; padding: 12px 0; border: 0; background: #999; border-radius: 4px; color: #fff; text-transform: uppercase; outline: 0;
      }
    }
  }
</style>
