<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to the Vue.js To Do App"/>
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:lists="todos" v-on:delete-todo="deleteTodo" />
    <!-- catch the emited event and call a function to delete the todo item -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/Todos.vue'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'
import axios from 'axios';




export default {
  name: 'app',
  components: {
    HelloWorld,
    Todos,
    Header,
    AddTodo,
  },
  data(){
    return {
      // todos: [
      //   {
      //     id: 1,
      //     title: 'Todo One',
      //     completed: false
      //   },
      //   {
      //     id: 2,
      //     title: 'Todo Two',
      //     completed: true
      //   },
      //   {
      //     id: 3,
      //     title: 'Todo Three',
      //     completed: false
      //   },
      // ]
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      //makes a delete request to the server, we get a response back and then we delete that todo with id from the UI
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.todos = this.todos.filter( todo => todo.id !== id))
        .catch(err => console.log(err));



    },
    addTodo(newTodo){
      const { title, completed } = newTodo;
      //when we make a post request to jsonplaceholder with a new todo, it gives you back that todo, along with
      // the new id that id creates for you. jsonplaceholder mimics a backend api.
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));


    }
  },
  created(){ // a method that will run right away on start
    // JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5') //this would be some kind of backend api that ive built, eg node and express server
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));

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
