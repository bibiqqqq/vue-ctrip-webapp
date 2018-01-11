<template>
  <div class="mime">
    <div class="login" v-show="isLogin">
      <div class="top">
        hahahahha
      </div>
      <div class="info"></div>
    </div>
    <div class="logout" v-show="!isLogin">
      <div class="top">
        <span class="title">登录携程，开启旅程</span>
        <el-button @click="routerToLogin" type="warning" round>登录/注册</el-button>
        <el-button type="primary" round>手机号查单</el-button>
      </div>
      <div class="info"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
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
    },
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
