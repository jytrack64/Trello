import { configureStore } from "@reduxjs/toolkit";
import data from "./dataSlice.js";

export default configureStore({
  reducer: {
    data: data.reducer
  }
})

