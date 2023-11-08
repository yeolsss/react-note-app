import { useDispatch, useSelector } from "react-redux";
import { IToDo } from "../interface/IToDos";

function ToDos() {
  //   const dispatch = useDispatch();
  const toDos = useSelector((state) => {
    return state;
  });

  return <></>;
}

export default ToDos;
