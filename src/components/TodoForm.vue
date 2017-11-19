<template>
    <form class="todo-form" @submit.prevent="submitTodo">
        <input class="todo-input" ref="input" v-model="todo" />    
    </form>
</template>
<script>
export default {
    data: () => {
        return {
            todo: '',
        }
    },
    methods: {
        submitTodo(e) {
            if(this.todo) {
                this.$store.dispatch('addTodo', this.todo);
                this.todo = '';
            }
        }
    },
    mounted() {
        this.$refs.input.focus()
    }
}
</script>