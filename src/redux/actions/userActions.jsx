import { ADD_USER, EDIT_USER, DELETE_USER } from '../keys';

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const editUser = (id, updatedUser) => ({ type: EDIT_USER, payload: { id, updatedUser } });
export const deleteUser = (id) => ({ type: DELETE_USER, payload: id });
