<template>
  <div class="login">
    <div class="container">
      <div class="login-area">
        <h2>管理员登陆</h2>
        <LoginInput type="text" placeholder="管理员" v-model="user" />
        <LoginInput type="password" placeholder="密码" v-model="pwd" />
        <button class="login-btn">登陆</button>
        <h6 class="login-tip">联系管理员</h6>
        <p class="login-contact">联系电话：15181210944 邮箱：1572304705@qq.com</p>
      </div>
      <span class="submit-enter" @click="$router.push('/submit')">非管理员入口</span>
    </div>
  </div>
</template>
<script>
import LoginInput from "../components/common/LoginInput";
export default {
  name: "Login",
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  components: {
    LoginInput
  }
};
</script>
<style lang="scss" scoped>
.login,
.container {
  height: 100%;
  overflow: hidden;
}
.container {
  background-image: url("../assets/images/background.jpg");
  background-size: 100% 100%;
  .login-area {
    width: 400px;
    height: 500px;
    margin: 87px auto;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 50px 50px 30px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    h2 {
      margin-bottom: 50px;
      text-align: center;
      font-size: 20px;
      color: #ea6f5a;
    }
    .login-btn {
      width: 100%;
      height: 43px;
      margin-top: 50px;
      border-radius: 25px;
      border: none;
      outline: none;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      background-color: #3194d0;
      transition: 0.5s;
      &:hover {
        background-color: #187cb7;
      }
    }
    .login-tip {
      position: relative;
      margin: 30px 0 30px 120px; 
      font-size: 12px;
      color: #4a5a6a;
      &::before {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        left:-70px;
      }
      &::after {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        right:50px;
      }
    }
    .login-contact {
      margin-left: 5px;
      font-size: 11px;
    }
  }
  .submit-enter {
    position: fixed;
    right: 400px;
    bottom: 120px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
  }
}
</style>