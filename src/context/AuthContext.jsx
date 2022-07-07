import { createContext, useEffect, useState } from 'react';
import { CHECK_TOKEN } from '../graphql/query/users.query';
import { useLazyQuery } from '@apollo/client';

export const AuthContextSchema = createContext({
  isAuthChecked : null,
  isAuth: null,
  email: null,
  _id: null,
  loggedIn: function () {},
  loggedInOnToken: function () {},
  loggedOut: function () {},
});

function AuthContext(props) {
  const [checkToken] = useLazyQuery(CHECK_TOKEN);

  const [state, setState] = useState({
    isAuthChecked: false,
    isAuth: false,
    email: '',
    _id: '',

    loggedInOnToken: function () {
      checkToken({
        variables: {},
        onCompleted: data => {
          setState(state => ({
            ...state,
            isAuth: true,
            isAuthChecked: true,
            email: data.checkToken.email,
            _id: data.checkToken._id,
          }));
        },
        onError: err => {
          setState(state => ({
            ...state,
            isAuthChecked: true,
            isAuth: false,
            email: '',
            _id: '',
          }));
        },
      });
    },

    loggedIn: function (id, email) {
      setState(state => ({
        ...state,
        isAuthChecked: true,
        isAuth: true,
        email: email,
        _id: id,
      }));
    },

    loggedOut: function () {
      //ajout suppression du cookie
      setState(state => ({
        ...state,
        isAuthChecked: true,
        isAuth: false,
        email: '',
        _id: '',
      }));
    },
  });

  useEffect(() => {
    if(!state.isAuthChecked) {
      state.loggedInOnToken();
    }
  }, [state]);

  return <AuthContextSchema.Provider value={state}>{props.children}</AuthContextSchema.Provider>;
}

export default AuthContext;
