import { createSlice } from "@reduxjs/toolkit";
import { SHOP_DATA } from "../../data/shop-data";

const INITIAL_STATE = {
    products: SHOP_DATA,
    searchTerm: "",
}


export const productsSlice = createSlice({
    name:"products",
    initialState: INITIAL_STATE,
    reducers: {
        setSearchTerm(state,action){
            state.searchTerm = action.payload
        }
    }
})


export const {setSearchTerm} = productsSlice.actions

export const productsReducer = productsSlice.reducer