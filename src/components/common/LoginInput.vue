<template>
  <div class="input">
    <div class="container">
      <span :class="confirmClass"></span>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input',$event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String
  },
  data() {
    return {};
  },
  computed: {
    confirmClass() {
      return this.type === "text" ? "el-icon-user-solid" : "el-icon-s-goods";
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 300px;
  height: 50px;
  line-height: 50px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  background-color: #f1f1f1;
  span {
    position: absolute;
    top: 10px;
    left: 5px;
    font-size: 25px;
    margin-right: 10px;
    color: #3a4a5a;
  }
  input {
    position: absolute;
    top: 10px;
    right: 5px;
    width: 80%;
    height: 50%;
    font-size: 15px;
    border: none;
    outline: none;
    background-color: #f1f1f1;
  }
}
</style>