<template>
  <div class="hotel-detail">{{hotel.name}}</div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      default: ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
