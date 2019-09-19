<template>
    <div>
        <div v-bind:key="list.id" v-for="list in lists">
            <TodoItem v-bind:todo="list" v-on:delete-todo="$emit('delete-todo', list.id)" />
            <!-- v-on catched the emited event from the item and emits it again to where the data is stored in app.vue -->
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'


export default {
    name: 'Todos',
    components: {
        TodoItem,
    },
    props: ["lists"]
}
</script>

<style scoped>

</style>