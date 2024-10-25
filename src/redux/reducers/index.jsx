// rootReducer.js
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
