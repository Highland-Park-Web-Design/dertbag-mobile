export const initialState = {
  isRegisterd: false,
  isLoggedIn: false,
};

export default function reducer(state, action) {
  const {type, payload} = action;
  switch (type) {
    case 'SET_LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        isRegisterd: payload,
      };
    case 'CLEAR_LOGIN':
      return {
        ...state,
        isLoggedIn: false,
        isRegisterd: payload,
      };
    default:
      throw new Error();
  }
}
