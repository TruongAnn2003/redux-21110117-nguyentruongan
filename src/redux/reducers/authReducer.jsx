import { LOGIN, LOGOUT } from '../keys';

const initialState = {
  isLoggedIn: false,
  user: null,
  message: '', // Thêm trường message để lưu thông báo
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        message: `${action.payload.email}, Logged in successfully!`, // Thông báo đăng nhập thành công
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: 'Logged out successfully!', // Thông báo đăng xuất thành công
      };
    default:
      return state;
  }
};

export default authReducer;
