import { useSelector } from "react-redux";
import { selectToDos } from "../redux/config/modules/toDoSlice";

function NoteList() {
  const toDos = useSelector(selectToDos);
  console.log(toDos);

  return <div></div>;
}

export default NoteList;
