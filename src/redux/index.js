class Store {
  constructor(reducer) {
    this.state;
    this.reducer = reducer;
    this.customEvent = new Event('customDispatch');
    document.addEventListener('customDispatch', (e) => {
      this.state = this.reducer(this.state, e.action);
    });
  }

  dispatch(action) {
    this.customEvent.action = action;
    document.dispatchEvent(this.customEvent);
  }

  getState() {
    return this.state;
  }
}

export const createStore = (reducer) => {
  return new Store(reducer)
}