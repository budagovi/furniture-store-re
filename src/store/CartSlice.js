import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'cart',
  initialState: {
    amount: 0,
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = {...action.payload.item, qty: action.payload.amount}
      state.amount+=newItem.qty;
      state.totalPrice += newItem.price*newItem.qty;

      //if item is already in list, index is greater than or equal to 0
      const index = state.items.findIndex(item => item.id === newItem.id)
      if(index >= 0) {
        state.items[index].qty +=newItem.qty;
        return;
      }

      state.items.push(newItem);
    },
    removeItemPiece(state, action) {
      const newItem = {...action.payload.item}
      state.amount--;
      state.totalPrice -= newItem.price;
      const index = state.items.findIndex(item => item.id === newItem.id)

      if(state.items[index].qty === 1) {
        state.items = state.items.filter(item=>item.id !== newItem.id)
        return;
      }

      state.items[index].qty--;
    },
    deleteItem(state, action) {
      const id = action.payload;
      const index = state.items.findIndex(item => item.id === id)
      const item = state.items[index];
      state.totalPrice -= item.price*item.qty;
      state.amount -= item.qty;

      state.items = state.items.filter(item=>item.id !== id)
    }
  }
})

export const actions = slice.actions;