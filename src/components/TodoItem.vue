<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}"> <!-- we are binding a class on the condition that todo.completed is true -->
        <input type="checkbox" v-on:change="markComplete">
        <!-- v-on directives is for events eg v-on:click -->
        <!-- we are looking at a change event and the ncalling markComplete -->
        <p>{{todo.title}}</p>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete(){
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>

    .todo-item {
        padding: 10px;
    }

    .is-complete{
        text-decoration: line-through;
    }

</style>