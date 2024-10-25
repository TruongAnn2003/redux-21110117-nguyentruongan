import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../keys';

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);

    case EDIT_PRODUCT:
      return state.map((product) =>
        product.id === action.payload.id ? { ...product, ...action.payload.data } : product,
      );

    default:
      return state;
  }
};
