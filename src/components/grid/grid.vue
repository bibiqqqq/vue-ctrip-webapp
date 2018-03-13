<template>
  <div class="grid">
    <div class="hotel" @click="bookHotel">
      <div class="left">
        <span class="text">酒店</span>
        <img class="icon-img" src="./hotel.png" width="42px">
      </div>
      <div class="center">
        <span class="text">海外酒店</span>
        <span class="text">特价酒店</span>
      </div>
      <div class="right">
        <span class="text">团购</span>
        <span class="text">民宿·客栈</span>
      </div>
    </div>
    <div class="ticket" >
      <div class="left">
        <span class="text">机票</span>
        <img class="icon-img" src="./plane.png" width="42px">
      </div>
      <div class="center">
        <span class="text">火车票</span>
        <span class="text">特价机票</span>
      </div>
      <div class="right">
        <span class="text">汽车票·船票</span>
        <span class="text">专车·租车</span>
      </div>
    </div>
    <div class="travel">
      <div class="left">
        <span class="text">旅游</span>
        <img class="icon-img" src="./travel.png" width="42px">
      </div>
      <div class="center">
        <span class="text">门票</span>
        <span class="text">目的地攻略</span>
      </div>
      <div class="right">
        <span class="text">游轮旅行</span>
        <span class="text">定制旅行</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    bookHotel () {
      this.$router.push({
        path: '/bookHotel'
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .grid
    width 98%
    margin-left 1%
    font-size 17px
    color #fff
    margin-top 4px
    .hotel
      background #ff697a
      width 100%
      display flex
      border-top-left-radius 8px
      border-top-right-radius 8px
      height 89px
      .left
        flex 1
        display inline-block
        text-align center
        border-right: 1px solid #fff
        .text
          height 44px
          line-height 44px
          display block
        .icon-img
          height 44px
          margin-top -8px
      .center
        flex 1
        display inline-block
        text-align center
        .text
          height 44px
          line-height 44px
          width 100%
          display inline-block
          border-bottom 1px solid #fff
          border-right 1px solid #fff
      .right
        flex 1
        display inline-block
        text-align center
        .text
          height 44px
          line-height 44px
          width 100%
          display inline-block
          border-bottom 1px solid #fff
    .ticket
      background #3d98ff
      width 100%
      display flex
      height 89px
      margin-top 4px
      .left
        flex 1
        display inline-block
        text-align center
        border-right: 1px solid #fff
        .text
          height 44px
          line-height 44px
          display block
        .icon-img
          height 44px
          margin-top -8px
      .center
        flex 1
        display inline-block
        text-align center
        .text
          height 44px
          line-height 44px
          width 100%
          display inline-block
          border-bottom 1px solid #fff
          border-right 1px solid #fff
      .right
        flex 1
        display inline-block
        text-align center
        .text
          height 44px
          line-height 44px
          width 100%
          display inline-block
          border-bottom 1px solid #fff
    .travel
      background #44c522
      width 100%
      display flex
      border-bottom-left-radius 8px
      border-bottom-right-radius 8px
      height 89px
      margin-top 4px
      .left
        flex 1
        display inline-block
        text-align center
        border-right: 1px solid #fff
        .text
          height 44px
          line-height 44px
          display block
        .icon-img
          height 44px
          margin-top -8px
      .center
        flex 1
        display inline-block
        text-align center
        .text
          height 44px
          line-height 44px
          width 100%
          display inline-block
          border-bottom 1px solid #fff
          border-right 1px solid #fff
      .right
        flex 1
        display inline-block
        text-align center
        .text
          height 44px
          line-height 44px
          width 100%
          display inline-block
          border-bottom 1px solid #fff

</style>
