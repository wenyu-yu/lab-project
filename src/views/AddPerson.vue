<template>
  <div class="add-person">
    <div class="add-area">
      <h1>添加成员</h1>
      <div class="name">
        <label for="name">姓名：</label>
        <el-input id="name" placeholder="请输入姓名" v-model="name" clearable></el-input>
      </div>
      <div class="tel">
        <label for="tel">联系方式：</label>
        <el-input id="tel" placeholder="请输入联系方式" v-model="tel" clearable></el-input>
      </div>
      <div class="password">
        <label for="password">密码：</label>
        <el-input id="password" placeholder="维修工人不用填" v-model="password" clearable></el-input>
      </div>
      <div class="submit">
        <el-button type="primary" style="width: 200px">添加</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddPerson",
  data() {
    return {
      name: '',
      tel: '',
      password: ''
    };
  }
};
</script>
<style lang="scss" scoped>
.add-person {
  background-image: url('../assets/images/background.jpg');
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .add-area {
    width: 400px;
    margin: 200px auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(0,0,0,.2);
    border-radius: 20px;
    align-items: center;
    color: aliceblue;
    h1 {
      margin-bottom: 15px;
    }
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 15px;
      label {
        min-width: 80px;
        font-size: 16px;
      }
    }
  }
}
</style>