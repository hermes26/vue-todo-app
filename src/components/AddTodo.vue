<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add To Do...">
            <!-- we bind the title using v-model -->
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
// this was before we used axios and jsonplaceholder to get fake data and hence ids
// import uuid from 'uuid';

export default {
    name: "AddTodo",
    data(){
        return {
            title: '',
        }
    },
    methods: {
        addTodo(e){
            e.preventDefault();
            const newTodo = {
                // id: uuid.v4(),
                title: this.title,
                completed: false
            }
            // constructed the submit object, now to send up to the parent by emitting an event
            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    }
}
</script>

<style scoped>
    form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>