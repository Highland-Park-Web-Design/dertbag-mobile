import {createContext, useReducer} from 'react';
import reducer, {initialState} from './RecreationReducer';

export const RecreationContext = createContext(initialState);

function RecreationProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RecreationContext.Provider value={{state, dispatch}}>
      {children}
    </RecreationContext.Provider>
  );
}

export default RecreationProvider;
