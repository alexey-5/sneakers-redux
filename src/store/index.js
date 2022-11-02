import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice'
import favor from './favorSlice'

export default configureStore({
   reducer:{
      cart,
      favor,
   }
})