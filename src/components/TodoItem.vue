<template>
    <div class="todo-item-container">
        <ul>
          <li class="todo-item" v-for="todo in todos">
            <div>
              <span @click="toggleShow">o</span>
              <span>{{ todo.text }}</span>
              <span class="todo-delete" @click="deleteTodo(todo.id)">x</span>
              <todo-note v-if="displayNote" :notes="todo.notes"></todo-note>
            </div>
          </li>
        </ul>
    </div>
    
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import TodoNote from './TodoNote';
export default {
  data: () => {
    return {
      displayNote: false,
    }
  },
  computed: {
    ...mapState([
      'todos'
    ]),
  },
  methods: {
    ...mapActions([
      'deleteTodo'
    ]),
    toggleShow() {
      this.displayNote = !this.displayNote;
    }
  },
  components: {
    TodoNote
  }
}
</script>