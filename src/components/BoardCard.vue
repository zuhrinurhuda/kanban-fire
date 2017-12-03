<template>
  <div class="column">
    <div class="ui segments">
      <div class="ui segment">
        <h2 class="ui header">
          Back-Log
        </h2>
      </div>
      <BoardSection v-for="task in tasks" :key="task['.key']" :task="task"/>
    </div>
  </div>
</template>

<script>
  import { tasksRef } from '../firebase/index'
  import BoardSection from '@/components/BoardSection'
  export default {
    name: 'BoardCard',
    firebase: {
      tasks: tasksRef
    },
    components: {
      BoardSection
    }
  }
</script>

<style lang="css">
</style>
