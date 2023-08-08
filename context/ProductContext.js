import {createContext, useReducer} from 'react';
import reducer, {initialState} from './ProductReducer';

export const ProductContext = createContext(initialState);

function ProductProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{state, dispatch}}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
