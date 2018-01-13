<template>
  <div class="ui four column doubling stackable grid fluid container">
    <kanban-navbar/>
    <kanban-list :title="'Back-Log'" :tasks="backLog"></kanban-list>
    <kanban-list :title="'To-Do'" :tasks="toDo"></kanban-list>
    <kanban-list :title="'Doing'" :tasks="doing"></kanban-list>
    <kanban-list :title="'Done'" :tasks="done"></kanban-list>
    <kanban-modal/>
    <!-- {{tasks}}
    {{backLog}} -->
  </div>
</template>

<script>
  import KanbanNavbar from '@/components/KanbanNavbar'
  import KanbanList from '@/components/KanbanList'
  import KanbanModal from '@/components/KanbanModal'
  import { tasksRef } from '../firebase'

  export default {
    name: 'KanbanBoard',
    components: {
      KanbanNavbar,
      KanbanList,
      KanbanModal
    },
    firebase: {
      tasks: tasksRef
    },
    computed: {
      backLog: function () {
        return this.tasks.filter(task => task.status === 'back-log')
      },
      toDo: function () {
        return this.tasks.filter(task => task.status === 'to-do')
      },
      doing: function () {
        return this.tasks.filter(task => task.status === 'doing')
      },
      done: function () {
        return this.tasks.filter(task => task.status === 'done')
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>
