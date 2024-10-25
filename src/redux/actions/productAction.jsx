import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../keys';

export const addAction = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteAction = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { id: productId },
});

export const editAction = (productId, updatedData) => ({
  type: EDIT_PRODUCT,
  payload: { id: productId, data: updatedData },
});
