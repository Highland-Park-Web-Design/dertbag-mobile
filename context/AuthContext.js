import {createContext, useReducer} from 'react';
import reducer, {initialState} from './AuthReducer';

export const UserContext = createContext(initialState);

function UserProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
