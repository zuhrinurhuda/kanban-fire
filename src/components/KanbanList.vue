<template>
  <div class="column">
    <div class="ui segments">
      <div class="ui segment">
        <h2 class="ui header">
          {{ title }}
        </h2>
      </div>
      <kanban-card v-for="task in tasks" :task="task" :key="task['.key']"></kanban-card>
    </div>
  </div>
</template>

<script>
  // import { tasksRef } from '../firebase/index'
  import KanbanCard from '@/components/KanbanCard'
  export default {
    name: 'KanbanList',
    props: ['title', 'tasks'],
    // firebase: {
    //   tasks: tasksRef
    // },
    components: {
      KanbanCard
    }
  }
</script>

<style>
</style>
