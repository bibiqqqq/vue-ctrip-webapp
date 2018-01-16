<template>
  <transition name="appear">
    <div class="date">
      <div class="navbar">
        <span class="back" @click="back">{{navbar.back}}</span>
        <div class="navbar-date">
          <span class="text">{{navbar.name}}</span>
          <span class="nowday">2017年11月23日</span>
        </div>
      </div>
      <div class="week">
        <li class="week-day" v-for="item in weeks">{{item}}</li>
      </div>
      <date-picker :calendarDate="this.calendarDate"></date-picker>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import datePicker from 'base/date-picker/date-picker'
const ERR_OK = 0
export default {
  data() {
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      calendarDate: {}
    }
  },
  created() {
    if (!this.navbar) {
      this.$router.back()
    }
    this.$http.get('/api/calendar').then((response) => {
      if (response.data.errno === ERR_OK) {
        this.calendarDate = response.data.data
      }
    })
  },
  computed: {
    ...mapGetters([
      'navbar'
    ])
  },
  methods: {
    back() {
      this.$router.back()
    }
  },
  components: {
    datePicker
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .appear-enter-active, .appear-leave-active
    transition: all 0.3s

  .appear-enter, .appear-leave-to
    transform: translate3d(0, 100%, 0)

  .date
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 200
    background #ffffff
    .navbar
      height 50px
      background #f7f7f7
      text-align center
      padding-top 11px
      box-sizing border-box
      .back
        margin-top 6px
        position absolute
        left 17px
        font-size 15px
      .navbar-date
        .text
          font-size 17px
          display block
        .nowday
          margin-top 5px
          font-size 12px
          display block
          color #a5a5a5
    .week
      height 26px
      background #f5f5f5
      border-top 1px solid #d2d2d2
      display flex
      line-height 26px
      .week-day
        display inline-block
        flex 1
        text-align center
        font-size 12px
        &.week-day:nth-child(1), &.week-day:nth-child(7)
          color #099fde


</style>
