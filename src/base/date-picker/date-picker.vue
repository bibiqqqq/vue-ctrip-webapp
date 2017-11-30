<template>
  <div class="date-picker" ref="dateWrapper">
    <div>
      <div class="month-box" v-for="item in calendarDate">
        <span class="month">{{item.name}}</span>
        <div class="day-wrapper">
          <div class="day-box" v-for="item in item.day">
            <span class="festival">{{item.festival}}</span>
            <span class="day">{{item.day}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
const ERR_OK = 0
export default {
  data() {
    return {
      calendarDate: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.dateWrapper = new BScroll(this.$refs.dateWrapper, {
        scrollY: true
      })
    }, 20)
  },
  created() {
    this.$http.get('/api/calendar').then((response) => {
      if (response.data.errno === ERR_OK) {
        this.calendarDate = response.data.data
        console.log(this.calendarDate)
      }
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .date-picker
    position absolute
    top 76px
    bottom 0
    overflow hidden
    .month-box
      font-size 14px
      border-bottom 1px solid #e8e8e8
      .month
        display block
        margin-top 17px
        margin-left 4.167rem
      .day-wrapper
        margin-top 17px
        margin-left 0.05rem
        .day-box
          width 1.413rem
          height 1.547rem
          display inline-block
          position relative
          text-align center
          vertical-align top
          line-height 1.547rem
          font-size 0
          .day
            font-size 14px
          .festival
            display block
            position absolute
            font-size 10px
            top -0.46rem
            margin auto
            left 0
            right 0


</style>
