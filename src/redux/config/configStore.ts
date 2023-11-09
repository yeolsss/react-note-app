import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./modules/toDoSlice";

const store = configureStore({
  reducer: {
    toDos: toDoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
