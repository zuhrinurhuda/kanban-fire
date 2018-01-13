<template>
  <div class="ui tiny modal">
    <i class="close icon"></i>
    <div class="header">
      New Task
    </div>
    <div class="content">
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input type="text" placeholder="title" v-model="newTask.title">
        </div>
        <div class="field">
          <label>Description</label>
          <textarea rows="2" v-model="newTask.desc"></textarea>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Point</label>
            <input type="text" placeholder="point" v-model="newTask.point">
          </div>
          <div class="field">
            <label>Assigned To</label>
            <input type="text" placeholder="assigned to" v-model="newTask.assignedTo">
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button">
        Cancel
      </div>
      <div class="ui positive button" @click="addTask">
        Submit
      </div>
    </div>
  </div>
</template>

<script>
  import { tasksRef } from '../firebase'
  export default {
    name: 'KanbanModal',
    data: function () {
      return {
        newTask: {
          title: '',
          desc: '',
          point: '',
          assignedTo: '',
          status: 'back-log'
        }
      }
    },
    methods: {
      addTask: function () {
        console.log(this.newTask)
        tasksRef.push(this.newTask)
        this.resetModal()
      },
      resetModal () {
        this.newTask.title = ''
        this.newTask.desc = ''
        this.newTask.point = ''
        this.newTask.assignedTo = ''
      }
    }
  }
</script>

<style scoped>
</style>
