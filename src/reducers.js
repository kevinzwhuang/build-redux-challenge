const initialState = [
  { id: 1, text: "Debug todo app", completed: false },
  { id: 2, text: "Create redux", completed: false }
]

const todos = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIZE_STORE':
      return initialState;
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      console.log(state)
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
