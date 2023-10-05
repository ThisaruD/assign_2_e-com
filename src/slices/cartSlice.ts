import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from '../types/cart';


const initialState: CartState = {
  Cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.Cart.find(
        (item) => item.item === newItem.item
      );

      if (existingItem) {
        // If the item is already in the cart, update its totalQuantity
        existingItem.itemQuantity += 1;
      } else {
        // If it's a new item, add it to the cart with a totalQuantity of 1
        newItem.itemQuantity = 1;
        state.Cart.push(newItem);
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemNameToRemove = action.payload;
      const itemIndexToRemove = state.Cart.findIndex(
        (item) => item.item === itemNameToRemove
      );

      if (itemIndexToRemove !== -1) {
        //remove item from the cart
        state.Cart.splice(itemIndexToRemove, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
