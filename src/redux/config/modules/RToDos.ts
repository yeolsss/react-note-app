import { IToDo } from "../../../interface/IToDos";

const TO_DO_KEY = "toDoList";
const initialState: IToDo[] = JSON.parse(
  localStorage.getItem(TO_DO_KEY) || "[]",
);

export const ADD_TODO = "ADD_TODO";

const toDos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default toDos;
