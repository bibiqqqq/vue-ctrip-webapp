<template>
  <div class="indexWrapper" ref="indexWrapper">
    <div class="index" >
      <slide class="slide">
        <div v-for="item in slide">
          <img height="150" class="slide-image" v-lazy="item.image">
        </div>
      </slide>
      <div class="play">
        <span class="title">玩转当地</span>
        <div class="location">
          <span class="el-icon-location"></span>
          <span class="location-name">请选择</span>
          <span class="el-icon-arrow-down"></span>
        </div>
        <div class="content">
          <div class="content-child">
            <div class="img spot">
              <span class="icon-spot"></span>
            </div>
            <span class="text">景点·玩乐</span>
          </div>
          <div class="content-child">
            <div class="img around">
              <span class="icon-around"></span>
            </div>
            <span class="text">周边游</span>
          </div>
          <div class="content-child">
            <div class="img food">
              <span class="icon-food"></span>
            </div>
            <span class="text">美食林</span>
          </div>
          <div class="content-child">
            <div class="img question">
              <span class="icon-question"></span>
            </div>
            <span class="text">问答</span>
          </div>
          <div class="content-child">
            <div class="img local">
              <span class="icon-local"></span>
            </div>
            <span class="text">当地攻略</span>
          </div>
        </div>
      </div>
      <div class="play-mask"></div>
      <grid></grid>
      <div class="more">
        <img src="./more.png" class="more-img">
      </div>
      <div class="sale">
        <title-bar :title="titleBar.title" :more="titleBar.more"></title-bar>
        <img src="./sale.png"alt="">
      </div>
      <div class="hot">
        <title-bar :title="hotBar.title" :more="hotBar.more"></title-bar>
        <div class="hot-content" v-for="item in hot">
          <img v-lazy="item.image" class="hot-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import grid from 'components/grid/grid'
import slide from 'base/slide/slide'
import TitleBar from 'components/title-bar/title-bar'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      titleBar: {
        title: '特卖汇',
        more: '更多特卖'
      },
      hotBar: {
        title: '热门活动',
        more: '获得更多福利'
      },
      slide: [
        {
          image: 'https://dimg04.c-ctrip.com/images/700j0d0000006vsun890D_750_150_25.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/70070l000000dorjg90F5_750_150_25.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/70050d0000006x4bu3C65_750_150_25.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/700n0l000000d7q1d85E1_750_150_25.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/700k0h0000008zxbvEF43_750_150_25.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/70090d0000006unugD0F9_750_150_25.jpg'
        }
      ],
      hot: [
        {
          image: 'https://dimg04.c-ctrip.com/images/700u0k000000c5ujpBCE3_375_260_342.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/700w0m000000dou5i7992_375_260_342.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/700s0l000000d8ewiDE67_375_160_343.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/700f0j0000009zzlx59DF_375_160_345.jpg'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/700c0k000000calwc54D5_375_160_345.png'
        },
        {
          image: 'https://dimg04.c-ctrip.com/images/700b0k000000c9s2w10FD_375_160_345.jpg'
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.indexScroll = new BScroll(this.$refs.indexWrapper, {
        scrollY: true
      })
    }, 20)
  },
  created() {
  },
  methods: {
  },
  components: {
    grid,
    slide,
    TitleBar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .indexWrapper
    position absolute
    width 100%
    top 0
    bottom 51px
    overflow hidden
    background-color #EBEBEB
    .index
      width 100%
      position absolute
      overflow hidden
      .play
        position absolute
        width 98%
        background #fff
        border-radius 8px
        top 140px
        font-size 18px
        font-weight 700
        z-index 100
        left 1%
        .title
          margin 11px 0 0 11px
          display inline-block
        .location
          display inline-block
          position absolute
          right 6px
          border-radius 20px
          background #7ab7f2
          width 88px
          color #fff
          font-size 12px
          line-height 22px
          height 22px
          text-align center
          margin 8px 6px 0 0
        .content
          display flex
          padding-top 10px
          padding-bottom 7px
          .content-child
            flex 1
            text-align center
            .img
              display inline-block
              width 38px
              height 38px
              border-radius 50%
              font-size 24px
              line-height 38px
            .spot
              background #6599ef
            .around
              background #85c94a
            .food
              background #e37d54
              .icon-food
                display inline-block
                margin-top 8px
            .question
              background #e29540
              .icon-question
                display inline-block
                margin-top 8px
                margin-left 5px
            .local
              background #f1c948
            .text
              display block
              font-size 15px
              margin-top 5px
      .play-mask
        height 94px
      .more
        margin-top 4px
        width 98%
        margin-left 1%
        .more-img
          width 100%
      .sale
        margin-top 10px
        background #ffffff
        border-bottom 1px solid #ebebeb
        img
          display inline-block
          width 96%
          margin-left 2%
          padding-bottom 7px
      .hot
        margin-top 10px
        background #ffffff
        width 100%
        .hot-content
          width 49.6%
          display inline-block
          border-right 1px solid #ebebeb
          border-bottom 1px solid #ebebeb
          .hot-image
            width 100%
            display inline-block
</style>
