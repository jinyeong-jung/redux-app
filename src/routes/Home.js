import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  };

  return (
    <Fragment>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>

      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Home;
