<template>
  <div class="problem">
    <Header />
    <SubmitArea />
  </div>
</template>
<script>
import Header from '../components/content/Header'
import SubmitArea from '../components/content/SubmitArea'
export default {
  name: "Problem",
  data () {
    return {
    };
  },
  components: {
    Header,
    SubmitArea
  }
}
</script>
<style lang="scss" scoped>
.problem {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/sub-question.jpg');
  background-size: 100% 100%;
}
</style>