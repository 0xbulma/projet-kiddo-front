function Kiddo() {
  const imgTextStyle = 'grid grid-cols-1 md:grid-cols-2 gap-4 rows mb-10 relative';
  return (
    <>
      <section className='container mx-auto'>
        <img src='https://picsum.photos/300/100?random' alt='Logo Kiddo' className='mt-10' />
        {/* 1ème article */}
        <article className='mt-12'>
          <h2 className='text-xl mb-3'>Des activités pour toutes les familles</h2>
          <h3 className='text-xl mb-10'>Kiddo la plateforme créer pour les parents par les parents</h3>
          <div className={imgTextStyle}>
            <div className='relative'>
              <span className='bg-red-300 p-36 rounded-full absolute right-0 z-0'></span>
              <img src='https://picsum.photos/600/400?random' alt='' className='relative z-10' />
            </div>
            <p className='mt-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellat? Earum tenetur doloremque et quaerat reprehenderit, aliquam
              ea quos est id blanditiis corrupti illum? Odio quasi quos obcaecati. Adipisci, repudiandae!
            </p>
          </div>
        </article>
        {/* 2ème article */}
        <article className='mt-24'>
          <h2 className='text-xl mb-3 text-right'>Comment profiter de la plateforme Kiddo ?</h2>
          <h3 className='text-xl mb-10 text-right'>Kiddo c'est la plateforme des familles</h3>
          <div className={imgTextStyle}>
            <p className='mt-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellat? Earum tenetur doloremque et quaerat reprehenderit, aliquam
              ea quos est id blanditiis corrupti illum? Odio quasi quos obcaecati. Adipisci, repudiandae!
            </p>
            <div className='relative'>
              <span className='bg-red-300 p-36 rounded-full absolute right-0 z-0'></span>
              <img src='https://picsum.photos/600/400?random' alt='' className='relative z-10' />
            </div>
          </div>
        </article>
        {/* 3ème article */}
        <article className='mt-24'>
          <h2 className='text-xl mb-3'>Vous pouvez trouver des activités à proximité de chez vous</h2>
          <h3 className='text-xl mb-10'>Trouve et partage des idées d'activités pour ta famille</h3>
          <div className={imgTextStyle}>
            <div className='relative'>
              <span className='bg-red-300 p-36 rounded-full absolute right-0 z-0'></span>
              <img src='https://picsum.photos/600/400?random' alt='' className='relative z-10' />
            </div>
            <p className='mt-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellat? Earum tenetur doloremque et quaerat reprehenderit, aliquam
              ea quos est id blanditiis corrupti illum? Odio quasi quos obcaecati. Adipisci, repudiandae!
            </p>
          </div>
        </article>
        {/* 4ème article */}
        <article className='mt-24'>
          <h2 className='text-xl mb-3 text-right'>Des activités pour toutes les familles</h2>
          <h3 className='text-xl mb-10 text-right'>Kiddo la plateforme créer pour les parents par les parents</h3>
          <div className={imgTextStyle}>
            <p className='mt-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellat? Earum tenetur doloremque et quaerat reprehenderit, aliquam
              ea quos est id blanditiis corrupti illum? Odio quasi quos obcaecati. Adipisci, repudiandae!
            </p>
            <div className='relative'>
              <span className='bg-red-300 p-36 rounded-full absolute right-0 z-0'></span>
              <img src='https://picsum.photos/600/400?random' alt='' className='relative z-10' />
            </div>
          </div>
        </article>
        {/* 5ème article */}
        <article className='mt-24'>
          <h2 className='text-xl mb-3'>Des activités pour toutes les familles</h2>
          <h3 className='text-xl mb-10'>Kiddo la plateforme créer pour les parents par les parents</h3>
          <div className={imgTextStyle}>
            <div className='relative'>
              <span className='bg-red-300 p-36 rounded-full absolute right-0 z-0'></span>
              <img src='https://picsum.photos/600/400?random' alt='' className='relative z-10' />
            </div>
            <p className='mt-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellat? Earum tenetur doloremque et quaerat reprehenderit, aliquam
              ea quos est id blanditiis corrupti illum? Odio quasi quos obcaecati. Adipisci, repudiandae!
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Kiddo;
