import { ProductAction } from "../../types/redux/allProducts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    id: "",
    description: "",
    type_product: 1,
    labels: "",
    variants: [],
    available_time: []
}

export const productSlice = createSlice({
  name: ProductAction,
  initialState: initialState,
  reducers: {
    allProducts: async (state) => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        state = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allProducts } = productSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default productSlice.reducer;
