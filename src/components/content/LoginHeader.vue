<template>
  <div class="header">
      <div class="header-logo-left">
        <img src="../../assets/images/logo@dis.png" alt="问题查看" />
      </div>
      <div class="header-desc-right">
        <div class="desc1" @click="$router.push('problem')">首页</div>
        <div class="desc2" @click="$router.push('manager')">管理</div>
        <div class="desc3">注销</div>
      </div>
  </div>
</template>
<script>
export default {
  name: "LoginHeader",
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header-logo-left {
      width: 70%;
      height: 90px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header-desc-right {
      width: 30%;
      height: 90px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        font-size: 16px;
        color: #ecf0f1;
        font-weight: 600;
        width: 80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 18px;
        background-color: #69f;
        transition: 0.1s;
        &:hover {
          cursor: pointer;
          background-color: #3498db;
        }
      }
    }
  }
</style>