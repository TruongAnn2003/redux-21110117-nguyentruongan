// src/redux/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../keys';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      } else {
        updatedItems = [...state.items, { ...product, quantity }];
      }

      const totalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalAmount,
      };
    }
    case REMOVE_FROM_CART: {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      const totalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalAmount,
      };
    }
    case UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      const updatedItems = state.items.map((item) => (item.id === productId ? { ...item, quantity } : item));
      const totalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalAmount,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
