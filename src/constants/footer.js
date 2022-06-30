import Facebook from '../assets/images/svgcomponents/Facebook';
import Twitter from '../assets/images/svgcomponents/Twitter';
import Instagram from '../assets/images/svgcomponents/Instagram';
import GooglePlus from '../assets/images/svgcomponents/GooglePlus';

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
      icon: (props) => <Facebook {...props} />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/',
      icon: (props) => <Twitter {...props} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (props) => <Instagram {...props} />
    },
    {
      name: 'Google+',
      href: 'https://plus.google.com/',
      icon: (props) => <GooglePlus {...props} />
    }
  ]
}