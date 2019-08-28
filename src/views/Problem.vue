<template>
  <div class="problem-page">
    <LoginHeader></LoginHeader>
    <div class="main-content">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        style="width: 100%;"
        stripe=true
      >
        <el-table-column label="提交者" prop="submiter"></el-table-column>
        <el-table-column label="联系电话" prop="tel"></el-table-column>
        <el-table-column label="教室编号" prop="classNum"></el-table-column>
        <el-table-column label="问题种类" prop="problemClass"></el-table-column>
        <el-table-column label="问题简述" prop="problemDesc"></el-table-column>
        <el-table-column label="问题状态" prop="problemStatus"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="total"
        @current-change="current_change"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import LoginHeader from '../components/content/LoginHeader'
export default {
  name: "Problem",
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      total: 9,
      pagesize: 3,
      currentPage: 1,
      tableData: [
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        },
        {
          submiter: "王小虎",
          tel: "1822875676",
          classNum: "4教316",
          problemClass: "软件",
          problemDesc: "虚拟机坏了",
          problemStatus: '未处理'
        }
      ],
      search: ""
    };
  },
  components: {
    LoginHeader
  },
  methods: {
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>
<style lang="scss" scoped>
.problem-page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 45px;
  background-image: url('../assets/images/background@manager.jpg');
  background-size: 100% 100%;
  .main-content {
    margin-top: 20px;
  }
}
</style>