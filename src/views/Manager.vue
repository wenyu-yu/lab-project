<template>
  <div class="manager">
    <LoginHeader></LoginHeader>
    <div class="content-wrap">
      <div class="manager-area">
        <div class="manager-area-icon">
          <i class="el-icon-user"></i>
          <span class="manager-area-icon-title">管理人员</span>
          <span class="manager-increment" @click="$router.push('addperson')">添加成员</span>
        </div>
        <div class="manager-list">
          <el-table :data="managerData" style="width: 100%">
            <el-table-column label="ID" width="180">
              <template slot-scope="scope">
                <i class="el-icon-phone-outline"></i>
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>管理员: {{ scope.row.name }}</p>
                  <p>联系方式: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="密码">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.password }}</span>
              </template>
            </el-table-column>
            <el-table-column label="电话">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.tel }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="worker-area">
        <div class="worker-area-icon">
          <i class="el-icon-scissors"></i>
          <span class="worker-area-icon-title">维修人员</span>
        </div>
        <div class="worker-list">
          <el-table :data="workerData" style="width: 100%">
            <el-table-column label="ID" width="180">
              <template slot-scope="scope">
                <i class="el-icon-phone-outline"></i>
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>维修人员: {{ scope.row.name }}</p>
                  <p>联系方式: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="电话" width="500">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.tel }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteWorker(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginHeader from "../components/content/LoginHeader";
export default {
  name: "Manager",
  data() {
    return {
      managerData: [
        {
          id: "1",
          name: "倪广林",
          address: "13398989898",
          password: "123456",
          tel: "17784345457"
        }
      ],
      workerData: [
        {
        id: "1",
        name: "余文郁",
        address: "13398989898",
        tel: "17784345457"
      }
      ]
    };
  },
  methods: {
    deleteWorker(index, row) {
        console.log(index, row);
    }
  },
  components: {
    LoginHeader
  }
};
</script>

<style lang="scss" scoped>
.manager {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 45px;
  background-image: url("../assets/images/background@manager.jpg");
  background-size: 100% 100%;
  .content-wrap {
    padding: 0 150px;
    .manager-area {
      margin: 30px 0 0 30px;
      .manager-area-icon {
        font-size: 25px;
        color: #d35400;
        margin-bottom: 10px;
        position: relative;
        i {
          margin-right: 15px;
        }
        .manager-increment {
          position: absolute;
          right: 0;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .worker-area {
      margin: 30px 0 0 30px;
      .worker-area-icon {
        font-size: 25px;
        color: #d35400;
        margin-bottom: 10px;
        i {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>