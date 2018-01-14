import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAction, firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    backLog: state => state.tasks.filter(task => task.status === 0),
    toDo: state => state.tasks.filter(task => task.status === 1),
    doing: state => state.tasks.filter(task => task.status === 2),
    done: state => state.tasks.filter(task => task.status === 3)
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
