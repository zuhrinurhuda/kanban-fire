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
            </div>
          </div>
          <br>
          <button class="ui button" @click="showDetail">Show Detail</button>
          <ShowDetailModal :task="task"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* global $ */
  import ShowDetailModal from '@/components/ShowDetailModal'
  export default {
    props: ['task'],
    name: 'BoardSection',
    components: {
      ShowDetailModal
    },
    methods: {
      showDetail () {
        $('.ui.mini.modal').modal('show')
      }
    }
  }
</script>

<style lang="css">
</style>
