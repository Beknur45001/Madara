import { configureStore } from "@reduxjs/toolkit";
import productReduser from "./products/productSlise"


export const myStore = configureStore({
    reducer:{
        product: productReduser,
    }
})