import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./createSlice";

const appStore = configureStore({
    reducer: {
        //we can also add others reducers also
        cart: cartReducer,
    },

});

export default appStore;