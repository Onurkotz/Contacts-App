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
  },
  reducers: {
    addNew: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addNew } = contactSlice.actions;
export default contactSlice.reducer;
