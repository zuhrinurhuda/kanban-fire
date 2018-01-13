import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAction, firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    backLog: state => state.tasks.filter(task => task.status === 'back-log'),
    toDo: state => state.tasks.filter(task => task.status === 'to-do'),
    doing: state => state.tasks.filter(task => task.status === 'doing'),
    done: state => state.tasks.filter(task => task.status === 'done')
  },
  mutations: {
    ...firebaseMutations
  },
  actions: {
    setTasksRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('tasks', ref)
    })
  }
})

export default store
