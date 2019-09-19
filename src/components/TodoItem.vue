<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}"> <!-- we are binding a class on the condition that todo.completed is true -->
        <p>{{todo.title}}</p>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"]
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