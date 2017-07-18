const createStore = (reducer) => {
  let state = reducer([], { type: 'INITIALIZE_STORE' })

  let subscriptions = [];

  function getState() {
    return state
  }

  function dispatch(action) {
    console.log(action)
    state = reducer(state, action)
    console.log(state)
    subscriptions.map(listener => listener());
  }

  function subscribe(listener) {
    subscriptions.push(listener)
  }

  return { getState, dispatch, subscribe }
}

export default createStore;
