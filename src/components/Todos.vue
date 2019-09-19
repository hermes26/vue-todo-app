<template>
    <div>
        <div v-bind:key="list.id" v-for="list in lists">
            <TodoItem v-bind:todo="list"/>
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