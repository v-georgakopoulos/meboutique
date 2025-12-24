import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const addFavorite = (favorites, product) => {
  if (favorites.some(fav => fav.id === product.id)) return favorites;
  toast.success("Added to favorites");
  return [...favorites, product];
};

const removeFavorite = (favorites, product) => {
  toast.warning("Removed from favorites");
  return favorites.filter(fav => fav.id !== product.id);
};

const toggleFavorite = (favorites, product) => {
  const exists = favorites.some(fav => fav.id === product.id);
  if (exists) {
    toast.warning("Removed from favorites");
    return favorites.filter(fav => fav.id !== product.id);
  } else {
    toast.success("Added to favorites");
    return [...favorites, product];
  }
};

const INITIAL_STATE = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    addToFavorites(state, action) {
      state.favorites = addFavorite(state.favorites, action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = removeFavorite(state.favorites, action.payload);
    },
    toggleFavorites(state, action) {
      state.favorites = toggleFavorite(state.favorites, action.payload);
    },
    resetFavorites(state) {
      state.favorites = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorites,
  resetFavorites,
} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
