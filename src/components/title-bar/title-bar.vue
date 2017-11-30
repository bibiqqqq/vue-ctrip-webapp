<template>
  <div class="title-bar">
    <span class="left">{{title}}</span>
    <div class="right">
      <span class="text">{{more}}</span>
      <span class="el-icon-arrow-right"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    more: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .title-bar
    width 100%
    border-bottom 1px solid #ebebeb
    background #ffffff
    height 50px
    line-height 50px
    .left
      display inline-block
      font-size 17px
      margin-left 8px
    .right
      display inline-block
      right 14px
      font-size 14px
      color #787878
      position absolute




</style>
