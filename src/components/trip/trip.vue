<template>
  <div class="trip">
    <navbar>
      <div class="navbar-left">
        <i class="el-icon-edit-outline"></i>
      </div>
      <div class="navbar-right">
        <i class="el-icon-time icon1"></i>
      </div>
    </navbar>
    <img src="./trip.png" alt="">
    <el-button v-show="!isLogin" @click="routerToLogin" class="btn" round>登录查看行程</el-button>
    <el-button v-show="isLogin" @click="routerToLogin" type="warning" class="btn btn-login" round>跟着主播去旅行<i class="el-icon-caret-right"></i></el-button>
  </div>
</template>

<script>
import navbar from 'base/navbar/navbar'
export default {
  methods: {
    routerToLogin() {
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin() {
      if (localStorage.getItem('zhanghao')) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    navbar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .trip
    overflow hidden
    img
      margin-top 50px
      width 100%
    .btn
      position absolute
      top 300px
      margin-top 20px
      display block
      width 44%
      left 28%




</style>
