import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavor = createAsyncThunk(//createAsyncThunk() — данный метод предназначен для выполнения асинхронных операций: он принимает тип операции и функцию, возвращающую промис, и генерирует преобразователь операции (thunk), который, в свою очередь, отправляет типы операций pending/fulfilled/rejected в частичный редуктор;
  "favor/fetchFavorItem",
  async () => {
    const { data } = await axios.get(
      "https://63271534ba4a9c47533059e2.mockapi.io/favorite"
    );//console.log(data)
    return data;
  });

  // Запрос на добавление в fav
export const fetchfavPlus = createAsyncThunk(
  "cart/fetchSneakersfavPlus",
  async (obj) => {
     await axios.post(
      "https://63271534ba4a9c47533059e2.mockapi.io/favorite",
      obj                    // добавляем
    );
    const { data } = await axios.get(
      "https://63271534ba4a9c47533059e2.mockapi.io/favorite"
    ); //console.log(data)  // обновляем корзину
    return data; 
  }
);
// Запрос на удаление из fav
export const fetchfavtDel = createAsyncThunk(
  "cart/fetchSneakersfavDel",
  async (id) => {
   await axios.delete(
      `https://63271534ba4a9c47533059e2.mockapi.io/favorite/${String(id)}`
    ); //console.log(data)
    const { data } = await axios.get(
      "https://63271534ba4a9c47533059e2.mockapi.io/favorite"
    ); //console.log(data)  // обновляем корзину
    return data;
  }
);

const favorSlise = createSlice({
  name: "favor",
  initialState: {
   favor: [],
  },

reducers: {
   setBaza(state, action){
      state.baza = action.payload
     }, 
    
  },
extraReducers:{
    [fetchFavor.pending]: (state)=>{
       state.loading = 'pending';
       state.favor=[];  // console.log('  Идёт зарузка')
    },
    [fetchFavor.fulfilled]: (state, action)=>{
       state.loading = 'succeeded';
       state.favor=action.payload; // console.log('  Данные получены')
    },
    [fetchFavor.rejected]: (state)=>{
       state.loading = 'failed';
       state.favor=[];
       console.log('  Ошибка')
    },

    //============ добавление в fav
    [fetchfavPlus.pending]: (state) => {
      state.loading = "pending";
     // state.cart = []; // console.log('  Идёт зарузка')
    },
    [fetchfavPlus.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      console.log('  Корзина пополнена');
     //state.cart = action.payload; 
     state.favor = action.payload;
    },
    [fetchfavPlus.rejected]: (state) => {
      state.loading = "failed";
     // state.cart = [];
      console.log("  Ошибка");
    },
    
    // ===============удаление из fav
    [fetchfavtDel.pending]: (state) => {
      state.loading = "pending";
     // state.cart = []; // console.log('  Идёт зарузка')
    },
    [fetchfavtDel.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      console.log('  Удаление из корзины')
      state.favor = action.payload;
     //state.cart = action.payload; 
    },
    [fetchfavtDel.rejected]: (state) => {
      state.loading = "failed";
     // state.cart = [];
      console.log("  Ошибка удаления из корзины");
    },
    
  },
});
export const {  } = favorSlise.actions;
export default favorSlise.reducer;
