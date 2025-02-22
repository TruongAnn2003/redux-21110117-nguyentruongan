// src/redux/reducers/userReducer.js
import { ADD_USER, EDIT_USER, DELETE_USER } from '../keys';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload.updatedUser } : user,
        ),
      };
    case DELETE_USER:
      return { ...state, users: state.users.filter((user) => user.id !== action.payload) };
    default:
      return state;
  }
};

export default userReducer;
