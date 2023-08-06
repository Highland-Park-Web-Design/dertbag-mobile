export const initialState = {
  id: '',
};

export default function reducer(state, action) {
  const {type, payload} = action;
  switch (type) {
    case 'SET_PRODUCT_ID':
      return {
        ...state,
        id: payload.id,
      };
    default:
      throw new Error();
  }
}
