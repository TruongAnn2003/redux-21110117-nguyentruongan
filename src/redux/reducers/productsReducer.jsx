import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../keys';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload], // Add new product to products array
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id), // Remove product from products array
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload.data } : product,
        ), // Update product in products array
      };

    default:
      return state; // Return current state if no action matches
  }
};
export default productsReducer;
