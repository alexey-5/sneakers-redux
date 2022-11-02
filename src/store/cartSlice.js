import { createSlice } from "@reduxjs/toolkit";

const cartSlise = createSlice({
  name: "cart",
  initialState: {
   baza: [],
   // sum: json.reduce((akk, elem) => akk + elem.price * elem.count, 0),
  },

  reducers: {
   setBaza(state, action){
      state.baza = action.payload
     },
    
  },
});
export const { setBaza } = cartSlise.actions;
export default cartSlise.reducer;
