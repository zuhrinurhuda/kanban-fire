<template>
  <div class="ui mini modal">
    <i class="close icon"></i>
    <div class="header">
      Detail task: {{ task.title }} for {{ task.assignedTo }}
    </div>
    <div class="content">
      <div class="ui small feed">
        <div class="event">
          <div class="content">
            <h4 class="ui header">Desc:</h4>
            <p>{{ task.desc }}</p>
            <h4 class="ui header">Point:</h4>
            <p>{{ task.point }}</p>
            <h4 class="ui header">Status:</h4>
            <p>{{ task['.key'] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="ui three buttons">
        <div class="ui yellow button">Approve</div>
        <div class="ui red button" @click="deleteTask(task)">Delete</div>
        <div class="ui green button">Decline</div>
      </div>
    </div>
  </div>
</template>

<script>
  /* global $ */
  import { tasksRef } from '../firebase/index'
  export default {
    props: ['task'],
    name: 'ShowDetailModal',
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
      deleteTask () {
        tasksRef.child(this.task['.key']).remove()
        $('.ui.mini.modal').modal('hide')
      }
    }
  }
</script>

<style scoped>
  h4 {
    margin-bottom: 0px !important;
  }
</style>
