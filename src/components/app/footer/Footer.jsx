'@fortawesome/free-regular-svg-icons'

import { navigationFooter, navigationHeader } from '../../../utils/constants/navigation';

import './_footer.css';
import { FaRegCopyright } from 'react-icons/fa';

import Logo from '../../shared/Logo';

const about = navigationFooter.about;
const contact = navigationFooter.contact;
const faq = navigationFooter.faq;
const social = navigationFooter.social;

const legal = navigationFooter.legal;

const titleProps = navigationHeader.titleProp;

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby='footer-heading'>
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>
      <div className="footer-nav generic-container">
        <section className="footer__content">
          <div className="footer__logo">
            <Logo titleProp={titleProps} className="w-56 h-56 -mt-16 ml-24" />
          </div>
          <div className="footer__navigation">
            <div className="footer__navigation--nav">
              <div>
                <h3 className="nav__items--h3">
                  A propos
                </h3>
                <ul className="nav__items--list">
                  {
                    about.map((item, index) => (
                      <li key={index}>
                        <a 
                          href={item.href} className="nav__items--list-item-link"
                        >
                          <p className='item-text'>
                            {item.name}
                          </p>
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="footer__navigation--nav__items">
                <h3 className="nav__items--h3">
                  Contact
                </h3>
                <ul className="nav__items--list">
                {
                  contact.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="nav__items--list-item-link">
                        <p className='item-text'>
                          {item.name}
                        </p>
                      </a>
                    </li>
                  ))
                }
                </ul>
              </div>
            </div>
            <div className="footer__navigation--nav">
              <div>
                <h3 className="nav__items--h3">
                  Besoin d'aide ?
                </h3>
                <ul className="nav__items--list">
                {
                  faq.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="nav__items--list-item-link">
                        <p className='item-text'>
                          {item.name}
                        </p>
                      </a>
                    </li>
                  ))
                }
                </ul>
              </div>
              <div className="footer__navigation--nav__items">
                <h3 className="nav__items--h3">
                  Suivez-nous
                </h3>
                <ul className="nav__social--list">
                {
                  social.map((item, index) => (
                    <li key={index} className="nav__social--item">
                      <a 
                        key={index} 
                        href={item.href} 
                        className="nav__items--list-item-link"
                      >
                        <p className="sr-only">
                          {item.name}
                        </p>
                        <item.icon 
                          className="nav__social--icon" aria-hidden="true" 
                        />
                      </a>
                    </li>
                  ))
                }
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="footer__legal">
          <div className="footer__legal--nav">
            {
              legal.map((item, index) => (
                <div key={index}>
                  <a href={item.href} className="footer__legal--nav-item">
                    <p className='item-text'>
                      {item.name}
                    </p>
                  </a>
                </div>
              ))
            }
          </div>
        </section>
        <section className="footer__copyright">
            <p className="footer__copyright__text">
              Copyright Kiddo <FaRegCopyright /> 2022
            </p>
        </section>
      </div>
    </footer>
  )
}