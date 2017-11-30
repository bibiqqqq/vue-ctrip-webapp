<template>
  <div>
    <div class="tabbar" v-for="item in tabbar">
      <router-link :to="item.path" tag="div" class="tabbar-item">
        <span class="icon icon-gray" :class="item.iconImg"></span>
        <span class="icon icon-active" :class="item.iconImg_active"></span>
        <span class="text">{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        {
          name: '首页',
          path: '/index',
          iconImg: 'icon-index',
          iconImg_active: 'icon-index_active'
        },
        {
          name: '行程',
          path: '/trip',
          iconImg: 'icon-trip',
          iconImg_active: 'icon-trip_active'
        },
        {
          name: '客服',
          path: '/service',
          iconImg: 'icon-service',
          iconImg_active: 'icon-service_active'
        },
        {
          name: '我的',
          path: '/mime',
          iconImg: 'icon-mime',
          iconImg_active: 'icon-mime_active'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tabbar
    height 51px
    display flex
    width 100%
    border-top 1px solid #EBEBEB
    .tabbar-item
      flex 1
      text-align center
      margin-top 8px
      .icon
        font-size 24px
      .icon-gray
        display inline-block
      .icon-active
        display none
      .text
        display block
        margin-top 4px
        font-size 12px
        color #696969
      &.router-link-active
        .icon-gray
          display none
        .icon-active
          display inline-block
        .text
          color #1296db
</style>
