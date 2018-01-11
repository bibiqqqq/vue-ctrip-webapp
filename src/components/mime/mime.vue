<template>
  <div class="mime">
    <div class="top" :style="{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515689973955&di=38fb017def4c64d5665571140deb53e7&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FA%2FAA%2FAA66E5C17E5DDDD350399805B8EDE50B.jpg)'}">
      <navbar :fontColor="'#ffffff'">
        <div class="navbar-left">
          <i class="el-icon-menu"></i>
        </div>
        <div class="navbar-right">
          <i class="el-icon-setting icon1"></i>
          <i class="el-icon-news"></i>
        </div>
      </navbar>
      <div class="logout" v-show="!isLogin">
        <span class="text">登录携程，开启旅程</span>
        <el-button size="small" type="warning" round @click="routerToLogin">登录/注册</el-button>
        <el-button size="small" round>手机号查单</el-button>
      </div>
      <div class="login" v-show="isLogin">
        <img src="./avatar-woman.png" width="70px" alt="">
        <div class="zhanghu">
          <span class="name">{{zhanghaoming}}</span>
          <div class="card">
            <span class="card-text">领会员福利<i class="el-icon-arrow-right"></i></span>
          </div>
          <div class="card">
            <span class="card-text">我的社区<i class="el-icon-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <img src="./mime.png" :style="{width: '100%'}" alt="">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
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
    },
    zhanghaoming() {
      return localStorage.getItem('zhanghao')
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  components: {
    navbar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.mime
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background rgb(242, 242, 242)
  .top
    height 150px
    background-size 100%
    background-position-y -10px
    .logout
      text-align center
      padding-top 60px
      color #ffffff
      .text
        font-size 16px
        display block
      button
        margin-top 10px
        width 140px
    .login
      padding-top 50px
      width 100%
      height 70px
      img
        margin-left 16px
        display inline-block
      .zhanghu
        color #ffffff
        display inline-block
        vertical-align top
        margin-left 16px
        .name
          font-size 20px
          display block
          margin-top 10px
        .card
          margin-top 14px
          height 16px
          border-radius 8px
          border 1px solid #ffffff
          font-size 10px
          text-align center
          line-height 16px
          width 80px
          display inline-block
          background rgba(255, 255, 255, .2)

</style>
