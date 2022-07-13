import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
// graphQL
import { useMutation, useLazyQuery } from '@apollo/client';
import { MODIFY_USER_INFO } from '../../../graphql/mutation/users.mutation';
import { GET_BY_ID } from '../../../graphql/query/users.query';
// children pics
import childProfil from '../../../assets/images/blank_child_profil.svg';
import boyProfil from '../../../assets/images/profil_male_child.svg';
import girlProfil from '../../../assets/images/profil_female_child.svg';
// icons
import { FaTimesCircle } from 'react-icons/fa';
//
import { CATEGORIES } from '../../../utils/constants/categoryList';
import useAuthContext from './../../../hooks/useAuthContext';
import './user-info.css';
// components
import Etiquette from '../../../components/shared/Etiquette';
import Button from '../../../components/shared/Button';

// phone input
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const UserInfo = () => {
  const navigate = useNavigate();
  const nbChildren = 1;
  const context = useAuthContext();
  // console.log('context', context);
  const [user, setUser] = useState({
    gender: '',
    first_name: '',
    last_name: '',
    pseudo: '',
    phone: '+33000000000',
    email: '',
    birthdate: null,
    adress: {
      city: '',
      zip_code: '00000',
      adress_line: '',
      adress_line_2: '',
    },

    description: '',
    children: nbChildren.length > 0 ? Array(nbChildren).fill({}) : [],
  });
  // fonction qui récupère les values du form
  const handleChange = (e) => {
    // console.log('event', e.target);
    if (e.target.name === 'adress_line' || e.target.name === 'zip_code' || e.target.name === 'city' || e.target.name === 'adress_line_2') {
      setUser((user) => {
        return {
          ...user,
          adress: {
            ...user.adress,
            [e.target.name]: e.target.value,
          },
        };
      });
    } else {
      setUser((user) => {
        return { ...user, [e.target.name]: e.target.value };
      });
    }
  };
  // fonction qui met à jour l'objet children et ses valeurs
  const handleChangeChildren = (value, index, key) => {
    let children = [...user.children];
    children[index] = {
      ...children[index],
      [key]: value,
    };
    setUser((user) => ({
      ...user,
      children,
    }));
  };
  //fonctions qui ajoute/supprime un enfant au click button
  const handleAddChild = () => {
    setUser((user) => ({ ...user, children: [...user.children, {}] }));
  };
  const handleRemoveChild = (i) => {
    let updateNbChildren = [...user.children];
    updateNbChildren.splice(i, 1);
    setUser((user) => {
      return { ...user, children: updateNbChildren };
    });
  };

  const [fetchData, { loading, data }] = useLazyQuery(GET_BY_ID);

  useEffect(() => {
    if (context._id !== '') {
      fetchData({
        variables: {
          id: context._id,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);

  useEffect(() => {
    console.log('User data : ', data);
    if (data) setUser(data.getUserById)
  }, [data]);

  // détermine la photo de profil enfant
  const getChildPic = (i) => {
    if (user.children[i].gender === 'boy') {
      return boyProfil;
    } else if (user.children[i].gender === 'girl') {
      return girlProfil;
    } else {
      return childProfil;
    }
  };

  const [modifyUserInfo] = useMutation(MODIFY_USER_INFO);
  if (loading) {
    return <div>Chargement en cours</div>;
  }

  // Roots
  const roots = [
    {
      title: 'Acceuil',
      path: '../',
      isSelected: false,
    },
    {
      title: 'Profil',
      path: './user',
      isSelected: true,
    },
    {
      title: 'Mon tableau de bord',
      path: '../dashboard',
      isSelected: false,
    },
  ];

  const handleRootClick = (isSelected, path) => {
    if (!isSelected) navigate(path);
  };

  return (
    <>
      <section className='generic-container min-h-full pt-32'>
        <div className='flex mb-10 text-sm'>
          {roots.map((item, index) => (
            <div className='flex' key={index}>
              <p
                onClick={() => handleRootClick(item.isSelected, item.path)}
                className={`cursor-pointer hover:underline select-none ` + (item.isSelected && 'underline font-medium cursor-default')}>
                {item.title}
              </p>
              {index < roots.length - 1 && <p className='mx-2'> {'>'} </p>}
            </div>
          ))}
        </div>

        <h2 className='text-center mb-10'>Votre compte</h2>

        <section className='grid grid-cols-3 mb-8'>
          <article className=' flex flex-col items-center  '>
            <p className='border-2 p-6 rounded-xl'>Mon compte</p>
          </article>
          {/* all form inputs */}
          <div className='col-span-2'>
            <article className='border-2 rounded-xl p-5 col-span-2 '>
              {/* checkbox form */}
              <div className='flex items-center justify-around p-5 '>
                <label className='userinfo__radio-container'>
                  Homme
                  <input name='gender' type='radio' value='male' checked={user.gender === 'male'} onChange={handleChange} />
                  <span className='checkmark'></span>
                </label>
                <label className='userinfo__radio-container'>
                  Femme
                  <input name='gender' type='radio' checked={user.gender === 'female'} value='female' onChange={handleChange} />
                  <span className='checkmark'></span>
                </label>
                <label className='userinfo__radio-container'>
                  Autres
                  <input name='gender' checked={user.gender === 'other'} type='radio' value='other' onChange={handleChange} />
                  <span className='checkmark'></span>
                </label>
              </div>
              {/* input form */}
              <div className='flex flex-col'>
                <input
                  value={user && user.first_name}
                  className='rounded-xl mb-2 border-gray-200'
                  name='first_name'
                  type='text'
                  placeholder='Prénom'
                  onChange={handleChange}
                />
                <input
                  value={user && user.last_name}
                  className='rounded-xl mb-2 border-gray-200'
                  name='last_name'
                  type='text'
                  placeholder='Nom'
                  onChange={handleChange}
                />
                <input
                  value={user && user.pseudo}
                  name='pseudo'
                  className='rounded-xl mb-2 border-gray-200'
                  type='text'
                  placeholder='Pseudo'
                  onChange={handleChange}
                />
                <PhoneInput
                  international
                  value={user && user.phone}
                  defaultCountry='FR'
                  className='rounded-xl mb-2 border-gray-200'
                  placeholder='Téléphone'
                  onChange={(value) => {
                    setUser((user) => ({ ...user, phone: value.toString() }));
                  }}
                />
                <input
                  value={user && user.email}
                  name='email'
                  className='rounded-xl mb-2 border-gray-200'
                  type='text'
                  placeholder='Email'
                  onChange={handleChange}
                />
                <label htmlFor='birthdate'>
                  <p>Date de naissance :</p>
                </label>
                <input
                  value={user && user.birthdate}
                  name='birthdate'
                  className='rounded-xl mb-2 border-gray-200'
                  type='date'
                  placeholder='Date de naissance'
                  onChange={handleChange}
                />
                <input
                  value={user && user.adress.adress_line}
                  name='adress_line'
                  className='rounded-xl mb-2 border-gray-200'
                  type='text'
                  placeholder='adresse complète'
                  onChange={handleChange}
                />
                <div>
                  <input
                    value={user && user.adress.zip_code}
                    name='zip_code'
                    className='rounded-xl mb-2 border-gray-200'
                    type='text'
                    placeholder='Code postal'
                    onChange={handleChange}
                  />
                  <input
                    value={user && user.adress.city}
                    name='city'
                    className='rounded-xl mb-2 border-gray-200'
                    type='text'
                    placeholder='Ville'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* presentation */}
        <section className='border-2 rounded-xl h-40 p-5'>
          <h2>Presentation</h2>
          <input
            value={user && user.description}
            name='description'
            className='rounded-xl mb-2 border-gray-200 w-full'
            type='text'
            placeholder='Présentez-vous'
            onChange={handleChange}
          />
        </section>
        {/* childs input */}
        <section className='rounded-xl mb-2 border-gray-200'>
          <h2 className='mb-4 border-b-2 pt-10'>Mes enfants</h2>
          <div className='flex justify-around pt-4'>
            {user.children.map((e, i) => (
              <article key={i} className='child-card rounded-xl flex-1 flex border p-8 ml-4  bg-zinc-100'>
                {user.children.length > 1 && (
                  <button
                    className='remove-child-button'
                    onClick={() => {
                      handleRemoveChild(i);
                    }}>
                    <FaTimesCircle />
                  </button>
                )}

                <div className='rounded-full p-4 flex justify-center items-center'>
                  <img src={getChildPic(i)} alt='child-profil' />
                </div>
                <div className='pl-3'>
                  <input
                    value={user.children[i].name}
                    name={`children[${i}].name`}
                    className='rounded-xl mb-2 border-gray-200 w-full'
                    type='text'
                    placeholder='Prénom'
                    onChange={(e) => handleChangeChildren(e.currentTarget.value, i, 'name')}
                  />
                  <select
                    name={`children[${i}].gender`}
                    className='rounded-xl mb-2 border-gray-200 w-full'
                    onChange={(e) => handleChangeChildren(e.currentTarget.value, i, 'gender')}
                    value={user.children[i].gender}>
                    <option defaultValue>Précicez le genre</option>
                    <option value='boy'>Garçon</option>
                    <option value='girl'>Fille</option>
                    <option value='other'>Autre</option>
                  </select>
                  <label htmlFor={`children[${i}].age`}>
                    <p> date de naissance :</p>
                  </label>
                  <input
                    placeholder='date de naissance'
                    name={`children[${i}].age`}
                    value={user.children[i].age}
                    className='rounded-xl mb-2 border-gray-200 w-full'
                    type='date'
                    onChange={(e) => handleChangeChildren(e.currentTarget.value, i, 'age')}
                  />
                </div>
              </article>
            ))}
          </div>
          <div className='flex justify-center p-20'>
            <Button onClick={handleAddChild}>ajouter un enfant </Button>
          </div>

          <article>
            <p>
              <input type='checkbox' /> J'autorise un autre membre à amener mes enfants aux activités
            </p>
            <p className='pt-8 flex justify-around'>
              Saisissez le nom et l'adresse du membre Kiddo :
              <input type='text' className='rounded-xl mb-2 border-gray-200' placeholder='Nom' />
              <input type='text' className='rounded-xl mb-2 border-gray-200' placeholder='Adresse' />
            </p>
          </article>
        </section>
        <section>
          <h2>catégories d'activités recherchées</h2>
          <article className='grid grid-cols-3 gap-5 p-8'>
            {CATEGORIES.map((etiquette, index) => {
              return <Etiquette key={index} category={etiquette.type} name={etiquette.name} backgroundColor={etiquette.backgroundColor} />;
            })}
          </article>
          <div className='flex justify-center p-10'>
            <Button
              onClick={() => {
                modifyUserInfo({
                  variables: {
                    id: context._id,
                    input: {
                      gender: user.gender,
                      first_name: user.first_name,
                      last_name: user.last_name,
                      pseudo: user.pseudo,
                      phone: user.phone,
                      email: user.email,
                      birthdate: user.birthdate,
                      adress: user.adress,
                      description: user.description,
                      children: user.children,
                    },
                  },
                });
              }}>
              Valider
            </Button>
          </div>
        </section>
      </section>
    </>
  );
};

export default UserInfo;
