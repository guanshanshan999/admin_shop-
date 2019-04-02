<template>
  <el-row class="row1" type="flex" justify="center" align="middle">
    <el-col class="col1" :span="8">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="startLogin()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
/* eslink-disable */
import axios from 'axios'

export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    startLogin () {
      // console.log(this.$refs)
      this.$refs.ruleForm.validate(valid => {
        // 如果校验不成功 中止
        if (!valid) {
          console.log('校验不成功')
          return
        }
        // 校验成功
        // console.log('开始登录')
        axios
          .post('http://localhost:8888/api/private/v1/login', this.ruleForm)
          .then(res => {
            console.log(res)
            if (res.data.meta.status === 200) {
              // 登录成功提示
              this.$message({
                message: res.data.meta.msg,
                type: 'success',
                duration: 800
              })
              // 2.跳转到home页面(编程式导航)
              this.$router.push('/home')
            } else {
              this.$message({
                message: res.data.meta.msg,
                type: 'error',
                duration: 800
              })
            }
          })
      })
    },
    // 重置
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
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
/* 自己加的类*/
.row1 {
  height: 100%;
  background: #2d434c;
}

/* 自己加的类*/
.col1 {
  background: #fff;
  padding: 25px 40px;
  border-radius: 10px;
}
</style>
