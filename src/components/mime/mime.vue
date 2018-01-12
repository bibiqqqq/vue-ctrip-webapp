<template>
  <div class="mime" ref="mimeWrapper">
    <div>
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
        <img v-show="!isLogin" @click="routerToLogin" src="./mime.png" :style="{width: '100%'}" alt="">
        <div v-show="isLogin" class="content-bar">
          <div class="bar-content" v-for="item in bar">
            <img :src="item.icon" alt="">
            <span class="bar-text">{{item.name}}</span>
          </div>
        </div>
        <img v-show="isLogin" src="./content.png" :style="{width: '100%', marginBottom: '50px'}" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import navbar from 'base/navbar/navbar'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      bar: [
        {icon: require('./1.png'), name: '全部订单'},
        {icon: require('./2.png'), name: '待付款'},
        {icon: require('./3.png'), name: '未出行'},
        {icon: require('./4.png'), name: '待点评'}
      ]
    }
  },
  methods: {
    routerToLogin() {
      this.$router.push('/login')
    }
  },
  mounted() {
    setTimeout(() => {
      this.mimeWrapper = new BScroll(this.$refs.mimeWrapper, {
        scrollY: true
      })
    }, 30)
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
  position absolute
  top 0
  bottom 51px
  left 0
  right 0
  background rgb(242, 242, 242)
  overflow hidden
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
  .content
    .content-bar
      display flex
      background #ffffff
      margin-bottom 10px
      .bar-content
        flex 1
        text-align center
        padding 10px 0 10px 0
        img
          display block
          width 24px
          margin 0 auto
        .bar-text
          display block
          margin-top 8px


</style>
