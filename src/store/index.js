import { combineReducers, createStore } from "redux";

export const ADD = "add";
export const REMOVE = "remove";

const favoriteReducer = (state = [], action) => {
  if (action.type === ADD) {
    const newArray = [...state, action.payload];

    return newArray;
  } else if (action.type === REMOVE) {
    const result = state.filter((data) => {
      if (action.payload.id === data.id) {
        return false;
      }
      return true;
    });

    return result;
  }
  return state;
};

const combineReducer = combineReducers({
  favorite: favoriteReducer,
});

export const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
