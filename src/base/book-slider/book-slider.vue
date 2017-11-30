<template>
  <div class="book-slider">
    <slide :showDot="false" class="slide">
      <div v-for="item in sliderImage">
        <img height="150" v-lazy="item">
      </div>
    </slide>
  </div>
</template>

<script>
import slide from 'base/slide/slide'
export default {
  props: {
    sliderImage: {
      type: Array,
      default: ''
    },
    navbar: {
      type: Array,
      default: ''
    }
  },
  components: {
    slide
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .book-slider
    height 150px
    width 100%
    position relative
</style>
