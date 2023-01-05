import { configureStore } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import counterReducer from '../redux-functionality/slices/counterSlice'
import productsReducer from '../redux-functionality/slices/products'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
