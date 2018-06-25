import Vue from 'vue'
import Router from 'vue-router'
import EventList from '@/components/EventList'
import EventDetail from '@/components/EventDetail'
import DatePicker from '@/components/VueBulmaDatepicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/detail',
      name: 'EventDetail',
      component: EventDetail
    },
    {
      path: '/datepicker',
      name: 'DatePicker',
      component: DatePicker
    }
  ]
})
