import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  initialState: [
    {
      id: 0,
      title: "To Do",
      cards: [
        { id: 0, content: "ToDo1" },
        { id: 1, content: "ToDo2" },
        { id: 2, content: "ToDo3" }
      ]
    },

    {
      id: 1,
      title: "Doing",
      cards: [
        { id: 0, content: "Doing1" },
        { id: 1, content: "Doing2" },
      ]
    },

    {
      id: 2,
      title: "Done",
      cards: [
        { id: 0, content: "Done1" },
        { id: 1, content: "Done2" },
        { id: 2, content: "Done3" },
        { id: 3, content: "Done4" },
        { id: 4, content: "Done1" },
        { id: 5, content: "Done2" },
        { id: 6, content: "Done3" },
      ]
    },
  ],

  reducers: {
    addCard(state, actions) {
      // console.log(actions.payload);
      const result = state.filter((el) => (el.title === actions.payload.title))
      result[0].cards.push({
        id: result[0].cards.length,
        content: actions.payload.text
      });
    }
  }
})
export const { addCard } = data.actions;
export default data;
