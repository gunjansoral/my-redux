import { createStore, } from './redux'

const store = createStore(reducer);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  store.dispatch({ type: 'INC' })
  console.log(store.getState());
})

function reducer(state = { value: 0 }, action) {
  if (action.type === 'INC') {
    return { ...state, value: state.value + 1 };
  }
  if (action.type === 'DEC') {
    return { ...state, value: state.value - 1 };
  }
}