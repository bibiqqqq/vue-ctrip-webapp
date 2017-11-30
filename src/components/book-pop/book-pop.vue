<template>
  <transition name="slide">
    <div class="book-pop">
      <div class="price">
        <span class="title">价格</span>
        <span class="title-price">{{priceText}}</span>
        <div class="slider-wrapper">
          <div class="min-max">
            <span class="min">￥0</span>
            <span class="max">￥550以上</span>
          </div>
          <div class="block">
            <vue-slider class="slider" v-model="price" v-bind="slider"></vue-slider>
          </div>
        </div>
        <div class="tag">
          <div class="price-tag" v-for="(item,index) in pricetag" @click="selectPrice(index)" :class="{act:isSelectPrice===index}">
            <span class="text" >{{item.text}}</span>
          </div>
        </div>
      </div>
      <div class="star">
        <span class="title">星级</span>
        <div class="tag">
          <div class="star-tag" v-for="(item,index) in starLevel" @click="selectLevel(index)" :class="{active:item.isSelectLevel===true}" ref="priceRef">
            <span class="text">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="button">
        <div class="clear">
          <span class="text" @click="clear">清空</span>
        </div>
        <div class="confirm" @click="confirm">
          <span class="text">确定</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import vueSlider from 'vue-slider-component'
import {mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      starText: '',
      isSelectPrice: '',
      price: [0, 550],
      slider: {
        value: [0, 550],
        width: '90%',
        height: 4,
        dotSize: 30,
        min: 0,
        max: 550,
        disabled: false,
        show: true,
        interval: 50,
        tooltip: 'hover',
        formatter: '￥{value}',
        bgStyle: {
          'backgroundColor': '#fff',
          'boxShadow': 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
        },
        tooltipStyle: {
          'backgroundColor': '#666',
          'borderColor': '#666'
        },
        processStyle: {
          'backgroundColor': '#4289ff'
        }
      }
    }
  },
  methods: {
    confirm() {
      this.setPrice(this.priceText)
      this.setPricePopup(false)
      this._priceLevel()
    },
    _priceLevel() {
      this.starLevel.forEach((v, i) => {
        if (v.isSelectLevel === true) {
          this.starText += `${v.name} `
        }
      })
      this.setStarLevel(this.starText)
    },
    clear() {
      this.price = [0, 550]
      this.isSelectPrice = ''
      this.starLevel.forEach((v, i) => {
        v.isSelectLevel = false
      })
    },
    selectPrice(index) {
      this.isSelectPrice = index
      this.price = this.pricetag[index].value
    },
    selectLevel(index) {
      this.starLevel[index].isSelectLevel = !this.starLevel[index].isSelectLevel
    },
    ...mapMutations({
      setPricePopup: 'SET_PRICEPOPUP',
      setPrice: 'SET_PRICE',
      setStarLevel: 'SET_STARLEVEL'

    })
  },
  computed: {
    priceText() {
      if (this.price[0] === 0 && this.price[1] < 550) {
        return `￥${this.price[1]}以下`
      } else if (this.price[0] === 0 && this.price[1] === 550) {
        return ''
      } else if (this.price[0] > 0 && this.price[1] === 550) {
        return `￥${this.price[0]}以上`
      } else if (this.price[0] > 0 && this.price[1] < 550) {
        return `￥${this.price[0]}-${this.price[1]}`
      }
    },
    ...mapGetters([
      'pricePopup'
    ])
  },
  props: {
    pricetag: {
      type: Array,
      default: ''
    },
    starLevel: {
      type: Array,
      default: ''
    }
  },
  components: {
    vueSlider
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(0, 100%, 0)
  .book-pop
    position fixed
    bottom 0
    left 0
    width 100%
    background #ffffff
    z-index 600
    .price
      padding 17px 0 27px 0
      font-size 15px
      .title
        margin-left 10px
      .title-price
        color #4289ff
      .slider-wrapper
        font-size 9px
        margin-top 35px
        .min-max
          display block
          margin-bottom 3px
          .min
            margin-left 25px
          .max
            position absolute
            right 5px
        .block
          display flex
          justify-content center
      .tag
        margin-left 5px
        margin-top 27px
        .price-tag
          height 40px
          display inline-block
          width 85px
          font-size 13px
          background #f5f5fa
          border-radius 5px
          margin-left 5px
          text-align center
          line-height 40px
          margin-bottom 5px
        .act
          color #4289ff
          background rgb(225, 240, 255)
    .star
      font-size 15px
      padding-bottom 16px
      .title
        margin-left 10px
      .tag
        margin-top 11px
        margin-left 5px
        .star-tag
          height 40px
          display inline-block
          width 85px
          font-size 13px
          background #f5f5fa
          border-radius 5px
          margin-left 5px
          text-align center
          line-height 40px
          margin-bottom 5px
        .active
          color #4289ff
          background rgb(225, 240, 255)
    .button
      height 44px
      display flex
      text-align center
      line-height 44px
      border-top 1px solid #ebebeb
      font-size 16px
      .clear
        flex 1
        color #4c565c
      .confirm
        flex 1
        background #ff6913
        color #ffffff


</style>
