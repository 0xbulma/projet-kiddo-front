import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/shared/Button';
import './user-info.css';
import childProfil from '../../assets/images/blank_child_profil.svg';
import boyProfil from '../../assets/images/profil_male_child.svg';
import girlProfil from '../../assets/images/profil_female_child.svg';
import { FaTimesCircle } from 'react-icons/fa';
import { CATEGORIES } from '../../utils/constants/categoryList';
import Etiquette from '../../components/shared/Etiquette';
import { useMutation } from '@apollo/client';
import { MODIFY_USER_INFO } from '../../graphql/mutation/users.mutation';
import useAuthContext from './../../hooks/useAuthContext';
const UserInfo = () => {
  const context = useAuthContext();

  // fonction qui récupère les values du form
  const handleChange = (e) => {
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
    // console.log('remove log ------>', i);
    let updateNbChildren = [...user.children];
    updateNbChildren.splice(i, 1);
    setUser((user) => {
      return { ...user, children: updateNbChildren };
    });
  };
  const nbChildren = 1;

  const [user, setUser] = useState({
    gender: '',
    first_name: '',
    last_name: '',
    pseudo: '',
    phone: '',
    email: '',
    birthdate: '',
    adress: {
      city: '',
      zip_code: '',
      adress_line: '',
      adress_line_2: '',
    },

    description: '',
    children: Array(nbChildren).fill({}),
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

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

  const [modifyUserInfo, { data, error }] = useMutation(MODIFY_USER_INFO);
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }

  return (
    <>
      <section className='container-user  min-h-full pt-28'>
        <h1 className='text-center'>UserInfo</h1>
        <section className='grid grid-cols-3 mb-8'>
          <article className=' flex flex-col items-center  '>
            <p className='border-2 p-6 rounded-xl'>Mon compte</p>
          </article>
          {/* all form inputs */}
          <div className='col-span-2'>
            <article className='border-2 rounded-xl p-5 col-span-2 '>
              {/* checkbox form */}
              <div className='flex items-center'>
                <p className='flex justify-around p-5'>
                  Je suis
                  <label className='container'>
                    Homme
                    <input name='gender' type='radio' value='male' onChange={handleChange} />
                    <span className='checkmark'></span>
                  </label>
                  <label className='container'>
                    Femme
                    <input name='gender' type='radio' value='female' onChange={handleChange} />
                    <span className='checkmark'></span>
                  </label>
                  <label className='container'>
                    Autres
                    <input name='gender' type='radio' value='other' onChange={handleChange} />
                    <span className='checkmark'></span>
                  </label>
                </p>
              </div>
              {/* input form */}
              <div className='flex flex-col'>
                <input className='rounded-xl mb-2 border-gray-200' name='first_name' type='text' placeholder='Prénom' onChange={handleChange} />
                <input className='rounded-xl mb-2 border-gray-200' name='last_name' type='text' placeholder='Nom' onChange={handleChange} />
                <input name='pseudo' className='rounded-xl mb-2 border-gray-200' type='text' placeholder='Pseudo' onChange={handleChange} />
                <input name='phone' className='rounded-xl mb-2 border-gray-200' type='text' placeholder='Téléphone' onChange={handleChange} />
                <input name='email' className='rounded-xl mb-2 border-gray-200' type='text' placeholder='Email' onChange={handleChange} />
                <label htmlFor='birthdate'>
                  <p>Date de naissance :</p>
                </label>
                <input
                  name='birthdate'
                  className='rounded-xl mb-2 border-gray-200'
                  type='date'
                  placeholder='Date de naissance'
                  onChange={handleChange}
                />
                <input
                  name='adress_line'
                  className='rounded-xl mb-2 border-gray-200'
                  type='text'
                  placeholder='adresse complète'
                  onChange={handleChange}
                />
                <div>
                  <input name='zip_code' className='rounded-xl mb-2 border-gray-200' type='text' placeholder='Code postal' onChange={handleChange} />
                  <input name='city' className='rounded-xl mb-2 border-gray-200' type='text' placeholder='Ville' onChange={handleChange} />
                  {/* <input
                    name="country"
                    className="rounded-xl mb-2 border-gray-200"
                    type="text"
                    placeholder="pays"
                    onChange={handleChange}
                  /> */}
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* presentation */}
        <section className='border-2 rounded-xl h-40 p-5'>
          <h2>Presentation</h2>
          <input
            name='description'
            className='rounded-xl mb-2 border-gray-200 w-full'
            type='text'
            placeholder='Présentez-vous'
            onChange={handleChange}
          />
        </section>
        {/* childs input */}
        <section className='container-user'>
          <h2 className='mb-4 border-b-2'>Mes enfants</h2>
          <div className='flex justify-around pt-4'>
            {user.children.map((e, i) => (
              <article key={i} className='child-card flex-1 flex border p-8'>
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
                console.log({
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
                });
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
