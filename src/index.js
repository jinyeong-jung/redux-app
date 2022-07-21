import { createStore } from "redux";

// COUNT
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const COUNT_REDUCER_TYPES = {
  ADD: "ADD",
  MINUS: "MINUS",
};

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case COUNT_REDUCER_TYPES.ADD:
      return count + 1;
    case COUNT_REDUCER_TYPES.MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countReducer);

const onCountChange = () => {
  let value = countStore.getState();
  number.innerText = value;
};

countStore.subscribe(onCountChange);

const handleCountAdd = () => {
  countStore.dispatch({ type: COUNT_REDUCER_TYPES.ADD });
};

const handleCountMinus = () => {
  countStore.dispatch({ type: COUNT_REDUCER_TYPES.MINUS });
};

add.addEventListener("click", handleCountAdd);
minus.addEventListener("click", handleCountMinus);

// TODOS
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const TODOS_REDUCER_TYPES = {
  ADD: "ADD",
};

const todosReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case TODOS_REDUCER_TYPES.ADD:
      return [payload, ...state];
    default:
      return state;
  }
};

const todosStore = createStore(todosReducer);

const paintTodos = () => {
  const todos = todosStore.getState();

  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerText = todo;
    ul.appendChild(li);
  });
};

todosStore.subscribe(paintTodos);

const onTodosSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  todosStore.dispatch({ type: TODOS_REDUCER_TYPES.ADD, payload: todo });
};

form.addEventListener("submit", onTodosSubmit);
