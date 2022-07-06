import React from 'react';
import Button from '../../components/shared/Button';
import './user-info.css';

const UserInfo = () => {
  return (
    <>
      <section className="container-user">
        <h1 className="text-center">UserInfo</h1>
        <section className="grid grid-cols-3 mb-8">
          <article>
            <div className="border-2 ml-20 mr-4 flex flex-col items-center rounded-xl pt-6 pb-6 ">
              <p>Mon compte</p>
              <p>paramètres</p>
            </div>
          </article>

          <div className="col-span-2">
            <article className="border-2 rounded-xl p-5 col-span-2 ">
              {/* checkbox form */}
              <div className="flex items-center">
                <p className="flex justify-around p-5">
                  Je suis
                  <label className="container">
                    Homme
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Femme
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Autres
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </p>
              </div>
              {/* input form */}
              <div className="flex flex-col">
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Prénom"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Nom"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Pseudo"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Date de naissance"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="adresse complète"
                />
                <div>
                  <input
                    className="rounded-xl mb-2 border-gray-200"
                    type="text"
                    placeholder="Code postal"
                  />
                  <input
                    className="rounded-xl mb-2 border-gray-200"
                    type="text"
                    placeholder="Ville"
                  />
                  <input
                    className="rounded-xl mb-2 border-gray-200"
                    type="text"
                    placeholder="pays"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="border-2 rounded-xl h-40 p-5">
          <h2 className="">Presentation</h2>
          <input
            className="rounded-xl mb-2 border-gray-200 w-full"
            type="text"
            placeholder="Présentez-vous"
          />
        </section>
        <section className="container-user">
          <h2 className="mb-4 border-b-2">Mes enfants</h2>
          <div className="flex justify-around pb-20 pt-4">
            <article className="flex-1 flex border p-3">
              <div className="rounded-full border p-4">photo</div>
              <div className="pl-3">
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Prénom"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200 w-full"
                  type="date"
                  placeholder="Prénom"
                />
                <p>genre</p>
              </div>
            </article>
            <article className="flex-1 flex p-3">
              <div className="rounded-full border p-4">photo</div>
              <div className="pl-3">
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Prénom"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200 w-full"
                  type="date"
                  placeholder="Prénom"
                />
                <p>genre</p>
              </div>
            </article>
            <article className="flex-1 flex p-3">
              <div className="rounded-full border p-4">photo</div>
              <div className="pl-3">
                <input
                  className="rounded-xl mb-2 border-gray-200"
                  type="text"
                  placeholder="Prénom"
                />
                <input
                  className="rounded-xl mb-2 border-gray-200 w-full"
                  type="date"
                  placeholder="Prénom"
                />
                <p>genre</p>
              </div>
            </article>
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
            <div className="border-2 rounded-md p-4">Activités manuelles</div>
            <div className="border-2 rounded-md p-4">Activités culturelles</div>
            <div className="border-2 rounded-md p-4">Activités sportives</div>
            <div className="border-2 rounded-md p-4">
              Activités d'éveil corporel
            </div>
            <div className="border-2 rounded-md p-4">Activités artistiques</div>
            <div className="border-2 rounded-md p-4">Activités autres</div>
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
