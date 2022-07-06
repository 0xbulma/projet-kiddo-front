import React from "react";
import Button from "../../components/shared/Button";
import "./user-info.css";

const UserInfo = () => {
  return (
    <>
      <section className="container-user">
        <section>
          <h1 className="p-6 text-center">UserInfo</h1>
          <div className="flex">
            <article className="border">
              <p>Mon compte</p>
              <p>paramètres</p>
            </article>
            <article className="border">
              Infos
              <p>
                je suis : <input type="checkbox" /> Homme
                <input type="checkbox" />
                Femme
                <input type="checkbox" />
                non-binaire
              </p>
              <div className="flex-col">
                <input type="text" placeholder="Prénom" />
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Pseudo" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Date de naissance" />
                <input type="text" placeholder="adresse complète" />
              </div>
            </article>
          </div>
        </section>
        <section className="border">
          <h2>Presentation</h2>
          <input type="textarea" />
        </section>
        <section>
          Mes enfants
          <div className="flex justify-around">
            <article className="flex">
              <div>photo</div>
              <div>
                <p>Prenom</p>
                <p>Date de naissance</p>
                <p>genre</p>
              </div>
            </article>
            <article className="flex">
              <div className="border rounded">photo</div>
              <div>
                <p>Prenom</p>
                <p>Date de naissance</p>
                <p>genre</p>
              </div>
            </article>
            <article className="flex">
              <div>photo</div>
              <div>
                <p>Prenom</p>
                <p>Date de naissance</p>
                <p>genre</p>
              </div>
            </article>
          </div>
          <article>
            <p>
              checkbox J'autorise un autre membre à amener mes enfants aux
              activités
            </p>
            <p>
              Saisissez le nom et l'adresse du memebre Kiddo :{" "}
              <input type="text" /> <input type="text" />
            </p>
          </article>
        </section>
        <section>
          <h2>catégories d'activités recherchées</h2>
          <article className="flex">
            <div>Activités manuelles</div>
            <div>Activités culturelles</div>
            <div>Activités sportives</div>
            <div>Activités d'éveil corporel</div>
            <div>Activités artistiques</div>
            <div>Activités autres</div>
          </article>
        </section>
        <Button>Valider</Button>
      </section>
    </>
  );
};

export default UserInfo;
