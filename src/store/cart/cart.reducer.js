import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};


const INITIAL_STATE = {
    cartItems:[]
}

export const cartSlice = createSlice({
    name: "cart",
    initialState:INITIAL_STATE,
    reducers: {
        addItemToCart(state,action) {
            state.cartItems = addCartItem(state.cartItems, action.payload)
        },
        removeItemFromCart(state,action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload)
        },
        clearItemFromCart(state,action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload)
        },
        clearCart(state) {
            state.cartItems = []
        }
    }
})


export const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    clearCart
} = cartSlice.actions

export const cartReducer = cartSlice.reducer