<template>
  <transition name="slide">
    <div class="hotel-list">
      <div class="top">
        <div class="nav">
          <div class="nav-icon" @click="back">
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class="search-box">
            <div class="date">
              <span class="enter">{{enter}}</span>
              <span class="leave">{{leave}}</span>
            </div>
            <div class="search">
              <i class="el-icon-search mt"></i>
              <span class="text mt">{{keywords}}</span>
            </div>
          </div>
          <div class="nav-icon-right">
            <i class="el-icon-location-outline"></i>
            <i class="el-icon-news"></i>
          </div>
        </div>
        <div class="fillter">
          <div class="fillter-item">
            <span class="text">筛选</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <div class="fillter-item">
            <span class="text">位置距离</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <div class="fillter-item">
            <span class="text">价格/星级</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <div class="fillter-item">
            <span class="text">欢迎度排序</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
        <div class="tags">
          <div class="tags-item" v-for="item in tags">
            <span class="tags-text">{{item.name}}</span>
            <i class="el-icon-caret-bottom" v-show="item.type === 1"></i>
          </div>
        </div>
      </div>
      <div ref="listScroll" class="list-wrapper">
        <div class="list">
          <div class="list-item" v-for="(item, index) in hotels" @click="selectHotel(item)">
            <div class="img">
              <img :src="item.avatar" width="93" height="126">
            </div>
            <div class="content">
              <span class="name">{{item.name}}</span>
              <span class="rating">{{item.rating}}</span><span class="text">分</span>
              <span class="evaluate">{{item.evaluate}}</span>
              <span class="location">{{item.location}}</span>
              <div class="price">
                <span class="price-pre">￥</span><span class="price-text">{{item.price}}</span><span class="price-lat">起</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>

    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations, mapGetters} from 'vuex'
const ERR_OK = 0
export default {
  data() {
    return {
      tags: [
        {
          name: '酒店类型',
          type: 1
        },
        {
          name: '我的附近',
          type: 0
        },
        {
          name: '热门品牌',
          type: 1
        },
        {
          name: '含早餐',
          type: 0
        },
        {
          name: '双床',
          type: 0
        },
        {
          name: '免费取消',
          type: 0
        }
      ],
      hotels: {}
    }
  },
  created() {
    this.$http.get('/api/hotels').then((response) => {
      if (response.data.errno === ERR_OK) {
        this.hotels = response.data.data
      }
    })
  },
  mounted() {
    setTimeout(() => {
      this.listScroll = new BScroll(this.$refs.listScroll, {
        scrollY: true
      })
    }, 40)
  },
  computed: {
    enter() {
      return `住${this.nowday.getMonth() + 1}-${this.nowday.getDate()}`
    },
    leave() {
      return `离${this.nowday.getMonth() + 1}-${this.nowday.getDate() + 1}`
    },
    ...mapGetters([
      'nowday',
      'keywords'
    ])
  },
  methods: {
    back() {
      this.$router.push('/bookHotel')
    },
    selectHotel(item) {
      this.$router.push({
        path: `/hotelList/${item.id}`
      })
      this.setHotel(item)
    },
    ...mapMutations({
      setHotel: 'SET_HOTEL'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .hotel-list
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #ffffff
    z-index 200
    .top
      background #f7f7f7
      .nav
        padding 10px 0 5px 0
        height 32px
        display flex
        .nav-icon
          display inline-block
          width 44px
          text-align center
          line-height 32px
          font-size 19px
        .search-box
          display inline-block
          flex 1
          border-radius 20px
          background #e6e6e6
          .date
            font-size 10px
            width 62px
            border-right 1px solid #cccccc
            display inline-block
            text-align center
            height 32px
            color #4289ff
            .enter, .leave
              display block
            .enter
              margin-top 5px
          .search
            display inline-block
            font-size 14px
            .mt
              display inline-block
              margin-top -10px
        .nav-icon-right
          display inline-block
          font-size 19px
          flex 0 0 80px
          right 0
          text-align center
          line-height 32px
      .fillter
        height 39px
        line-height 39px
        display flex
        .fillter-item
          flex 1
          display inline-block
          text-align center
          font-size 0
          &.fillter-item > i
            font-size 10px
            color #b2b2b2
          .text
            font-size 13px
      .tags
        border-top 1px solid rgb(228, 228, 228)
        border-bottom 1px solid rgb(228, 228, 228)
        height 40px
        overflow hidden
        .tags-item
          margin-top 6px
          display inline-block
          height 28px
          font-size 11px
          border-radius 20px
          background #ffffff
          margin-left 7px
          padding 0 10px 0 10px
          line-height 28px
          border 1px solid #ebebeb
    .list-wrapper
        width 100%
        position absolute
        top 128px
        bottom 0
        overflow hidden
      .list
        width 100%
        .list-item
          height 129px
          display flex
        .img
          flex 0 0 93px
        .content
          margin-left 11px
          margin-top 14px
          flex 1
          position relative
          border-bottom 1px solid #e1e1e1
          .name
            display block
            font-size 16px
          .rating
            display inline-block
            height 35px
            line-height 35px
            font-size 15px
            color #4289ff
          .text
            font-size 12px
            color #4289ff
            margin-left 2px
          .evaluate
            color #4289ff
            font-size 15px
          .location
            display block
            font-size 12px
            color #acacac
          .price
            position absolute
            bottom 15px
            right 7px
            .price-pre
              color #ff4400
              font-size 9px
            .price-text
              color #ff4400
              font-size 18px
              margin-left 2px
            .price-lat
              font-size 11px
              color #acacac
              margin-left 2px


</style>

