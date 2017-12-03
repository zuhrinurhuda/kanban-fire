<template>
  <div class="row">
    <div class="left aligned left floated column">
      <h1 class="ui header">Kanban Board</h1>
    </div>
    <div class="right aligned right floated column">
      <button class="ui primary button" @click="addTask">
        New Task
      </button>
      <AddTaskModal/>
    </div>
  </div>
</template>

<script>
  /* global $ */
  import AddTaskModal from '@/components/AddTaskModal'
  export default {
    name: 'Navbar',
    components: {
      AddTaskModal
    },
    methods: {
      addTask () {
        $('.ui.tiny.modal').modal('show')
      }
    }
  }
</script>

<style scoped>
</style>
