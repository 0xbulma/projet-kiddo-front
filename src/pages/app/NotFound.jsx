import React from 'react'

const leftArrow = String.fromCharCode("8592");
const rightArrow = String.fromCharCode("8594");

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__content">
        <p className="notfound__content--error">
          Psst !! Erreur 404 ...
        </p>
        <h1 className="notfound__content--title">
          
        </h1>
        <p className='notfound__content--text'>
          Oops ... !! Il est interdit d'aller du côté obscur de la force !!
        </p>
        <div className="notfound__content--link">
          <a href="/" className='notfound__content--link__text-link'>
            <span aria-hidden="true" className="arrow">{rightArrow} </span>
            Revenir à la page d'acceuil 
            <span aria-hidden="true" className="arrow"> {leftArrow}</span>
          </a>
          </div>
      </div>
    </section>
  )
}