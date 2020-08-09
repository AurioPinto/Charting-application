<template>
    <form @submit="addTodo">
        <input type="text" name="title" placeholder="AddTodo...">
        <input type="submit" value="submit" class="btn">
    </form>
</template>

<script>
    // import uuid from 'uuid';
    export default {
        name: "AddTodo",
        data(){
            return{
                title: ''
            }
        },
        methods:{
            addTodo(e){
                e.preventDefault();
                const newTodo={
                    // id: uuid.v4(),
                    title: this.title,
                    completed: false
                }
                // Send up to parent
                this.$emit('add-todo', newTodo);

                this.title='';
            }
        }
    }
</script>

<style lang="scss" scoped>
    form{
        display: flex;
        input[type='text']{
            flex: 10;
            padding: 5px;
            background: #ffffff;
            color: #333333;
        }
        input[type='submit']{
            flex: 2;
        }
        .btn{
            display: inline-block;
            border: none;
            background: #555555;
            color: #fff;
            padding: 7px 20px;
            cursor: pointer;
        }
        .btn:hover{
            background: #666666;
        }
    }
</style>
