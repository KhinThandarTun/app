<template>
  <div id="app">
  <h1>{{$store.state.Todos.sayHello}}</h1>   
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted(){
    console.log(this.$store.state.Todos.sayHello);
  }
}
</script>

<style>
</style>
