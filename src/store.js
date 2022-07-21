import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: uuidv4() }, ...state];
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: uuidv4() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

const store = configureStore({ reducer });

export default store;
