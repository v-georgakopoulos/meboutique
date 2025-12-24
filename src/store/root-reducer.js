import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { favoritesReducer } from "./favorites/favorites.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    favorites: favoritesReducer
})