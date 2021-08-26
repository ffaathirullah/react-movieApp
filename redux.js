const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  detailMovie: "",
};
// reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DETAIL":
      return {
        ...state,
        detailMovie: "",
      };
      break;

    default:
      return state;
  }
};
// store
const store = createStore(rootReducer);

// subscription
store.subscribe(() => {
  console.log("store change", store.getState());
});

// dispatching action ambil store
store.dispatch({ type: "DETAIL" });
console.log(store.getState());
