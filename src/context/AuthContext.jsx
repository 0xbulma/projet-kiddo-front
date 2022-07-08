import { createContext, useEffect, useState } from 'react';
import { CHECK_TOKEN } from '../graphql/query/users.query';
import { useLazyQuery } from '@apollo/client';

export const AuthContextSchema = createContext({
  isAuthChecked: null,
  isAuth: null,
  email: null,
  gender: null,
  isFemale: false,
  isOtherGender: false,
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
    gender: null,
    isFemale: false,
    isOtherGender: false,

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
            gender: data.gender,
            isFemale: data.gender?.toLowerCase() === 'female',
            isOtherGender: data.gender?.toLowarCase() !== 'female' && data.gender?.toLowerCase() !== 'male',
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
        gender: user.gender,
        isFemale: user.gender?.toLowerCase() === 'female',
        isOtherGender: user.gender?.toLowarCase() !== 'female' && user.gender?.toLowerCase() !== 'male',
      }));
    },

    loggedOut: function () {
      //Request logout delete cookie
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
    if (!state.isAuthChecked) {
      state.loggedInOnToken();
    }
  }, [state]);

  return <AuthContextSchema.Provider value={state}>{props.children}</AuthContextSchema.Provider>;
}

export default AuthContext;
