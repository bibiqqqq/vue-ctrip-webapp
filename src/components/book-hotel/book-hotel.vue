<template>
  <transition name="slide">
    <div class="book-hotel" ref="bookHotel">
      <div>
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
          <div class="content">
            <book-hotel-content @selectHotel="selectHotel" @keyword="keyword" @pricePop="pricePop"></book-hotel-content>
          </div>
          <div class="sub">
            <div class="sub-container"></div>
          </div>
        </div>
      </div>
      <div class="tabbar">
        <img class="tabbar-image" src="./tabbar.png">
      </div>
      <mask-pop v-if="pricePopup" @popback="popback"></mask-pop>
      <book-pop v-if="pricePopup" :starLevel="starLevel" :pricetag="pricetag"></book-pop>
    </div>
  </transition>
</template>

<script>
import bookSlider from 'base/book-slider/book-slider'
import bookHotelContent from 'components/book-hotel-content/book-hotel-content'
import BScroll from 'better-scroll'
import bookPop from 'components/book-pop/book-pop'
import maskPop from 'base/mask/mask'
import {mapMutations, mapGetters} from 'vuex'
export default {
  data() {
    return {
      pricetag: [
        {
          text: '￥150以下',
          value: [0, 150]
        },
        {
          text: '￥150-200',
          value: [150, 200]
        },
        {
          text: '￥200-250',
          value: [200, 250]
        },
        {
          text: '￥250-350',
          value: [250, 350]
        },
        {
          text: '￥350-550',
          value: [350, 550]
        },
        {
          text: '￥550以上',
          value: [550, 550]
        }
      ],
      starLevel: [
        {
          name: '快捷连锁',
          isSelectLevel: false
        },
        {
          name: '二星/经济',
          isSelectLevel: false
        },
        {
          name: '三星/舒适',
          isSelectLevel: false
        },
        {
          name: '四星/高档',
          isSelectLevel: false
        },
        {
          name: '五星/豪华',
          isSelectLevel: false
        }
      ],
      bookSlider: [
        'https://dimg04.c-ctrip.com/images/70040l000000crvlo7626_780_235_105.jpg',
        'https://dimg04.c-ctrip.com/images/700b0l000000dauwf9C5D_780_235_105.jpg',
        'http://pages.c-ctrip.com/hotel/201711/pingxuan/780235.jpg',
        'https://images3.c-ctrip.com/ad/bigbutton/promotion/201710/1031_780_235.jpg',
        'https://dimg04.c-ctrip.com/images/700l0b0000005c7mpDE7B_780_235_105.jpg'
      ],
      navbar: [
        {
          path: '/bookHotel/1',
          name: '国内'
        },
        {
          path: '/bookHotel/2',
          name: '海外'
        },
        {
          path: '/bookHotel/3',
          name: '民宿'
        }
      ],
      sub: 'https://pages.ctrip.com/hotel_h5/res/img/service-txt-v2.png'
    }
  },
  computed: {
    ...mapGetters([
      'pricePopup'
    ])
  },
  methods: {
    selectHotel() {
      this.$router.push('/hotelList')
    },
    keyword() {
      this.$router.push('/keyword')
    },
    popback() {
      this.setPricePopup(false)
    },
    back() {
      this.$router.push('/index')
    },
    pricePop() {
      this.setPricePopup(true)
    },
    ...mapMutations({
      setPricePopup: 'SET_PRICEPOPUP'
    })
  },
  mounted() {
    setTimeout(() => {
      this.bookHotel = new BScroll(this.$refs.bookHotel, {
        scrollY: true
      })
    }, 20)
  },
  components: {
    bookSlider,
    bookHotelContent,
    bookPop,
    maskPop
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .book-hotel
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
      .sub
        text-align center
        .sub-container
          height 70px
          width 340px
          background-image url('https://pages.ctrip.com/hotel_h5/res/img/service-txt-v2.png')
          background-size 340px 150px
          background-repeat no-repeat
          margin-top 20px
          display inline-block
          vertical-align middle
    .tabbar
      position fixed
      bottom 0
      left 0
      width 100%
      height 60px
      .tabbar-image
        width 100%

</style>
