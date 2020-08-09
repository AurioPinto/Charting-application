<template>
<div>
    <div v-bind:key="todo.id" v-for="todo in todos ">
    <todoitem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
    </div>
</div>
</template>

<script>
    import todoitem from '../components/todoitem'
    export default {
        name: "todos",
        components:{
            todoitem
        },
        props: ["todos"]
    }
</script>

<style scoped>

</style>
