import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  user: {
    username: localStorage.getItem('username') || null,
  },
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: { username: action.payload } };
    case 'LOGOUT':
      return { user: { username: null } };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
