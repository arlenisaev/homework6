import { createSlice } from '@reduxjs/toolkit';
import products from '../../productsQ.json';

const initialState = { data: products, basket: [] };

const getProductSlice = createSlice({
  name: 'getProductSlice',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const add = state.basket.find((item) => item._id === action.payload._id);
      if (add) {
        let items = state.basket;
        items = items.map((item) => {
          if (item._id === add._id) {
            return { ...item, count: add.count + 1 };
          }
          return item;
        });
        state.basket = items;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    removeProduct: (state, action) => {
      const add = state.basket.find((item) => item._id === action.payload);
      if (add.count === 1) {
        state.basket = state.basket.filter((item) => item._id !== action.payload);
      } else {
        let items = state.basket;
        items = items.map((item) => {
          if (item._id === add._id) {
            return { ...item, count: add.count - 1 };
          }
          return item;
        });
        state.basket = items;
      }
    },
  },
});
export const { addProduct, removeProduct } = getProductSlice.actions;
export default getProductSlice.reducer;
