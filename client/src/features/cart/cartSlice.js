import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  drinksCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    addTodrinksCart(state, action) {
      state.drinksCart.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    deleteFromDrinksCart(state, action) {
      state.drinksCart = state.drinksCart.filter(
        (item) => item.drinkId !== action.payload
      );
    },
    increaseItemQuantityInCart(state, action) {
      const cartItem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice = cartItem.quantity * cartItem.unitprice;
      }
    },
    increaseItemQuantityInDrinksCart(state, action) {
      const DrinkItem = state.drinksCart.find(
        (item) => item.drinkId === action.payload
      );
      if (DrinkItem) {
        DrinkItem.quantity++;
        DrinkItem.totalPrice = DrinkItem.quantity * DrinkItem.unitprice;
      }
    },
    decreaseItemQuantityInCart(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitprice;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteFromCart(state, action);
    },
    decreaseItemQuantityInDrinksCart(state, action) {
      const DrinkItem = state.drinksCart.find(
        (item) => item.drinkId === action.payload
      );
      if (DrinkItem) {
        DrinkItem.quantity--;
        DrinkItem.totalPrice = DrinkItem.quantity * DrinkItem.unitprice;
        if (DrinkItem.quantity === 0)
          cartSlice.caseReducers.deleteFromDrinksCart(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
      state.drinksCart = [];
    },
  },
});

export const {
  addToCart,
  addTodrinksCart,
  deleteFromCart,
  deleteFromDrinksCart,
  increaseItemQuantityInCart,
  increaseItemQuantityInDrinksCart,
  decreaseItemQuantityInCart,
  decreaseItemQuantityInDrinksCart,
  clearCart,
} = cartSlice.actions;

export const getCart = (store) => store.cart.cart;

export const getDrinks = (store) => store.cart.drinksCart;

export const getTotalCartQuantity = (store) => {
  const cartItems = store.cart.cart.reduce(
    (accum, item) => item.quantity + accum,
    0
  );
  const drinkcartItems = store.cart.drinksCart.reduce(
    (accum, item) => item.quantity + accum,
    0
  );
  const totalCartItems = cartItems + drinkcartItems;
  return totalCartItems;
};

export const getTotalCartPrice = (store) => {
  const cartPrice = store.cart.cart.reduce(
    (accum, item) => item.totalPrice + accum,
    0
  );
  const drinkPrice = store.cart.drinksCart.reduce(
    (accum, drink) => drink.totalPrice + accum,
    0
  );
  const totalCartPrice = cartPrice + drinkPrice;
  return totalCartPrice;
};

export const getCurrentQuantityById = (id) => (store) =>
  store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getCurrentDrinkQuantityById = (id) => (store) =>
  store.cart?.drinksCart.find((drink) => drink.drinkId === id)?.quantity ?? 0;

export default cartSlice.reducer;
