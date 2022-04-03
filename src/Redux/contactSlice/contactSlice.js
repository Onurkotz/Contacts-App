import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    items: [
      {
        id: 1,
        name: "Onur Koç",
        tel: 5432985139,
      },
      {
        id: 2,
        name: "Kamuran Usluer",
        tel: 6852154687,
      },
      {
        id: 3,
        name: "Mahmut Tuncer",
        tel: 5986241527,
      },
    ],
    filteredList: {},
  },
  reducers: {
    addNew: (state, action) => {
      state.items.push(action.payload);
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addNew, destroy } = contactSlice.actions;
export default contactSlice.reducer;
