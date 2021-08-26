import { createStore } from "redux";

let initialState = {
  moviess: [],
  DetailMovie: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_MOVIE":
      return {
        ...state,
        moviess: action.payload,
      };
    case "DETAIL_MOVIE":
      return {
        ...state,
        DetailMovie: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
