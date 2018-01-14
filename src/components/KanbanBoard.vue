<template>
  <!-- <div class="ui four column doubling stackable grid fluid container"> -->
  <div class="ui fluid container">
    <div class="ui grid">
      <kanban-navbar/>
      <kanban-list :title="'Back Log'" :tasks="backLog"></kanban-list>
      <kanban-list :title="'To Do'" :tasks="toDo"></kanban-list>
      <kanban-list :title="'Doing'" :tasks="doing"></kanban-list>
      <kanban-list :title="'Done'" :tasks="done"></kanban-list>
      <kanban-modal/>
    </div>
  </div>
</template>

<script>
  import KanbanNavbar from '@/components/KanbanNavbar'
  import KanbanList from '@/components/KanbanList'
  import KanbanModal from '@/components/KanbanModal'
  import { mapActions, mapGetters } from 'vuex'
  import { tasksRef } from '../firebase'

  export default {
    name: 'KanbanBoard',
    components: {
      KanbanNavbar,
      KanbanList,
      KanbanModal
    },
    computed: {
      ...mapGetters(['backLog', 'toDo', 'doing', 'done'])
    },
    methods: {
      ...mapActions(['setTasksRef'])
    },
    mounted: function () {
      this.setTasksRef(tasksRef)
    }
  }
</script>

<style scoped>
  .ui.fluid.container {
      width: 95%;
      margin: 2rem 0;
  }
</style>
