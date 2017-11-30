<template>
  <transition name="slide">
    <div class="book-ticket">
      <div class="top">
        <div class="back" @click="back">
          <span class="el-icon-arrow-left"></span>
        </div>
        <div class="red">
          <span class="el-icon-star-on"></span>
        </div>
        <div class="message">
          <span class="el-icon-message"></span>
        </div>
      </div>
      <div class="container">
        <book-slider :navbar="navbar" :sliderImage="bookSlider"></book-slider>
        <div class="box">
          <div class="boxx"></div>
        </div>
      </div>

      <div class="tabbar">
        <img class="tabbar-image" src="../book-hotel/tabbar.png">
      </div>
    </div>
  </transition>
</template>

<script>
import bookSlider from 'base/book-slider/book-slider'
export default {
  data() {
    return {
      bookSlider: [
        'https://dimg04.c-ctrip.com/images/70040l000000crvlo7626_780_235_105.jpg',
        'https://dimg04.c-ctrip.com/images/700b0l000000dauwf9C5D_780_235_105.jpg',
        'http://pages.c-ctrip.com/hotel/201711/pingxuan/780235.jpg',
        'https://images3.c-ctrip.com/ad/bigbutton/promotion/201710/1031_780_235.jpg',
        'https://dimg04.c-ctrip.com/images/700l0b0000005c7mpDE7B_780_235_105.jpg'
      ],
      navbar: [
        {
          path: '/bookTicket/1',
          name: '单程'
        },
        {
          path: '/bookTicket/2',
          name: '往返'
        },
        {
          path: '/bookTicket/3',
          name: '多程'
        }
      ]
    }
  },
  methods: {
    back() {
      this.$router.push('/index')
    }
  },
  components: {
    bookSlider
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active,.slide-leave-acitve
    transition all 0.3s
  .slide-enter,.slide-leave-to
    transform translate3d(100%, 0, 0)
  .book-ticket
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 200
    background #EBEBEB
    overflow hidden
    .top
      position absolute
      z-index 100
      font-size 21px
      top 26px
      .back, .red, .message
        display inline-block
        border-radius 50%
        height 31px
        width 31px
        background rgba(0, 0, 0, 0.4)
        text-align center
        line-height 31px
        color #ffffff
        position fixed
      .back
        left 13px
      .red
        right 52px
      .message
        right 10px
    .container
      .box
        background pink
        height 200px
        width 200px
        .boxx
          background blue
          height 100px
          width 100px
    .tabbar
      position fixed
      bottom 0
      left 0
      width 100%
      height 60px
      .tabbar-image
        width 100%
</style>
