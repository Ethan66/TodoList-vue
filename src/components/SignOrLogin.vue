<template>
  <div id="signOrLogin">
    <div class="title">
      <h2>Welcome TodoList!</h2>
      <p>Record every day's things</p>
    </div>
    <form>
      <div class="line">
        <label >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-user"></use>
          </svg>
        </label>
        <input type="text" placeholder="username" />
      </div>
      <div class="line">
        <label >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mima"></use>
          </svg>
        </label>
        <input type="password" placeholder="password" />
      </div>
      <p class='btn'>
        <button>Sign In</button>
      </p>
      <p class="go">
        <span>Not Registered?</span><button>GO</button>
      </p>
    </form>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang='scss'>
  #signOrLogin{
    position: fixed; top: 0; left: 0; z-index: 10; background: #fff; width: 100%; height: 100vh;
    padding-top: 50%;
    .title{
      margin-bottom: 50px;
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
        width: 100%; padding: 16px 0; border: 0; background: #999; border-radius: 6px; color: #fff; text-transform: uppercase;
        outline: 0;
      }
    }
    .go{
      display: flex; justify-content: space-between; align-content: center; padding: 16px 32px 0;
      span{

      }
      button{
        width: 50%; padding: 12px 0; border: 0; background: #999; border-radius: 6px; color: #fff; text-transform: uppercase; outline: 0;
      }
    }
  }
</style>
