<template>
  <div class="navbar" :style="{color: fontColor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fontColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .navbar
    height 50px
    position absolute
    top 0
    width 100%
    z-index 100
    font-size 20px
    line-height 50px
    .navbar-left
      width 50px
      text-align center
      display inline-block
    .navbar-right
      float right
      display inline-block
      margin-right 15px
      .icon1
        margin-right 10px


</style>
