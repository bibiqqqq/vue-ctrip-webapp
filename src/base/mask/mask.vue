<template>
  <div class="mask" @click="popback"></div>
</template>

<script>
export default {
  methods: {
    popback() {
      this.$emit('popback')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mask
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, 0.5)
    z-index 500
</style>
