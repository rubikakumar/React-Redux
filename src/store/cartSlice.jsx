import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementCount(state, action) {
      const item = state.find((product) => product.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    decrementCount(state, action) {
      const item = state.find((product) => product.id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      } else {
        return state.filter((product) => product.id !== action.payload);
      }
    }
  },
});

export const { add, remove, incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
