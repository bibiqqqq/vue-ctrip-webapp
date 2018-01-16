<template>
  <div class="hotel-detail" >
    <navbar :fontColor="'#ffffff'">
      <div class="navbar-left" @click="routerBack">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="navbar-right">
        <i class="el-icon-star-on icon1"></i>
        <i class="el-icon-share"></i>
      </div>
    </navbar>
    <div class="top-wrapper" ref="topWrapper">
      <div>
        <div class="top">
          <img :src="hotel.avatar" alt="">
          <div class="top-title">
            <span class="top-name">{{hotel.name}}</span>
            <span class="top-star">{{hotel.star}}</span>
          </div>
        </div>
        <div class="location">
          <span class="location-name">{{hotel.location}}</span>
          <span class="location-right">地图/街景<i class="el-icon-arrow-right" :style="{color: ''}"></i></span>
        </div>
        <div class="comment">
          <div class="comment-top">
            <span class="comment-rating">{{hotel.rating}}</span><span class="fen">分</span>
            <span class="comment-evaluate">{{hotel.evaluate}}</span>
            <span class="comment-text">服务周到</span>
            <span class="comment-ratings">{{hotel.ratings}}条点评<i class="el-icon-arrow-right"></i></span>
          </div>
          <img src="./comment.png" alt="" :style="{width: '100%'}">
        </div>
        <div class="rooms">
          <div class="room" v-for="item in hotel.rooms">
            <img :src="item.img">
            <div class="room-info">
              <span class="room-name">{{item.name}}<i class="el-icon-arrow-right" :style="{color: '#cecccd'}"></i></span>
              <span class="room-size">{{item.size}}m²</span>
              <span class="room-bed">{{item.bed}}</span>
              <span class="room-floor">{{item.floor}}</span>
            </div>
            <div class="room-right">
              <span>￥</span><span class="room-price">{{item.price}}</span><span>起</span>
              <div class="room-box" @click="open2">
                <span class="box-top">订</span>
                <span class="box-bottom">在线付</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from 'base/navbar/navbar'
import BScroll from 'better-scroll'
import {mapMutations, mapGetters} from 'vuex'
export default {
  props: {
    hotel: {
      type: Object
    }
  },
  created() {
    if (!this.hotel) {
      this.$router.back()
    }
  },
  computed: {
    ...mapGetters([
      'checkin',
      'checkout'
    ])
  },
  mounted() {
    setTimeout(() => {
      this.topWrapper = new BScroll(this.$refs.topWrapper, {
        scrollY: true
      })
    }, 40)
  },
  methods: {
    routerBack() {
      this.$router.back()
    },
    _storage() {
      if (localStorage.getItem('zhanghao')) {
        return true
      } else {
        return false
      }
    },
    open2() {
      if (this._storage()) {
        this.$confirm('是否确认为此房型?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          center: 'true'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '订房成功'
          })
        }).then(() => {
          this.$router.push('/mime')
          this.setBookedHotel({
            name: this.hotel.name,
            price: this.hotel.price,
            location: this.hotel.location,
            checkin: this.checkin,
            checkout: this.checkout
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '请继续选择'
          })
        })
      } else {
        this.$router.push('/login')
      }
    },
    ...mapMutations({
      setBookedHotel: 'SET_BOOKEDHOTEL'
    })
  },
  components: {
    navbar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.hotel-detail
  // background #f5f3f6
  .top-wrapper
    position absolute
    top 0
    bottom 0
    overflow hidden
    .top
      height 200px
      width 100%
      position relative
      img
        width 100%
        height 200px
      .top-title
        position absolute
        bottom 20px
        color #ffffff
        .top-name
          margin-left 20px
          font-size 18px
        .top-star
          margin-left 10px
    .location
      height 60px
      line-height 60px
      background #ffffff
      border-bottom 6px solid #f5f3f6
      .location-name
        font-size 16px
        margin-left 10px
      .location-right
        float right
        color #3c81f7
        font-size 14px
        margin-right 10px
    .comment
      border-bottom 6px solid #f5f3f7
      .comment-top
        border-bottom 1px solid #f5f3f7
        height 50px
        line-height 50px
        color: #3c81f7
        .comment-rating
          font-size 28px
          margin-left 10px
          font-weight bold
          margin-right 5px
        .fen
          font-size 18px
        .comment-evaluate
          font-size 16px
        .comment-text
          margin-left 5px
          font-size 16px
          color #ef7134
          font-weight 300
        .comment-ratings
          float right
          font-size 14px
          margin-right 10px
    .rooms
      padding-bottom 50px
      .room
        border-bottom 1px solid #f5f3f7
        padding 8px 8px 8px 8px
        img
          height 100px
          display inline-block
        .room-info
          display inline-block
          vertical-align top
          margin-left 5px
          .room-name
            margin-top 2px
            display block
            font-size 16px
            margin-bottom 10px
          .room-bed, .room-size, .room-floor
            color: #cecccd
            font-size 14px
          .room-floor
            margin-top 10px
            display block
        .room-right
          float right
          color #ed5129
          .room-price
            display inline-block
            font-size 18px
            padding 0 2px 0 2px
            font-weight 700
          .room-box
            margin-top 10px
            display block
            width 40px
            height 50px
            background #ef7134
            border-radius 3px
            border 1px solid #ef7134
            margin-left 6px
            .box-top
              background #ef7134
              color: #ffffff
              display block
              height 30px
              text-align center
              font-size 18px
              line-height 30px
            .box-bottom
              display block
              background #ffffff
              color: #ef7134
              height 20px
              text-align center
              line-height 20px









</style>
