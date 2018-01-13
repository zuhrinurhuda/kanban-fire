<template>
  <div class="ui segment">
    <div class="ui card">
      <div class="content">
        <div class="ui small header">{{ task.title }}</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <p>Point: {{ task.point }}</p>
              <p>Assigned to: {{ task.assignedTo }}</p>
              <!-- {{task}} -->
            </div>
          </div>
          <br>
          <button class="ui button" @click="showDetail">Show Detail</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['task'],
    name: 'KanbanCard',
    methods: {
      showDetail () {
        // $('.ui.mini.modal').modal('show')
      }
    }
  }
</script>

<style>
</style>
