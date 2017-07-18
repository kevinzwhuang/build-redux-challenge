export const addTodo = (id, text) => {
  return {
    type: 'ADD_TODO',
    id: id,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
