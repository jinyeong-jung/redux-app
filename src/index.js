import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const REDUCER_TYPES = {
  ADD: "ADD",
  MINUS: "MINUS",
};

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countReducer);

const onChange = () => {
  let value = countStore.getState();
  number.innerText = value;
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: REDUCER_TYPES.ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: REDUCER_TYPES.MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
