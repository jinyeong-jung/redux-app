import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const ToDo = ({ id, text }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>X</button>
    </li>
  );
};

export default ToDo;
