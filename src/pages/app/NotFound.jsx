import { navigationHeader } from '../../utils/constants/navigation';

import Logo from '../../components/app/header/navbar/Logo';

const titleProp = navigationHeader.titleProp;

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__content">
        <div className="notfound__content-flex">
          <img src="404.svg" alt="404" className="notfound__content--img" />
          <span className="notfound__content--title">
            Désolé la page est introuvable
          </span>
        </div>
        <div className="notfound__content--link">
          <a href="/" className='notfound__content--link__text-link'>
            <Logo titleProp={titleProp} />
          </a>
        </div>
      </div>
    </section>
  )
}