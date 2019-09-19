<template>
    <div>
        <div v-bind:key="list.id" v-for="list in lists">
            <h3>{{list.title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Todos',
    props: ["lists"]
}
</script>

<style scoped>

</style>