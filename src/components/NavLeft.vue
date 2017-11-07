<template>
  <div id="navLeft">
    <div class="content">
      <h3>
        用户名：<span v-if="currentUser.username">{{currentUser.username}}</span>
        <p v-on:click="logout1.show1=false">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui1-copy"></use>
          </svg>
        </p>
      </h3>
      <p class="btn">
        <button v-on:click="logout2">登出</button>
      </p>
    </div>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'
  export default{
    props:['currentUser','logout1'],
    computed:{

    },
    methods:{
        logout2(){
          this.logout1.show1=false
          AV.User.logOut()
          this.currentUser = {id:'',username:''}
          window.location.reload()
        }
    }
  }
</script>

<style lang='scss'>
  $color:#31C1FD;
  #navLeft{
    width: 100%; min-height: 100vh; position: fixed; top: 0; left: 0; z-index: 10; background: rgba(0,0,0,.5); padding-right: 30%;
    .content{
      width: 100%; background: #fff; min-height: 100vh;
      h3{
        padding: 32px 16px; background:$color; color: #fff; text-align:left; font-weight: normal; position: relative;
        p{
          position: absolute; right: 12px; top: 12px;
          .icon{
            width: 16px; height: 16px;
          }
        }
      }
      .btn{
        padding: 32px;
        button{
          width: 100%; padding: 10px 0; background: #999; color: #fff; border: 0; outline: 0; border-radius: 4px;
        }
      }
    }

  }
</style>
