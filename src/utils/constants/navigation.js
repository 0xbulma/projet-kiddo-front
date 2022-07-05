import Facebook from '../../components/shared/icons/Facebook';
import Instagram from '../../components/shared/icons/Instagram';
import GooglePlus from '../../components/shared/icons/GooglePlus';
import Twitter from '../../components/shared/icons/Twitter';
import Auth from '../../components/shared/Auth';
// import Twitter from '../assets/images/svgcomponents/Twitter';
// import Instagram from '../assets/images/svgcomponents/Instagram';
// import GooglePlus from '../assets/images/svgcomponents/GooglePlus';

import { FaSearch, FaRegCalendarAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineNotificationsNone } from 'react-icons/md';

export const navigationHeader = {
  titleProp: {
    title: 'Kiddo',
    imgSrc: 'logo.svg',
    imgAlt: 'Kiddo Logo',
  },
  navigation: [
    { name: 'Découvrir Kiddo', href: '/kiddo'},
    { 
      name: 'Participer aux activités', 
      submenu: [
        { name: 'Activité culturelles', href: '/category/:category' },
        { name: 'Activité manuelles', href: '/category/:category' },
        { name: 'Activités Sportives', href: '/category/:category' },
        { name: 'Activités Artistiques', href: '/category/:category' },
        { name: 'Activités d\'éveil corporel', href: '/category/:category' },
        { name: 'Autre', href: '/category/:category' },
      ],
    },
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
      href: '/',
      icon: (props) => <FaRegCalendarAlt {...props} />
    },
    {
      name: 'Notification',
      href: '/',
      icon: (props) => <MdOutlineNotificationsNone {...props} />
    },
    {
      name: 'Profile',
      icon: (props) => <CgProfile {...props} />,
      isProfile: true,
      component: (props) => <Auth {...props} />,
      
    }
  ]
}

export const navigationFooter = {
  about: [
    { name: 'Découvrir Kiddo', href: '/kiddo' },
    { name: 'Avis Sur Kiddo', href: '/' },
    { name: 'Ils parlent de nous', href: '/' },
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
      icon: (props) => <Facebook {...props} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (props) => <Instagram {...props} />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/',
      icon: (props) => <Twitter {...props} />
    },
    {
      name: 'Google+',
      href: 'https://plus.google.com/',
      icon: (props) => <GooglePlus {...props} />
    }
  ]
}