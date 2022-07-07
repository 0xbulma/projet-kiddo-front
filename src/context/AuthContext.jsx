import { createContext, useEffect, useState } from 'react';

export const AuthContextSchema = createContext({
  isAuth: null,
  email: null,
  _id: null,
  loggedIn: function () {},
  loggedOut: function () {},
});

function AuthContext(props) {
  const [state, setState] = useState({
    isAuth: false,
    email: '',
    _id: '',

    loggedIn: function (id, email) {
      setState(state => ({
        ...state,
        isAuth: true,
        email: email,
        _id: id,
      }));
    },
  
    loggedOut: function () {
      //ajout suppression du cookie
      setState(state => ({
        ...state,
        isAuth: false,
        email: '',
        _id: '',
      }));
    },
  });

  useEffect(()=>{
    console.log('isAuth:', state.isAuth)
  },[state.isAuth])

  return <AuthContextSchema.Provider value={state}>{props.children}</AuthContextSchema.Provider>;
}

export default AuthContext;
