import Vue from 'vue'
import Router from 'vue-router'
import KanbanBoard from '@/components/KanbanBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: KanbanBoard
    }
  ]
})
