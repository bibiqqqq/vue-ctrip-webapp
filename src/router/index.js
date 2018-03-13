import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = (resolve) => {
  import('components/index/index').then((module) => {
    resolve(module)
  })
}

const trip = (resolve) => {
  import('components/trip/trip').then((module) => {
    resolve(module)
  })
}

const service = (resolve) => {
  import('components/service/service').then((module) => {
    resolve(module)
  })
}

const mime = (resolve) => {
  import('components/mime/mime').then((module) => {
    resolve(module)
  })
}

const bookHotel = (resolve) => {
  import('components/book-hotel/book-hotel').then((module) => {
    resolve(module)
  })
}

const bookHotel1 = (resolve) => {
  import('components/book-hotel1/book-hotel1').then((module) => {
    resolve(module)
  })
}

// const bookTicket = (resolve) => {
//   import('components/book-ticket/book-ticket').then((module) => {
//     resolve(module)
//   })
// }

const keyword = (resolve) => {
  import('components/keyword/keyword').then((module) => {
    resolve(module)
  })
}

const date = (resolve) => {
  import('components/date/date').then((module) => {
    resolve(module)
  })
}

const hotelList = (resolve) => {
  import('components/hotel-list/hotel-list').then((module) => {
    resolve(module)
  })
}

const hotel = (resolve) => {
  import('components/hotel/hotel').then((module) => {
    resolve(module)
  })
}

const login = (resolve) => {
  import('components/login/login').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: '首页',
      component: index
    },
    {
      path: '/trip',
      name: '行程',
      component: trip
    },
    {
      path: '/service',
      name: '客服',
      component: service
    },
    {
      path: '/mime',
      name: '我的',
      component: mime
    },
    {
      path: '/bookHotel',
      name: '订酒店',
      component: bookHotel,
      children: [
        {
          path: '/bookHotel',
          redirect: '/bookHotel/1'
        },
        {
          path: '/bookHotel/1',
          name: '国内',
          component: bookHotel1
        },
        {
          path: '/bookHotel/2',
          name: '海外',
          component: bookHotel1
        },
        {
          path: '/bookHotel/3',
          name: '民宿',
          component: bookHotel1
        }
      ]
    },
    // {
    //   path: '/bookTicket',
    //   name: '订机票',
    //   component: bookTicket
    // },
    {
      path: '/keyword',
      name: '关键字',
      component: keyword
    },
    {
      path: '/date',
      name: '日期',
      component: date,
      children: [
        {
          path: '/date/checkin',
          name: '入住'
        },
        {
          path: '/date/checkout',
          name: '离店'
        }
      ]
    },
    {
      path: '/hotelList',
      name: '酒店列表',
      component: hotelList,
      children: [
        {
          path: ':id',
          component: hotel
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: login
    }
  ]
})
