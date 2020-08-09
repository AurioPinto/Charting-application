<template>
<div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
        <input type="checkbox" v-on:change="markcomplete">
        {{todo.title}}
        <button @click="$emit('del-todo', todo.id)" class="del">X</button>
    </p>
</div>
</template>

<script>
    export default {
        name: "todoitem",
        props:["todo"],
        methods:{
            markcomplete: function () {
                this.todo.completed = !this.todo.completed
            }
        }
    }
</script>

<style lang="scss" scoped>
.todo-item{
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #cccccc dotted;
}
    .is-complete{
    text-decoration: line-through;
    }
    .del{
        background-color: #ff0000;
        color: #ffff;
        border: none;
        padding: 5px 9px;
        border-radius: 50px;
        cursor: pointer;
        float: right;
    }

</style>
