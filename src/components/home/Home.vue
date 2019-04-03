<template>
  <el-container>
    <el-header>
      <!-- 三部分平分 -->
      <el-row>
        <el-col :span="8">
          <img src="../../assets/images/logo.png" alt>
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col class="col3" :span="8">
          恭喜3535期学员平均月薪资 2万
          <a @click.prevent="logout" href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router="true"
          default-active="2-2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 第一个 -->
          <el-submenu index="1">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <!-- 两个菜单元素 -->
            <el-menu-item index="users">用户列表</el-menu-item>
          </el-submenu>
          <!-- 第二个 -->
          <el-submenu index="2">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <!-- 两个菜单元素 -->
            <el-menu-item index="roles">角色列表</el-menu-item>
            <el-menu-item index="rights">权限列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 退出功能

  methods: {
    logout () {
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 点击确定按钮
          // 1.删除本地token
          localStorage.removeItem('token')
          // 2.跳转登录页面
          this.$router.push('/login')
          // 3.提示退出功能
          this.$message({
            type: 'success',
            message: '退出成功!',
            duration: 800
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出登录',
            duration: 800
          })
        })
    },
    handleOpen (key, keyPath) {
      console.log('打开了')
    },
    handleClose (可以, keyPath) {
      console.log('关闭了')
    }
  }
}
</script>

<style scoped lang='less'>
.el-container {
  height: 100%;
  min-width: 800px;
}

.el-header {
  background: #b3c1cd;
  padding: 0;
  height: 60px;
  h1 {
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 28px;
  }

  .col3 {
    text-align: center;
    line-height: 60px;
    a {
      text-decoration: none;
      color: #daa520;
    }
  }
}

.el-aside {
  background: #545c64;
}

.el-main {
  background: #eaeef1;
}
</style>
