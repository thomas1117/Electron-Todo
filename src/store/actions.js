const actions = {
  addTodo: ({ commit }, todo) => commit('addTodo', todo),
  deleteTodo: ({ commit }, id) => commit('deleteTodo', id),
};

export default actions;