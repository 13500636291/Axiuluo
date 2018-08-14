<template>
  <div class="login">
    <el-form ref="form" :rules="rules" :model="form" class="form">
      <el-form-item>
        <img src="../assets/avatar.jpg" class="login-img">
      </el-form-item>
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="用户名" prefix-icon="el-icon-phone-outline"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="密码" type="password" auto-complete="off" prefix-icon="el-icon-icon-view"></el-input>        
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input v-model="form.checkPass" placeholder="确认密码" type="password" auto-complete="off" prefix-icon="el-icon-icon-view"></el-input>        
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')" class="btn">提交</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('form')" class="btn">重置</el-button>        
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
import {loginPost}  from '../api/index'
export default {
  data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      form:{
        username:'',
        password: '',
        checkPass: ''
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
      }
    }
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            loginPost(this.form).then((res)=>{
              if(res.meta.status===200){
                console.log(res)
                localStorage.setItem('mytoken',res.data.token)
                this.$router.push({name:'Home'})
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

}
</script>

<style lang="scss" scoped>
.login{
  width:100%;
  height: 100%;
  background: #2f4050;
  position: fixed;
  .form{
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: #fff;
    .login-img{
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .btn{
      width:100%;
    }
  }
}
</style>

