const mockState = {
    todos: [{
      id: 0,
      text: "I'm a todo",
      displayNotes: false,
      notes: [{
        id: 0,
        text: "I'm note 1"
      }],
    }]
};

const state = {
  todos: []
};

let mocked = true;

let exportedState = mocked ? mockState : state;

export default exportedState;