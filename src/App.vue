<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Todos v-bind:lists="todos" v-on:delete-todo="deleteTodo" />
    <!-- catch the emited event and call a function to delete the todo item -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/Todos.vue'
import Header from './components/layouts/Header'



export default {
  name: 'app',
  components: {
    HelloWorld,
    Todos,
    Header,
  },
  data(){
    return {
      todos: [
        {
          id: 1,
          title: 'Todo One',
          completed: false
        },
        {
          id: 2,
          title: 'Todo Two',
          completed: true
        },
        {
          id: 3,
          title: 'Todo Three',
          completed: false
        },
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter( todo => todo.id !== id)
    }
  }
}
</script>

<style>
 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }

</style>
