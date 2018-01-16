import * as types from './mutation-types'

const mutations = {
  [types.SET_PRICE](state, price) {
    state.price = price
  },
  [types.SET_STARLEVEL](state, starLevel) {
    state.starLevel = starLevel
  },
  [types.SET_PRICEPOPUP](state, pricePopup) {
    state.pricePopup = pricePopup
  },
  [types.SET_PRICETEXT](state, priceText) {
    state.priceText = priceText
  },
  [types.SET_PRICESHOW](state, priceShow) {
    state.priceShow = priceShow
  },
  [types.SET_PRICECLOSE](state, priceClose) {
    state.priceClose = priceClose
  },
  [types.SET_KEYWORD](state, keywords) {
    state.keywords = keywords
  },
  [types.SET_NAVBAR](state, navbar) {
    state.navbar = navbar
  },
  [types.SET_NOWDAY](state, nowday) {
    state.nowday = nowday
  },
  [types.SET_HOTEL](state, hotel) {
    state.hotel = hotel
  },
  [types.SET_ISLOGIN](state, isLogin) {
    state.isLogin = isLogin
  },
  [types.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_BOOKEDHOTEL](state, bookedHotel) {
    state.bookedHotel = bookedHotel
  },
  [types.SET_CHECKIN](state, checkin) {
    state.checkin = checkin
  },
  [types.SET_CHECKOUT](state, checkout) {
    state.checkout = checkout
  }
}
export default mutations
