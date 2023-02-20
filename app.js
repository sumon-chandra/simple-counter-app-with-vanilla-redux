// * Select DOM elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// * Initial State
const initialState = {
  value: 0,
};

// * Reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
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
  store.dispatch({
    type: "increment",
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
