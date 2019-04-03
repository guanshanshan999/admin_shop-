<template>
  <div>
    <el-table :data="usersList" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column label="用户状态"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next"
    :current-page="pagenum"
    :page-size="2" :total="total"></el-pagination>
  </div>
</template>

<script>
/* eslint-disable */
//引入 axios
import axios from 'axios'
export default {
  data() {
    return {
      usersList: [
        {
          username: '王小虎',
          email: '123123123@qq.com',
          mobile: '1231231'
        }
      ],
      //总个数
      total: 0,
      //当前页
      pagenum: 1
    }
  },
  created() {
    this.loadUsersList()
  },
  methods: {
    //加载用户数据
    loadUsersList() {
      axios
        .get('http://localhost:8888/api/private/v1/users', {
          params: {
            query: '',
            pagenum: 1,
            pagesize: 2
          },
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          console.log(res)
          //给数据列表赋值
          this.usersList = res.data.data.users
          //总个数赋值
          this.total = res.data.data.total
          //当前页赋值
          this.pagenum = res.data.data.pagenum
        })
    }
  }
}
</script>

<style>
</style>
