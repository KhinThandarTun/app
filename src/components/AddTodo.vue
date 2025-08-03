<template>
 <div class="input-group mb-3">
  <input type="text" class="form-control" v-model="newTodo.title">
  <button class="btn btn-primary" @click="addTodo(newTodo)">
    add todo
  </button>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return{
            newTodo:{
                title:""
            }
        }
    },
    methods: mapActions(["addTodo"]),
}
</script>

<style>

</style>