<template>
  <transition name="slide">
    <div class="keyword">
      <div class="top">
        <div class="back" @click="back">
          <span class="el-icon-arrow-left"></span>
        </div>
        <div class="search">
          <span class="el-icon-search"></span>
          <span class="text">关键字/位置/品牌/酒店名</span>
        </div>
      </div>
      <div ref="contentWrapper" class="container">
        <div class="content-wrapper" >
          <div class="content" v-for="item in keywords">
            <div class="content-title">
              <div class="icon-box" :class="colormap[item.type]">
                <span class="icon" :class="classmap[item.type]"></span>
              </div>
              <span class="title">{{item.name}}</span>
              <span class="click">{{item.click}}</span>
            </div>
            <div class="content-name">
              <div class="content-items" v-for="item in item.content" @click="selectKeyword(item)">
                <span class="name">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
const ERR_OK = 0
export default {
  data() {
    return {
      keywords: []
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    selectKeyword(item) {
      this.$router.push('/bookHotel')
      this.setKeyword(item)
    },
    ...mapMutations({
      setKeyword: 'SET_KEYWORD'
    })
  },
  computed: {
  },
  mounted() {
    setTimeout(() => {
      this.contentWrapper = new BScroll(this.$refs.contentWrapper, {
        scrollY: true
      })
    }, 20)
  },
  created() {
    this.$http('/api/keywords').then((response) => {
      if (response.data.errno === ERR_OK) {
        this.keywords = response.data.data
      }
    })
    this.classmap = ['icon-1', 'icon-2', 'icon-3', 'icon-4', 'icon-5', 'icon-6', 'icon-7', 'icon-8', 'icon-9', 'icon-10', 'icon-11']
    this.colormap = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7', 'icon8', 'icon9', 'icon10', 'icon11']
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .keyword
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #ebebeb
    z-index 200
    .top
      background #ffffff
      height 50px
      line-height 50px
      width 100%
      display flex
      z-index 300
      position absolute
      .back
        display inline-block
        font-size 18px
        flex 0 0 44px
        width 44px
        text-align center
      .search
        display inline-block
        border-radius 20px
        background #e6e6e6
        flex 1
        height 30px
        margin-top 9px
        margin-right 8px
        font-size 12px
        text-align center
        color #6e6e6e
        line-height 30px
    .container
      width 100%
      top 50px
      bottom 0
      position absolute
      .content-wrapper
        width 100%
        padding-bottom 20px
        .content
          background #ffffff
          width: 96%
          margin-left 2%
          margin-top 8px
          .content-title
            padding 7px 11px 7px 9px
            display flex
            border-bottom 1px solid #efefef
            .icon-box
              width 20px
              height 20px
              border-radius 2px
              text-align center
              line-height 20px
              display inline-block
              font-size 12px
              &.icon1
                background #facb50
              &.icon2
                background #deabff
              &.icon3
                background #abcbff
              &.icon4
                background #a8ed8a
              &.icon5
                background #a1eaff
              &.icon6
                background #ffb5ab
              &.icon7
                background #f4b8ae
              &.icon8
                background #cce682
              &.icon9
                background #f6dc86
              &.icon10
                background #f4b29b
              &.icon11
                background #7be5c3
            .title
              font-size 13px
              color #999999
              margin-left 9px
              flex 1
              line-height 20px
            .click
              color #099fed
              font-size 13px
              flex 0 0 30px
              line-height 20px
          .content-name
            width 100%
            .content-items
              box-sizing border-box
              display inline-block
              font-size 0
              width 25%
              text-align center
              height 45px
              line-height 45px
              border-right 1px solid #efefef
              border-bottom 1px solid #efefef
              .name
                font-size 12px



</style>
