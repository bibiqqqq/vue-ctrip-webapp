<template>
  <div class="book-hotel-content">
    <div class="location">
      <span class="text">南昌</span>
      <div class="icon">
        <div class="icon-content">
          <span class="el-icon-time"></span>
          <span class="icon-text">当前位置</span>
        </div>
      </div>

    </div>
    <div class="date">
      <div class="date-left" :navbar="checkinBar" @click="checkin">
        <span class="monthData">{{today}}</span>
        <span class="weekday">{{todayWeekday}}</span>
      </div>
      <div class="dates">{{tmrtoday}}</div>
      <div class="date-right" :navbar="checkoutBar">
        <span class="monthData">{{tmr}}</span>
         <span class="weekday">{{tmrWeekday}}</span>
      </div>
    </div>
    <div class="hotel-list" @click="keyword">
      <span class="text" v-show="keywords.length === 0">关键字/位置/品牌/酒店名</span>
      <span class="text-keyword" v-show="keywords.length > 0">{{keywords}}</span>
      <div class="close" v-show="keywords.length > 0" @click.stop.prevent="clearKeyword">
        <span class="el-icon-circle-close icon"></span>
      </div>
    </div>
    <div class="price" @click="pricePop">
      <span class="text" v-show="priceText && starName.length === 0">价格/星级</span>
      <span class="text-price" v-show="priceShow || starName.length > 0">{{price}} {{starName}}</span>
      <div class="close" v-show="priceClose || starName.length > 0" @click.stop.prevent="clearStar">
        <span class="el-icon-circle-close icon"></span>
      </div>
    </div>
    <div class="button">
      <div class="search" @click="selectHotel">
        <span class="text">查询</span>
      </div>
      <div class="local">
        <span class="el-icon-location"></span>
      </div>

    </div>
    <div class="desc">
      <div class="left">
        <span class="text">我的订单</span>
        <span class="sub">修改取消·加急·返现·退款</span>
      </div>
      <div class="right">
        <span class="text">我的酒店</span>
        <span class="sub">收藏·点评·历史·问答·优惠券</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      checkinBar: {
        name: '选择入住日期',
        back: '取消'
      },
      checkoutBar: {
        name: '选择离店日期',
        back: '取消'
      }
    }
  },
  methods: {
    _weekday(weekday) {
      if (weekday === 0) {
        return '周日'
      } else if (weekday === 1) {
        return '周一'
      } else if (weekday === 2) {
        return '周二'
      } else if (weekday === 3) {
        return '周三'
      } else if (weekday === 4) {
        return '周四'
      } else if (weekday === 5) {
        return '周五'
      } else if (weekday === 6) {
        return '周六'
      }
    },
    selectHotel() {
      this.$emit('selectHotel')
    },
    checkin() {
      this.$router.push('/date/checkin')
      this.setNavbar(this.checkinBar)
    },
    checkout() {
      this.$router.push('/date/checkout')
      this.setNavbar(this.checkoutBar)
    },
    keyword() {
      this.$emit('keyword')
    },
    pricePop() {
      this.$emit('pricePop')
    },
    clearStar() {
      this.setPrice('')
      this.setStarLevel('')
    },
    clearKeyword() {
      this.setKeyword('')
    },
    setPricetext() {
      let newText = !this.priceText
      this.setPriceText(newText)
      let newShow = !this.priceShow
      this.setPriceShow(newShow)
      let newClose = !this.priceClose
      this.setPriceClose(newClose)
    },
    ...mapMutations({
      setPrice: 'SET_PRICE',
      setPriceText: 'SET_PRICETEXT',
      setPriceShow: 'SET_PRICESHOW',
      setPriceClose: 'SET_PRICECLOSE',
      setStarLevel: 'SET_STARLEVEL',
      setKeyword: 'SET_KEYWORD',
      setNavbar: 'SET_NAVBAR',
      setNowday: 'SET_NOWDAY'
    })
  },
  computed: {
    tmrtoday() {
      return '1晚'
    },
    todayWeekday() {
      return this._weekday(this.nowday.getDay())
    },
    tmrWeekday() {
      return this._weekday(this.nowday.getDay() + 1)
    },
    tmr() {
      return `${this.nowday.getMonth()}月${this.nowday.getDate() + 1}日`
    },
    today() {
      return `${this.nowday.getMonth()}月${this.nowday.getDate()}日`
    },
    starName() {
      return this.starLevel
    },
    ...mapGetters([
      'price',
      'pricePopup',
      'priceShow',
      'priceText',
      'priceClose',
      'starLevel',
      'keywords',
      'nowday'
    ])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .book-hotel-content
    background #ffffff
    .location
      height 50px
      border-bottom 1px solid #ebebeb
      display flex
      line-height 50px
      .text
        flex 1
        display inline-block
        font-size 20px
        margin-left 17px
      .icon
        flex 0 0 95px
        display inline-block
        color rgb(53, 113, 255)
        font-size 21px
        width 95px
        right 0
        margin-top 6px
        text-align center
        .icon-content
          border-left 1px solid #ebebeb
          .icon-text
            font-size 13px
            display block
    .date
      height 50px
      border-bottom 1px solid #ebebeb
      display flex
      position relative
      .date-left
        flex 1
        border-right 1px solid #ebebeb
        line-height 50px
        .monthData
          font-size 24px
          margin-left 15px
      .date-right
        flex 1
        line-height 50px
        .monthData
          font-size 24px
          margin-left 40px
      .dates
        position absolute
        border 1px solid #ebebeb
        height 20px
        width 41px
        top 0
        bottom 0
        left 0
        right 0
        margin auto
        background #ffffff
        z-index 50
        border-radius 10px
        text-align center
        line-height 20px
    .hotel-list, .price
      height 45px
      border-bottom 1px solid #ebebeb
      line-height 45px
      font-size 16px
      color #cccccc
      display flex
      width 100%
      .text
        margin-left 16px
        flex 1
      .text-price
        margin-left 16px
        color #000
        flex 1
      .text-keyword
        color #000
        flex 1
        margin-left 16px
      .close
        right 0
        font-size 24px
        color #4289ff
        flex 0 0 45px
        line-height 45px
        text-align center
    .button
      padding 9px 15px 15px 16px
      display flex
      .search
        flex 1
        display inline-block
        height 44px
        width 270px
        background #ff6913
        text-align center
        line-height 44px
        font-size 19px
        color #ffffff
        border-radius 5px
      .local
        display inline-block
        flex 0 0 64px
        height 44px
        width 64px
        font-size 28px
        margin-left 6px
        border 1px solid #ebebeb
        border-radius 5px
        color #4289ff
        text-align center
        line-height 44px
        vertical-align top
    .desc
      display flex
      padding-bottom 15px
      .left
        flex 1
        border-right 1px solid #ebebeb
        padding-left 16px
        .text
          display block
          font-size 15px
        .sub
          font-size 12px
          color #999999
      .right
        flex 1
        padding-left 16px
        .text
          display block
          font-size 15px
        .sub
          font-size 12px
          color #999999



</style>
