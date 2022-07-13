/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import useToggle from '../../../hooks/useToggle';
import { useNavigate } from 'react-router';

import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_USER } from '../../../graphql/mutation/createUser.mutation';
import { CONNECT_USER } from '../../../graphql/query/users.query';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuthContext from '../../../hooks/useAuthContext';
import { RECOVER_PASSWORD_REQUEST } from '../../../graphql/mutation/users.mutation';

function Register({ loginSubtitle, registerSubtitle, isLoginPage, closeModal }) {
  const navigate = useNavigate();
  const { isAuth, loggedIn } = useAuthContext();

  // Vérification si l'utilisateur est déjà connecté (prévention bug)
  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard/user');
      window.scrollTo(0, 0);
      closeModal();
    }
  }, []);

  const [displayLogin, toggleLogin] = useToggle(isLoginPage);

  const [connectUser, { loading: connectUserLoading, error: connectUserError, data: connectUserData }] = useLazyQuery(CONNECT_USER);

  const [createUser, { loading: loadingUserData, error: errorUserData, data: createUserData }] = useMutation(CREATE_USER);

  const [dataInput, setDataInput] = useState({
    email: null,
    password: null,
    verifyPassword: null,
    cgu: false,
  });

  const [errors, setErrors] = useState([]);

  // Suppression des erreurs enregistrées lors du changement de panel
  useEffect(() => {
    setErrors([]);
    setDataInput({
      ...dataInput,
      verifyPassword: null,
      cgu: false,
    });
  }, [displayLogin]);

  const tryRegisterUser = () => {
    const tempErrors = [];

    if (!dataInput.email) tempErrors.push('Email requis !');
    if (!dataInput.password) tempErrors.push('Mot de passe requis !');
    if (!dataInput.verifyPassword) tempErrors.push('Vous devez confirmer votre mot de passe !');
    if (!dataInput.cgu) tempErrors.push("Vous devez accepter les conditions générales d'utilisation !");

    // Si il n'y a pas d'erreur procéder à la connexion
    if (tempErrors.length === 0) {
      if (dataInput.password.toString().length > 8) {
        if (dataInput.password === dataInput.verifyPassword) {
          setErrors([]);
          createUser({
            variables: {
              input: {
                password: dataInput.password,
                email: dataInput.email,
              },
            },
          });
        } else {
          setErrors(['Les mots de passe ne correspondent pas !']);
        }
      } else {
        setErrors(['Entrez un mot de passe de minimum 8 caractères']);
      }
    } else {
      setErrors(tempErrors);
    }

    setDataInput({ ...dataInput, cgu: false });
  };

  const tryConnectUser = () => {
    const tempErrors = [];

    if (!dataInput.email) tempErrors.push('Email requis !');
    if (!dataInput.password) tempErrors.push('Mot de passe requis !');
    if (tempErrors.length === 0) {
      setErrors([]);
      connectUser({ variables: { email: dataInput.email, password: dataInput.password } });
    } else {
      setErrors(tempErrors);
    }
  };

  useEffect(() => {
    // Création de l'utilisateur
    if (createUserData) {
      if (createUserData.createUser.email === dataInput.email) {
        setTimeout(() => {
          loggedIn(createUserData.createUser);
          navigate('/dashboard/user');
          window.scrollTo(0, 0);
          closeModal();
        }, 1000);
      } else {
        setErrors(['Erreur de la création de votre compte, veuillez contacter un administrateur ! (Erreur: 001)']);
      }
    }
    if (errorUserData) {
      setErrors([errorUserData.message]);
    }
    // Connection de l'utilisateur
    else if (connectUserData) {
      if (connectUserData.connectUser.email === dataInput.email) {
        setTimeout(() => {
          loggedIn(connectUserData.connectUser);
          window.scrollTo(0, 0);
          closeModal();
        }, 1000);
      } else {
        setErrors(['Erreur de votre connexion, veuillez contacter un administrateur ! (Erreur: 002)']);
      }
    } else if (connectUserError) {
      setErrors([connectUserError.message]);
    }
  }, [createUserData, errorUserData, connectUserData, connectUserError]);

  const [recoverPasswordRequest] = useMutation(RECOVER_PASSWORD_REQUEST);
  const handleForgerPassword = () => {
    if (dataInput.email) {
      recoverPasswordRequest({ variables: { email: dataInput.email } });
    } else {
      setErrors(...errors, 'Vous devez renseigner votre Email pour reinitialiser votre mot de passe');
    }
  };

  if (!displayLogin)
    // Modal: Inscription
    return (
      <>
        <section>
          <h3 className='text-center underline'>Bienvenu.e.s sur Kiddo</h3>
          {registerSubtitle && <p className='text-kiddoGreen'>{registerSubtitle}</p>}
          <article className='modal-form mt-10'>
            <input
              className='modal-form__input'
              value={dataInput.email ? dataInput.email : ''}
              type='email'
              placeholder='Email*'
              onChange={(e) => {
                setDataInput({ ...dataInput, email: e.target.value });
              }}
            />
            <PasswordInput
              value={dataInput.password}
              placeholder='Mot de passe*'
              onChangeHandler={(e) => {
                setDataInput({ ...dataInput, password: e.target.value });
              }}
            />
            <PasswordInput
              value={dataInput.verifyPassword}
              placeholder='Confirmation du mot de passe*'
              onChangeHandler={(e) => {
                setDataInput({ ...dataInput, verifyPassword: e.target.value });
              }}
            />

            <p className='italic text-sm -mt-2 self-end text-center mr-10'>*Obligatoire</p>
            <div className='flex items-center mt-5'>
              <input
                type='checkbox'
                checked={dataInput.cgu}
                className='modal-form__checkbox w-5 h-5 mr-2 cursor-pointer'
                onChange={(e) => {
                  setDataInput({ ...dataInput, cgu: !dataInput.cgu });
                }}
              />
              <p className='text-sm'>
                J'accepte les{' '}
                <span
                  className='underline text-kiddoOrange cursor-pointer'
                  onClick={() => {
                    closeModal();
                    window.scrollTo(0, 0);
                    navigate('/cgu');
                  }}>
                  conditions générales d'utilisation
                </span>
              </p>
            </div>

            {/* Gestion des messages d'erreurs */}
            <div className='mt-5 flex flex-col'>
              {errors.map((error, index) => (
                <span key={index} className='text-red-600 font-medium text-sm'>
                  *{error}
                </span>
              ))}
            </div>

            <button
              onClick={tryRegisterUser}
              className={
                `bg-kiddoGreen hover:shadow-kiddoGreen shadow-md shadow-kiddoShadow hover:scale-[1.01] transition-all` +
                ((loadingUserData || createUserData) && ` animate-pulse`)
              }>
              {loadingUserData || createUserData ? 'Création de votre compte' : 'Créer votre compte'}
            </button>

            <div>
              <p className='text-md mt-5'>
                Déjà inscrit ?{' '}
                <span className='underline text-kiddoPurple cursor-pointer' onClick={toggleLogin}>
                  Connectez vous !
                </span>
              </p>
            </div>
          </article>
        </section>
      </>
    );
  // Modal: Connexion
  else
    return (
      <>
        <section>
          <h3 className='text-center underline'>Se connecter sur Kiddo</h3>
          {loginSubtitle && <p className='text-kiddoPurple'>{loginSubtitle}</p>}
          <article className='modal-form mt-10'>
            <input
              className='modal-form__input'
              value={dataInput.email ? dataInput.email : ''}
              type='email'
              placeholder='Email*'
              onChange={(e) => {
                setDataInput({ ...dataInput, email: e.target.value });
              }}
            />
            <PasswordInput
              value={dataInput.password}
              placeholder='Mot de passe*'
              onChangeHandler={(e) => {
                setDataInput({ ...dataInput, password: e.target.value });
              }}
            />
            <p className='italic text-sm -mt-2 self-end mr-[3rem] hover:underline cursor-pointer select-none' onClick={() => handleForgerPassword()}>
              Mot de passe oublié ?
            </p>

            {/* Gestion des messages d'erreurs */}
            <div className='mt-5 flex flex-col'>
              {errors.map((error, index) => (
                <span key={index} className='text-red-600 font-medium text-sm'>
                  *{error}
                </span>
              ))}
            </div>

            <button
              onClick={tryConnectUser}
              className={
                `bg-kiddoPurple hover:shadow-kiddoPurple shadow-md shadow-kiddoShadow hover:scale-[1.01] transition-all` +
                ((connectUserLoading || connectUserData) && ` animate-pulse`)
              }>
              {connectUserLoading || connectUserData ? 'Connexion en cours...' : 'Se connecter'}
            </button>

            <div>
              <p className='text-md mt-8'>
                Vous n'avez pas de compte ?{' '}
                <span className='underline text-kiddoGreen cursor-pointer' onClick={toggleLogin}>
                  Inscrivez-vous
                </span>
              </p>
            </div>
          </article>
        </section>
      </>
    );
}

function PasswordInput({ value, placeholder, onChangeHandler }) {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const passwordRef = useRef();

  useEffect(() => {
    passwordRef.current.type = showPassword ? 'text' : 'password';
  }, [showPassword]);

  return (
    <div className='relative'>
      <input
        className='modal-form__input'
        ref={passwordRef}
        type='password'
        value={value ? value : ''}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      {showPassword ? (
        <FaEye className='absolute top-3 left-full -ml-7' onClick={toggleShowPassword} />
      ) : (
        <FaEyeSlash className='absolute top-3 left-full -ml-7' onClick={toggleShowPassword} />
      )}
    </div>
  );
}

export default Register;
