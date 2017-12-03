<template>
  <div class="ui fluid container">
    <Board/>
    <AddTaskModal/>
  </div>
</template>

<script>
  import Board from '@/components/Board'
  import AddTaskModal from '@/components/AddTaskModal'
  export default {
    name: 'Home',
    components: {
      Board,
      AddTaskModal
    }
  }
</script>

<style scoped>
</style>
