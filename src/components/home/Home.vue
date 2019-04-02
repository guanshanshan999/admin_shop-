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
          <a href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}
.el-container {
  height: 100%;
  min-width: 800px;
}

.el-header {
  background: #b3c1cd;
  padding: 0;
  height: 60px;
}
h1 {
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 28px;
}
.col3 {
    text-align: center;
  line-height: 60px;
}
.col3  a{
  text-decoration: none;
   color: #daa520;
}

.el-aside {
  background: #545c64;
}

.el-main {
  background: #eaeef1;
}
</style>
