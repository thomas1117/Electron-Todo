const mutations = {
  addTodo (state, todo) {
    state.todos.push({id: state.todos.length, text: todo});
  },
  deleteTodo (state, id) {
    state.todos = state.todos.filter((item) => {
        return item.id !== id;
    });
  }
};

export default mutations;