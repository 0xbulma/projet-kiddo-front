import { createContext, useEffect, useState } from 'react';
import { CHECK_TOKEN, DISCONNECT_USER } from '../graphql/query/users.query';
import { useLazyQuery, useQuery } from '@apollo/client';

export const AuthContextSchema = createContext({
  isAuthChecked: null,
  isAuth: null,
  email: null,
  _id: null,
  loggedIn: function () {},
  loggedInOnToken: function () {},
  loggedOut: function () {},
});

function AuthContext(props) {
  const [checkToken] = useLazyQuery(CHECK_TOKEN);

  // Requête GraphQl obligatoire pour la suppression du token en HTTP Only
  const [disconnectUser] = useLazyQuery(DISCONNECT_USER);

  const [state, setState] = useState({
    isAuthChecked: false,
    isAuth: false,
    email: '',
    _id: '',

    loggedInOnToken: function () {
      checkToken({
        variables: {},
        onCompleted: (data) => {
          setState((state) => ({
            ...state,
            isAuth: true,
            isAuthChecked: true,
            email: data.checkToken.email,
            _id: data.checkToken._id,
          }));
        },
        onError: (err) => {
          setState((state) => ({
            ...state,
            isAuthChecked: true,
            isAuth: false,
            email: '',
            _id: '',
          }));
        },
      });
    },

    loggedIn: function (user) {
      setState((state) => ({
        ...state,
        isAuthChecked: true,
        isAuth: true,
        email: user.email,
        _id: user._id,
      }));
    },

    loggedOut: function (_id) {
      disconnectUser({ variables: { id: _id } });
      setState((state) => ({
        ...state,
        isAuthChecked: true,
        isAuth: false,
        email: '',
        _id: '',
      }));
    },
  });

  useEffect(() => {
    console.log('AuthContext State : ', state);
    if (!state.isAuthChecked) {
      state.loggedInOnToken();
    }
  }, [state]);

  return <AuthContextSchema.Provider value={state}>{props.children}</AuthContextSchema.Provider>;
}

export default AuthContext;
