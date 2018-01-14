<template>
  <div class="ui segment">
    <div class="ui styled accordion" v-if="tasks.length">
      <div v-for="task in tasks" :key="task['.key']">
        <div class="title" @click="getStatus(task.status)">
          <i class="dropdown icon"></i>
          <span>{{ task.title }}</span>
        </div>
        <div class="content">
          <p><span class="bold">Desc: </span>{{ task.desc }}</p>
          <p><span class="bold">Point: </span>{{ task.point }}</p>
          <p><span class="bold">Status: </span>{{ currentStatus }}</p>
          <p><span class="bold">Assigned to: </span>{{ task.assignedTo }}</p>
          <div class="three ui fluid tiny buttons">
            <button class="ui yellow button" v-if="task.status !== 0" @click="prev(task)">{{ prevStatus }}</button>
            <button class="ui red button" @click="remove(task['.key'])">Delete</button>
            <button class="ui green button" v-if="task.status !== 3" @click="next(task)">{{ nextStatus }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { tasksRef } from '../firebase'
  export default {
    props: ['tasks'],
    name: 'KanbanCard',
    data: function () {
      return {
        taskStatus: 0
      }
    },
    computed: {
      prevStatus: function () {
        switch (this.taskStatus) {
          case 1:
            return 'Back Log'
          case 2:
            return 'To Do'
          case 3:
            return 'Doing'
          default:
            return 'Back Log'
        }
      },
      currentStatus: function () {
        switch (this.taskStatus) {
          case 0:
            return 'Back Log'
          case 1:
            return 'To Do'
          case 2:
            return 'Doing'
          case 3:
            return 'Done'
          default:
            return 'Back Log'
        }
      },
      nextStatus: function () {
        switch (this.taskStatus) {
          case 0:
            return 'To Do'
          case 1:
            return 'Doing'
          case 2:
            return 'Done'
          default:
            return 'To Do'
        }
      }
    },
    methods: {
      getStatus: function (status) {
        this.taskStatus = status
      },
      prev: function (task) {
        tasksRef.child(task['.key']).child('status').set(task.status - 1)
      },
      next: function (task) {
        tasksRef.child(task['.key']).child('status').set(task.status + 1)
      },
      remove: function (key) {
        tasksRef.child(key).remove()
      }
    },
    updated: function () {
      $('.ui.styled.accordion').accordion()
    }
  }
</script>

<style>
  .bold {
    font-weight: bold
  }
</style>
