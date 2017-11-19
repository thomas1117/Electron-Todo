<template>
    <div>
        <todo-form></todo-form>
        <todo-item></todo-item>
    </div>
</template>
<script>
    import TodoForm from './TodoForm';
    import TodoItem from './TodoItem';
    export default {
        components: {
            TodoForm,
            TodoItem
        }
    }
</script>