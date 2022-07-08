import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/shared/Button';
import './user-info.css';
import childProfil from '../../assets/images/blank_child_profil.svg';
import boyProfil from '../../assets/images/profil_male_child.svg';
import girlProfil from '../../assets/images/profil_female_child.svg';

const UserInfo = () => {
  const handleChange = (e) => {
    setUser((user) => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };
  const handleChangeChildren = (e, index, key) => {
    let children = [...user.children];
    children[index] = {
      ...children[index],
      [key]: e.target.value,
    };
    setUser((user) => ({
      ...user,
      children,
    }));
  };
  const handleAddChild = () => {
    // let addChildOnClick = [...user.children, {}]; // [{firstname: "...", birthday: "", gender: ""}, {firstname: "...", birthday: "", gender: ""}]
    setUser((user) => ({ ...user, children: [...user.children, {}] }));
  };
  const handleRemoveChild = (i) => {
    console.log('remove log ------>', i);
    let updateNbChildren = [...user.children];
    updateNbChildren.splice(i, 1);
    setUser((user) => {
      return { ...user, children: updateNbChildren };
    });
  };
  const nbChildren = 2;
  const [user, setUser] = useState({
    gender: '',
    firstname: '',
    lastname: '',
    pseudo: '',
    phone: '',
    email: '',
    birthdate: '',
    adress: '',
    zipcode: '',
    city: '',
    country: '',
    description: '',
    children: Array(nbChildren).fill({}),
  });
  useEffect(() => {
    console.log(user);
  }, [user]);

  const getChildPic = (i) => {
    if (user.children[i].gender === 'boy') {
      return boyProfil;
    } else if (user.children[i].gender === 'girl') {
      return girlProfil;
    } else {
      return childProfil;
    }
  };

  return (
    <>
      <section className="container-user">
        <h1 className="text-center">UserInfo</h1>
        <section className="grid grid-cols-3 mb-8">
          <article className=" flex flex-col items-center  ">
            <p className="border-2 p-6 rounded-xl">Mon compte</p>
          </article>
          {/* all form inputs */}
          <div className="col-span-2">
            <article className="border-2 rounded-xl p-5 col-span-2 ">
              {/* checkbox form */}
              <div className="flex items-center">
                <p className="flex justify-around p-5">
                  Je suis
                  <label className="container">
                    Homme
                    <input
                      name="gender"
                      type="radio"
                      value="male"
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Femme
                    <input
                      name="gender"
                      type="radio"
                      value="female"
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Autres
                    <input
                      name="gender"
                      type="radio"
                      value="other"
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </p>
              </div>
              {/* input form */}
              <div className="flex flex-col">
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  name="firstname"
                  type="text"
                  placeholder="Prénom"
                  onChange={handleChange}
                />
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  name="lastname"
                  type="text"
                  placeholder="Nom"
                  onChange={handleChange}
                />
                <input
                  name="pseudo"
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Pseudo"
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Téléphone"
                  onChange={handleChange}
                />
                <input
                  name="email"
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  name="birthdate"
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Date de naissance"
                  onChange={handleChange}
                />
                <input
                  name="adress"
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="adresse complète"
                  onChange={handleChange}
                />
                <div>
                  <input
                    name="zipcode"
                    className="rounded-xl mb-2 border-gray-200"
                    type="text"
                    placeholder="Code postal"
                    onChange={handleChange}
                  />
                  <input
                    name="city"
                    className="rounded-xl mb-2 border-gray-200"
                    type="text"
                    placeholder="Ville"
                    onChange={handleChange}
                  />
                  <input
                    name="country"
                    className="rounded-xl mb-2 border-gray-200"
                    type="text"
                    placeholder="pays"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* presentation */}
        <section className="border-2 rounded-xl h-40 p-5">
          <h2>Presentation</h2>
          <input
            name="description"
            className="rounded-xl mb-2 border-gray-200 w-full"
            type="text"
            placeholder="Présentez-vous"
            onChange={handleChange}
          />
        </section>
        {/* childs input */}
        <section className="container-user">
          <h2 className="mb-4 border-b-2">Mes enfants</h2>
          <div className="flex justify-around pt-4">
            {user.children.map((e, i) => (
              <article className="child-card flex-1 flex border p-8">
                {user.children.length > 1 && (
                  <button
                    className="remove-child-button"
                    onClick={() => {
                      handleRemoveChild(i);
                    }}
                  >
                    X
                  </button>
                )}

                <div className="rounded-full p-4 flex justify-center items-center">
                  <img src={getChildPic(i)} alt="child-profil" />
                </div>
                <div className="pl-3">
                  <input
                    value={user.children[i].firstname}
                    name={`children[${i}].firstname`}
                    className="rounded-xl mb-2 border-gray-200 w-full"
                    type="text"
                    placeholder="Prénom"
                    onChange={(e) => handleChangeChildren(e, i, 'firstname')}
                  />
                  <label htmlFor={`children[${i}].birthday`}>
                    <p> date de naissance :</p>
                  </label>
                  <input
                    placeholder="date de naissance"
                    name={`children[${i}].birthday`}
                    value={user.children[i].birthday}
                    className="rounded-xl mb-2 border-gray-200 w-full"
                    type="date"
                    onChange={(e) => handleChangeChildren(e, i, 'birthday')}
                  />
                  <select
                    name={`children[${i}].gender`}
                    className="rounded-xl mb-2 border-gray-200 w-full"
                    onChange={(e) => handleChangeChildren(e, i, 'gender')}
                    value={user.children[i].gender}
                  >
                    <option selected>Précicez le genre</option>
                    <option value="boy">Garçon</option>
                    <option value="girl">Fille</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center p-20">
            <Button onClick={handleAddChild}>ajouter un enfant </Button>
          </div>

          <article>
            <p>
              <input type="checkbox" /> J'autorise un autre membre à amener mes
              enfants aux activités
            </p>
            <p className="pt-8 flex flex-col">
              Saisissez le nom et l'adresse du membre Kiddo :
              <input
                type="text"
                className="rounded-xl mb-2 border-gray-200"
                placeholder="Nom"
              />
              <input
                type="text"
                className="rounded-xl mb-2 border-gray-200"
                placeholder="Adresse"
              />
            </p>
          </article>
        </section>
        <section>
          <h2>catégories d'activités recherchées</h2>
          <article className="grid grid-cols-3 gap-5 p-8">
            <div className="etiquette border-2 rounded-md p-4">
              Activités manuelles
            </div>
            <div className="etiquette border-2 rounded-md p-4">
              Activités culturelles
            </div>
            <div className="etiquette border-2 rounded-md p-4">
              Activités sportives
            </div>
            <div className="etiquette border-2 rounded-md p-4">
              Activités d'éveil corporel
            </div>
            <div className="etiquette border-2 rounded-md p-4">
              Activités artistiques
            </div>
            <div className="etiquette border-2 rounded-md p-4">
              Activités autres
            </div>
          </article>
          <div className="flex justify-center p-10">
            <Button>Valider</Button>
          </div>
        </section>
      </section>
    </>
  );
};

export default UserInfo;
