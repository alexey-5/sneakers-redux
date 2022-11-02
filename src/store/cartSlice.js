import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSneakers = createAsyncThunk(
  //createAsyncThunk() — данный метод предназначен для выполнения асинхронных операций: он принимает тип операции и функцию, возвращающую промис, и генерирует преобразователь операции (thunk), который, в свою очередь, отправляет типы операций pending/fulfilled/rejected в частичный редуктор;
  "cart/fetchSneakersItem",
  async () => {
    const { data } = await axios.get(
      "https://63271534ba4a9c47533059e2.mockapi.io/item"
    ); //console.log(data)
    return data;
  }
);
// Запрос на загрузку корзины
export const fetchCart = createAsyncThunk(
  "cart/fetchSneakersCart",
  async () => {
    const { data } = await axios.get(
      "https://63271534ba4a9c47533059e2.mockapi.io/cart"
    ); //console.log(data)
    return data;
  }
);
// Запрос на добавление в корзину
export const fetchCartPlus = createAsyncThunk(
  "cart/fetchSneakersCartPlus",
  async (obj) => {
     await axios.post(
      "https://63271534ba4a9c47533059e2.mockapi.io/cart",
      obj                    // добавляем
    );
    const { data } = await axios.get(
      "https://63271534ba4a9c47533059e2.mockapi.io/cart"
    ); //console.log(data)  // обновляем корзину
    return data; 
  }
);
// Запрос на удаление из корзины
export const fetchCartDel = createAsyncThunk(
  "cart/fetchSneakersCartDel",
  async (id) => {
   await axios.delete(
      `https://63271534ba4a9c47533059e2.mockapi.io/cart/${String(id)}`
    ); //console.log(data)
    const { data } = await axios.get(
      "https://63271534ba4a9c47533059e2.mockapi.io/cart"
    ); //console.log(data)  // обновляем корзину
    return data;
  }
);

const cartSlise = createSlice({
  name: "cart",
  initialState: {
    baza: [],
    cart: [],
    // sum: json.reduce((akk, elem) => akk + elem.price * elem.count, 0),
  },

  reducers: {
    setBaza(state, action) {
      state.baza = action.payload;
    },
  },
  extraReducers: {
    // ======= получение базы
    [fetchSneakers.pending]: (state) => {
      state.loading = "pending";
      state.baza = []; // console.log('  Идёт зарузка')
    },
    [fetchSneakers.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      state.baza = action.payload; // console.log('  Данные получены')
    },
    [fetchSneakers.rejected]: (state) => {
      state.loading = "failed";
      state.baza = [];
      console.log("  Ошибка");
    },
    // ======= получение корзины
    [fetchCart.pending]: (state) => {
      state.loading = "pending";
      //state.cart = []; // console.log('  Идёт зарузка')
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      state.cart = action.payload; // console.log('  Данные получены')
    },
    [fetchCart.rejected]: (state) => {
      state.loading = "failed";
      state.cart = [];
      console.log("  Ошибка");
    },
    //============ добавление в корзину
    [fetchCartPlus.pending]: (state) => {
      state.loading = "pending";
     // state.cart = []; // console.log('  Идёт зарузка')
    },
    [fetchCartPlus.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      console.log('  Корзина пополнена');
     //state.cart = action.payload; 
     state.cart = action.payload;
    },
    [fetchCartPlus.rejected]: (state) => {
      state.loading = "failed";
     // state.cart = [];
      console.log("  Ошибка");
    },
    // ===============удаление из корзины
    [fetchCartDel.pending]: (state) => {
      state.loading = "pending";
     // state.cart = []; // console.log('  Идёт зарузка')
    },
    [fetchCartDel.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      console.log('  Удаление из корзины')
      state.cart = action.payload;
     //state.cart = action.payload; 
    },
    [fetchCartDel.rejected]: (state) => {
      state.loading = "failed";
     // state.cart = [];
      console.log("  Ошибка удаления из корзины");
    },
  },
});
export const {} = cartSlise.actions;
export default cartSlise.reducer;
