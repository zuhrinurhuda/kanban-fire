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
          <input type="text" name="title" placeholder="title" v-model="newTask.title">
        </div>
        <div class="field">
          <label>Description</label>
          <textarea name="description" rows="2" v-model="newTask.desc"></textarea>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Point</label>
            <input type="text" name="point" placeholder="point" v-model="newTask.point">
          </div>
          <div class="field">
            <label>Assigned To</label>
            <input type="text" name="assignedTo" placeholder="assigned to" v-model="newTask.assignedTo">
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
  /* global $ */
  import { tasksRef } from '../firebase/index'
  export default {
    name: 'AddTaskModal',
    data: function () {
      return {
        newTask: {
          title: null,
          desc: null,
          point: null,
          assignedTo: null,
          status: null
        }
      }
    },
    methods: {
      addTask () {
        tasksRef.push(this.newTask)
        $('.ui.tiny.modal').modal('hide')
      }
    }
  }
</script>

<style scoped>
</style>
