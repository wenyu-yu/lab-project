<template>
  <div class="submit-area">
    <div class="input-area">
      <span class="title">提交姓名:</span>
      <el-input
        placeholder="请输入提交者"
        v-model="submiter"
        size="medium"
        clearable
        style="width: 300px"
      ></el-input>
    </div>
    <div class="input-area">
      <span class="title">联系电话:</span>
      <el-input placeholder="请输入联系电话" v-model="tel" clearable style="width: 300px"></el-input>
    </div>
    <div class="input-area">
      <span class="title">教室编号:</span>
      <el-input placeholder="请输入教室编号(eg：4教306)" v-model="classroom" clearable style="width: 300px"></el-input>
    </div>
    <div class="input-area">
      <span class="title">问题种类:</span>
      <el-select v-model="value" clearable placeholder="请选择问题种类" style="width: 300px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="input-area">
      <span class="title">问题描述:</span>
      <el-input
        type="textarea"
        :rows="3"
        resize="none"
        placeholder="请输入问题具体描述"
        v-model="textarea"
        style="width: 300px"
      ></el-input>
    </div>
    <div class="submit-btn">
      <el-button type="primary" style="width:60%">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubmitArea",
  data() {
    return {
      submiter: "",
      tel: "",
      classroom: "",
      options: [
        {
          value: "软件",
          label: "软件"
        },
        {
          value: "硬件",
          label: "硬件"
        },
        {
          value: "网络",
          label: "网络"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      value: "",
      textarea: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.submit-area {
  width: 400px;
  margin: 20px auto;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  .input-area {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 20px;
    }
  }
  .submit-btn {
    display: flex;
    justify-content: center;
  }
}
</style>