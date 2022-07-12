import kiddoLogo from '../../assets/images/logo.svg';

import img1 from '../../assets/images/kiddo/kiddo_img_1.png';
import img2 from '../../assets/images/kiddo/kiddo_img_2.png';
import img3 from '../../assets/images/kiddo/kiddo_img_3.png';
import img4 from '../../assets/images/kiddo/kiddo_img_4.png';
import img5 from '../../assets/images/kiddo/kiddo_img_5.png';
import { useEffect } from 'react';

export default function Kiddo() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className='generic-container min-h-screen pt-28'>
        <img src={kiddoLogo} alt='Logo Kiddo' className='mt-20 mb-5 w-72' />
        {/* 1ère section */}
        <article className='section__grid-3 pb-52'>
          <div className='col-span-2  z-10'>
            <h2 className='font-bold mb-2'>
              Kiddo une plateforme créée <br />
              pour les parents par les parents
            </h2>
            <p>
              Kiddo est une plateforme communautaire qui met en relation les parents pour partager ou organiser des activités familiales
              extra-scolaires (sportives, culturelles, artistiques, manuelles, d’éveil corporel et autres), de proximité, dans le but de favoriser les
              échanges entre les familles. A vous d'imaginer et de proposer des activités ou des sorties originales à partager avec vos enfants et
              d'autres familles !
            </p>
          </div>
          <div>
            <img src={img1} alt='' className='absolute rounded-tl-3xl rounded-br-3xl -mt-52 -ml-32' />
          </div>
        </article>
        {/* 2ème section */}
        <article className='section__grid-3 py-52'>
          <div>
            <img src={img2} alt='' className='absolute z-0 rounded-tl-3xl rounded-br-3xl mt-32' />
          </div>
          <div className='col-span-2 text-right z-10'>
            <h2 className='font-bold mb-2'>
              Comment profiter
              <br /> de la plateforme Kiddo ?
            </h2>
            <h3 className='text-purple-800 mb-10'>Kiddo s'addresse à toutes les familles</h3>
            <p>
              Kiddo est une plateforme communautaire qui met en relation les parents pour partager ou organiser des activités familiales
              extra-scolaires (sportives, culturelles, artistiques, manuelles, d’éveil corporel et autres), de proximité, dans le but de favoriser les
              échanges entre les familles. A vous d'imaginer et de proposer des activités ou des sorties originales à partager avec vos enfants et
              d'autres familles !
            </p>
          </div>
        </article>
        {/* 3ème section */}
        <article className='section__grid-3 py-72'>
          <div className='col-span-2 z-10'>
            <h2 className='font-bold mb-2'>Vous pouvez participer à des activités à proximité de chez vous</h2>
            <h3 className='text-red-600 mb-10'>
              Inscrivez-vous à de nouvelles activités
              <br />
              originales, à vivre en famille !
            </h3>
            <p>
              Qu’elles soient sportives, artistiques, culturelles, ou autres, vous trouverez très certainement l’activité qui vous conviendra ainsi
              qu’à vos enfants. Vous n’aurez plus qu’à activer la géolocalisation.
            </p>
          </div>
          <div>
            <img src={img3} alt='' className='absolute z-0 rounded-tl-3xl rounded-br-3xl -mt-52 -ml-60' />
          </div>
        </article>
        {/* 4ème section */}
        <article className='section__grid-3 py-60'>
          <div>
            <img src={img4} alt='' className='absolute z-0 rounded-tl-3xl rounded-br-3xl' />
          </div>
          <div className='col-span-2 mr-28 text-right z-10'>
            <h2 className='font-bold mb-2'>Vous pouvez également organiser des activités</h2>
            <h3 className='text-green-800 mb-10'>Organisez des activités pour les enfants et les familles</h3>
            <p>
              Vous avez vécu de belles expériences en famille ? Partagez les en les organisant à votre tour sur la plateforme Kiddo et ainsi en faire
              profiter d’autres familles !
            </p>
          </div>
        </article>
        {/* 5ème section */}
        <article className='z-10 section__grid-3 py-96'>
          <div className='col-span-2 z-10'>
            <h2 className='font-bold mb-2 flex'>
              La story <img src={kiddoLogo} alt='Logo Kiddo' className='w-52 -mt-3' />
            </h2>
            <h3 className='text-purple-800 mb-10'>Kiddo la plateforme créée pour les parents par les parents</h3>
            <p>
              • Kiddo est né d'un constat de familles qui ne trouvaient pas de site ou de plateforme collaborative proposant et regroupant à la fois
              des activités extra-scolaires originales, ludiques, éducatives et de proximité pour leurs enfants de 3 à 12 ans.
              <br />
              <br />
              • Ce constat est à l’origine de la création de la plateforme communautaire Kiddo.
              <br />
              <br />• Kiddo permet à des parents de proposer des activités à partager avec d’autres familles pour créer d’avantages de liens sociaux.
              <br />
              <br />• Kiddo facilite la recherche d’activités originales et récréatives à faire en famille autour de soi.
            </p>
          </div>
          <div>
            <img src={img5} alt='' className='z-0 absolute rounded-tl-3xl rounded-br-3xl -ml-60 -mt-10' />
          </div>
        </article>
      </section>
    </>
  );
}
