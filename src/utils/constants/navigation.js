import IFacebook from '../../components/shared/icons/IFacebook';
import IInstagram from '../../components/shared/icons/IInstagram';
import IGooglePlus from '../../components/shared/icons/IGooglePlus';
import ITwitter from '../../components/shared/icons/ITwitter';

import Logosvg from '../../components/shared/logo__404/Logosvg';

import ISearch from '../../components/shared/icons/ISearch';
import ICalendar from '../../components/shared/icons/ICalendar';
import INotification from '../../components/shared/icons/INotification';
import IProfile from '../../components/shared/icons/IProfile';

export const navigationHeader = {
  titleProp: {
    title: 'Kiddo',
    img: (props) => <Logosvg {...props} />,
  },
  navigation: [
    { name: 'Découvrir Kiddo', href: '/kiddo'},
    { 
      name: 'Participer aux activités', 
      submenu: [
        { name: 'Activité culturelles', category: 'culture' },
        { name: 'Activité manuelles', category: 'manuel' },
        { name: 'Activités Sportives', category: 'sport' },
        { name: 'Activités Artistiques', category: 'art' },
        { name: "Activités d'éveil corporel", category: 'eveil' },
        { name: 'Autres', category: 'autres' },
      ],
    },
    { name: 'Organiser une activité', href: '/create-event'},
  ],
  navIcon: [
    {
      name: 'Search',
      href: '/',
      icon: (props) => <ISearch {...props} />
    },
    {
      name: 'Calendar',
      href: '/',
      icon: (props) => <ICalendar {...props} />
    },
    {
      name: 'Notification',
      href: '/',
      icon: (props) => <INotification {...props} />
    },
    {
      name: 'Profile',
      icon: (props) => <IProfile {...props} />,
      
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
      icon: (props) => <IFacebook {...props} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (props) => <IInstagram {...props} />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/',
      icon: (props) => <ITwitter {...props} />
    },
    {
      name: 'Google+',
      href: 'https://plus.google.com/',
      icon: (props) => <IGooglePlus {...props} />
    }
  ]
}