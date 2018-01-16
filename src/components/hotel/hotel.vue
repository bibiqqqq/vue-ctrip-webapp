<template>
  <transition name="slide">
    <div class="hotel">
      <hotel-detail :hotel="this.hotel"></hotel-detail>
    </div>
  </transition>
</template>

<script>
import hotelDetail from 'components/hotel-detail/hotel-detail'
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'hotel'
    ])
  },
  created() {
    if (!this.hotel.id) {
      this.$router.back()
    }
  },
  components: {
    hotelDetail
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .slide-enter-active, .slide-leave-active
    transition : all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .hotel
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    background #ffffff
    z-index 200
</style>
