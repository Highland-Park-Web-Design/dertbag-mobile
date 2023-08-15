export const initialState = {
  id: '',
};

export default function reducer(state, action) {
  const {type, payload} = action;
  switch (type) {
    case 'SET_RECREATION_ID':
      return {
        ...state,
        id: payload,
      };
    default:
      throw new Error();
  }
}
