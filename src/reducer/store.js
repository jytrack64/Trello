import { configureStore, createSlice } from "@reduxjs/toolkit";

const test = createSlice({
  name: "test",
  initialState: [
    {
      id: 0,
      title: "할일",
      cards: [
        { id: 0, content: "one" },
        { id: 1, content: "two" },
        { id: 2, content: "three" }
      ]
    },

    {
      id: 0,
      title: "완료",
      cards: [
        { id: 0, content: "one" },
        { id: 1, content: "two" },
        { id: 2, content: "three" }
      ]
    },
  ]
})

export default configureStore({
  reducer: {
    test: test.reducer
  }
})

// export default test;