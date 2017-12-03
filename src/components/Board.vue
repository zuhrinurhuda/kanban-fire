<template>
  <div class="ui four column doubling stackable grid fluid container">
    <Navbar/>
    <BoardCard/>
    <BoardCard/>
    <BoardCard/>
    <BoardCard/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import BoardCard from '@/components/BoardCard'

  export default {
    name: 'Board',
    components: {
      Navbar,
      BoardCard
    }
  }
</script>

<style scoped>
</style>
