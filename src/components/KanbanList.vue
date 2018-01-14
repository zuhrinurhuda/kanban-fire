<template>
  <div class="sixteen wide mobile eight wide tablet four wide computer column">
    <div :class="segmentsBorder">
      <div :class="segmentColor">
        <h2 class="ui header">{{ title }}</h2>
      </div>
      <kanban-card :tasks="tasks"></kanban-card>
    </div>
  </div>
</template>

<script>
  import KanbanCard from '@/components/KanbanCard'
  export default {
    name: 'KanbanList',
    props: ['title', 'tasks'],
    components: {
      KanbanCard
    },
    computed: {
      segmentsBorder: function () {
        switch (this.title) {
          case 'Back Log':
            return 'ui segments red-border'
          case 'To Do':
            return 'ui segments yellow-border'
          case 'Doing':
            return 'ui segments green-border'
          case 'Done':
            return 'ui segments blue-border'
        }
      },
      segmentColor: function () {
        switch (this.title) {
          case 'Back Log':
            return 'ui inverted red segment'
          case 'To Do':
            return 'ui inverted yellow segment'
          case 'Doing':
            return 'ui inverted green segment'
          case 'Done':
            return 'ui inverted blue segment'
        }
      }
    }
  }
</script>

<style>
  .red-border {
    border: 1px solid #db2828 !important;
  }

  .yellow-border {
    border: 1px solid #fbbd08 !important;
  }

  .green-border {
    border: 1px solid #21ba45 !important;
  }

  .blue-border {
    border: 1px solid #2185d0 !important;
  }
</style>
