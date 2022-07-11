import { createContext, useEffect, useState } from 'react';
import { CHECK_TOKEN, DISCONNECT_USER, GET_BY_ID } from '../graphql/query/users.query';
import { useLazyQuery } from '@apollo/client';

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

  // Méthoge de récupération des données utilisateurs.
  const [getUser] = useLazyQuery(GET_BY_ID);

  const [state, setState] = useState({
    isAuthChecked: false,
    isAuth: false,
    email: '',
    _id: '',

    loggedInOnToken: () => loggedInOnTokenFunction(),
    loggedIn: (user) => loggedInFunction(user),
    loggedOut: (_id) => loggedOutFunction(_id),
  });

  // Enregistrement de l'utilisateur depuis son Token JWT
  function loggedInOnTokenFunction() {
    checkToken({
      variables: {},
      onCompleted: (data) => {
        loggedInFunction(data.checkToken);
      },
      onError: (error) => {
        console.error('AuthContext - LoggedOnToken : ', error);
        defineState(true, false, '', '');
      },
    });
  }

  // Enregistrement de l'utilisateur depuis la modale de connexion
  function loggedInFunction(user) {
    defineState(true, true, user.email, user._id);
  }

  // Déconnexion de l'utilisateur depuis la modale
  function loggedOutFunction(_id) {
    disconnectUser({ variables: { id: _id } });

    defineState(false, false, '', '');

    localStorage.removeItem('kiddo-user');
  }

  // Utilitaire pour définir le statut du contexte
  const defineState = (inputAuthChecked, inputAuth, inputEmail, inputId) => {
    setState((state) => ({
      ...state,
      isAuthChecked: inputAuthChecked,
      isAuth: inputAuth,
      email: inputEmail,
      _id: inputId,
    }));
  };

  useEffect(() => {
    console.log('AuthContext State : ', state);

    /*if (state !== getLocalUser()) {
      localStorage.setItem('kiddo-user', JSON.stringify(state));
      console.log('AuthContext State => Save to local : ', getLocalUser());
    }*/

    if (!state.isAuthChecked) {
      state.loggedInOnToken();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const getLocalUser = () => JSON.parse(localStorage.getItem('kiddo-user'));

  return <AuthContextSchema.Provider value={state}>{props.children}</AuthContextSchema.Provider>;
}

export default AuthContext;
