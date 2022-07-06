import { createContext, useState } from 'react';

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
      setState({
        isAuth: true,
        email: email,
        _id: id,
      });
    },

    loggedOut: function () {
      setState({ isAuth: false, email: '', _id: '' });
    },
  });

  return <AuthContextSchema.Provider value={state}>{props.children}</AuthContextSchema.Provider>;
}

export default AuthContext;
