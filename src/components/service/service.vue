<template>
  <div class="service">
    <img class="top-img" src="./top.jpg" alt="">
    <div class="content-wrapper" ref="historyScroll">
      <div class="content" >
        <img v-show="!isLogin" class="logo-img" src="./logo.jpg" alt="">
        <el-button v-show="!isLogin" class="btn" round @click="routerToLogin">登录</el-button>
        <div class="history" v-show="isLogin" v-for="item in historys" >
          <div class="history-top">
            <div class="history-icon">
              <img src="../../common/img/hotel.png" alt="">
            </div>
            <span class="title">{{item.name}}</span>
          </div>
          <span class="time">{{item.checkin}}&nbsp;至&nbsp;{{item.checkout}}</span>
          <img class="img-content" src="./content.jpg" alt="">
          <div class="price">
            <span class="price-1">￥</span><span class="price-2">{{item.price}}</span>
            <span class="price-3">已成交</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
const ERR_OK = 0
export default {
  data() {
    return {
      historys: []
    }
  },
  created() {
    this.$http('/api/history').then((response) => {
      if (response.data.errno === ERR_OK) {
        this.historys = response.data.data
      }
    })
  },
  mounted() {
    setTimeout(() => {
      this.historyScroll = new BScroll(this.$refs.historyScroll, {
        scrollY: true
      })
    }, 30)
  },
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
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .service
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    background rgb(244, 244, 244)
    .top-img
      width 100%
      height 140px
      z-index 100
    .content-wrapper
      width 100%
      overflow hidden
      position absolute
      top 140px
      bottom 51px
      .content
        .logo-img
          padding-top 40px
          width 150px
          display block
          margin 0 auto
        .btn
          display block
          margin-top 30px
          width 36%
          background : rgb(244, 244, 244)
          margin-left 32%
          color #409eff
        .history
          background #ffffff
          position relative
          margin-bottom 10px
          .history-top
            padding 15px 5px 15px 15px
            .history-icon
              height 22px
              width 22px
              border-radius 50%
              background rgb(251, 111, 117)
              line-height 22px
              display inline-block
              text-align center
              img
                width 15px
                margin-top 4px
            .title
              margin-left 10px
              font-size 18px
          .time
            margin-left 40px
            margin-top 10px
            font-size 14px
            color rgb(120, 117, 118)
          .img-content
            width 92%
            margin-left 8%
            margin-top 20px
          .price
            position absolute
            right 10px
            top 15px
            .price-1
              color rgb(253, 61, 0)
            .price-2
              color rgb(253, 61, 0)
              font-size 18px
            .price-3
              margin-top 5px
              display block
              font-size 14px
              margin-left 4px






</style>
