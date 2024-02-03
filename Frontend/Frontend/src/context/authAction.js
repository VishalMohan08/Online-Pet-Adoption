const initialState = {
    authToken: localStorage.getItem('authToken') || null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AUTH_TOKEN':
        return {
          ...state,
          authToken: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;