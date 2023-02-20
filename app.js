// * Select DOM elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// * Action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// * Action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

// * Initial State
const initialState = {
  value: 0,
};

// * Reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - payload,
    };
  } else {
    return state;
  }
};

// * Create redux store
const store = Redux.createStore(counterReducer);

// * Create render function
const render = () => {
  const state = store.getState();
  counterEl.textContent = state.value.toString();
};

render(); // To get the initial value

// * Subscribe the store
store.subscribe(render);

// * Action dispatch
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
