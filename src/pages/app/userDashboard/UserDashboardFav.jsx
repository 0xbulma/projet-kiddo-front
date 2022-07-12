/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router';
import ActivityCard from '../../../components/shared/card/ActivityCard';

export default function UserDashboardFav() {
  const navigate = useNavigate();

  const roots = [
    {
      title: 'Acceuil',
      path: '../',
      isSelected: false,
    },
    {
      title: 'Profil',
      path: '../dashboard/user',
      isSelected: false,
    },
    {
      title: 'Mon tableau de bord',
      path: '../dashboard',
      isSelected: false,
    },
    {
      title: 'Activité',
      path: '',
      isSelected: true,
    },
  ];

  const handleRootClick = (isSelected, path) => {
    if (!isSelected) navigate(path);
  };

  return (
    <>
      <section className='generic-container pt-32 min-h-screen'>
        <article className='mb-20'>
          <div className='flex mb-10 text-sm'>
            {roots.map((item, index) => (
              <div className='flex' key={index}>
                <p
                  onClick={() => handleRootClick(item.isSelected, item.path)}
                  className={`cursor-pointer hover:underline select-none ` + (item.isSelected && 'underline font-medium cursor-default')}>
                  {item.title}
                </p>
                {index < roots.length - 1 && <p className='mx-2'> {'>'} </p>}
              </div>
            ))}
          </div>
          <h2>Mes favoris</h2>
        </article>

        <article>
          <article>
            <div>
              <>
                <p className='text-red-500'>Aucun événement en favoris</p>
              </>
            </div>

            <div>
              <h3 className='border-b border-gray-500 pb-5 my-10'>Nos recommendations</h3>
              <div className='section__grid-2'>
                <ActivityCard
                  title='Peinture créative'
                  category='art'
                  location={{ city: 'Toulon', zip_code: '38000' }}
                  date={1658742687}
                  price={{ adult: 10, child: 5 }}
                />
                <ActivityCard
                  title='Randonnée en forêt'
                  category='sport'
                  location={{ city: 'Rambouillet', zip_code: '78000' }}
                  date={1659865887}
                  price={{ adult: 15, child: 10 }}
                />
              </div>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}
