// import Facebook from '../assets/images/svgcomponents/Facebook';
// import Twitter from '../assets/images/svgcomponents/Twitter';
// import Instagram from '../assets/images/svgcomponents/Instagram';
// import GooglePlus from '../assets/images/svgcomponents/GooglePlus';

import { 
  FaFacebook, FaTwitter, FaInstagram, FaGooglePlus, 
  FaSearch, FaRegCalendarAlt,FaStar} from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

export const navigationHeader = {
  titleProp: {
    title: 'My Shop',
    imgSrc: 'media/Images/Logo.png',
    imgAlt: 'My Shop Logo',
  },
  navigation: [
    { name: 'Découvrir Kiddo', href: '/'},
    { name: 'Participer aux activités', href: '/events'},
    { name: 'Organiser une activité', href: '/create-event'},
  ],
  navIcon: [
    {
      name: 'Search',
      href: '/',
      icon: (props) => <FaSearch {...props} />
    },
    {
      name: 'Calendar',
      href: '/favorites',
      icon: (props) => <FaRegCalendarAlt {...props} />
    },
    {
      name: 'Notification',
      href: '/',
      icon: (props) => <FaInstagram {...props} />
    },
    {
      name: 'Favorite',
      href: '/',
      icon: (props) => <FaStar {...props} />
    },
    {
      name: 'Profile',
      href: '/',
      icon: (props) => <CgProfile {...props} />
      
    }
  ]
}

export const navigationFooter = {
  about: [
    { name: 'Découvrir Kiddo', href: '/'},
    { name: 'Avis Sur Kiddo', href: '/'},
    { name: 'Ils parlent de nous', href: '/'},
  ],
  contact: [
    { name: 'Nous contacter', href: '/contact' },
    { name: 'Signaler', href: '/signal'},
  ],
  faq: [
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'CGU Kiddo', href: '/terms' },
    { name: 'Protections des données', href: '/privacy' },
    { name: 'Cookies', href: '/cookies' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: (props) => <FaFacebook {...props} />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/',
      icon: (props) => <FaTwitter {...props} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (props) => <FaInstagram {...props} />
    },
    {
      name: 'Google+',
      href: 'https://plus.google.com/',
      icon: (props) => <FaGooglePlus {...props} />
    }
  ]
}