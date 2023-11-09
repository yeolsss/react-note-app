import { createSlice } from "@reduxjs/toolkit";
import { IToDo } from "../../../interface/INote";
import { RootState } from "../configStore";

const TO_DO_KEY = "toDoList";
const initialState: IToDo[] = JSON.parse(
  localStorage.getItem(TO_DO_KEY) || "[]",
);
const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState,
  reducers: {
    toDoAdded: (state, action) => {
      console.log("reducers: toDoAdded출력");
      return state;
    },
  },
});

export const { toDoAdded } = toDoSlice.actions;

export const selectToDos = (state: RootState) => state.toDos;

export default toDoSlice.reducer;
