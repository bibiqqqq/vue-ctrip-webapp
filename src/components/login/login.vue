<template>
  <div class="login">
    <div class="top">
      <i class="el-icon-arrow-left back" @click="back"></i>
      <span class="create">注册</span>
    </div>
    <div class="wrapper">
      <span class="wrapper-title">携程账号登录</span>
      <div class="input-wrapper">
        <el-input v-model="zhanghao" class="id" placeholder="国内手机号/用户名/邮箱/卡号"></el-input>
        <el-input v-model="mima" class="mima" placeholder="登录密码"></el-input>
        <el-button @click="handleUserInfo" class="btn" type="primary">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      zhanghao: '',
      mima: ''
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    handleUserInfo() {
      if (this.zhanghao && this.mima !== '') {
        this.setUserInfo({zhanghao: this.zhanghao, mima: this.mima})
        this.setIsLogin(true)
        localStorage.setItem('zhanghao', this.zhanghao)
        this.$router.back()
      } else {
        alert('请输入账号或密码')
      }
    },
    ...mapMutations({
      setIsLogin: 'SET_ISLOGIN',
      setUserInfo: 'SET_USERINFO'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login
  .top
    height 30px
    color rgb(52, 137, 255)
    // line-height 50px
    padding 10px 20px 10px 10px
    .back
      float left
      font-size 18px
      padding 5px
    .create
      float right
      font-size 14px
      padding 5px
  .wrapper
    margin-top 50px
    text-align center
    .wrapper-title
      font-size 30px
    .input-wrapper
      margin-top 50px
      padding 0 20px 0 20px
      .mima
        margin-top 20px
      .btn
        margin-top 30px
        width 90%

</style>
