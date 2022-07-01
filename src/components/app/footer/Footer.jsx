import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright as copyOutline } from '@fortawesome/free-regular-svg-icons'

import { navigationFooter } from '../../../utils/constants/navigation';

import './_footer.css';

const about = navigationFooter.about;
const contact = navigationFooter.contact;
const faq = navigationFooter.faq;
const social = navigationFooter.social;

const legal = navigationFooter.legal;

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby='footer-heading'>
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>
      <div className="footer-nav">
        <section className="footer__content">
          <div className="footer__logo">
            
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
                          {item.name}
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
                        {item.name}
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
                        {item.name}
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
                <ul className="nav__items--list nav__social--list">
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
                          className="w-8 h-8 " aria-hidden="true" 
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
                    {item.name}
                  </a>
                </div>
              ))
            }
          </div>
        </section>
        <section className="footer__copyright">
            <p className="footer__copyright__text">
              Copyright Kiddo <FontAwesomeIcon icon={copyOutline} /> 2022
            </p>
        </section>
      </div>
    </footer>
  )
}