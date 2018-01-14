<template>
  <div class="row">
    <div class="left aligned ten wide column column">
      <h1 class="ui header">Kanban Fire</h1>
    </div>
    <div class="right aligned six wide column">
      <button class="ui primary button" @click="addTask">New Task</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KanbanNavbar',
    methods: {
      addTask () {
        $('.ui.tiny.modal').modal('show')
      }
    }
  }
</script>

<style scoped>
</style>
