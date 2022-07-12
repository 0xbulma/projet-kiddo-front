/* eslint-disable react-hooks/exhaustive-deps */
import activityIcon from '../../../assets/icons/icon_dashboard_run.svg';
import favIcon from '../../../assets/icons/icon_star.svg';
import notifIcon from '../../../assets/icons/icon_notification.svg';
import userIcon from '../../../assets/icons/icon_user.svg';
import useAuthContext from '../../../hooks/useAuthContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function UserDashboard() {
  const navigate = useNavigate();
  const context = useAuthContext();

  useEffect(() => {
    if (context.isAuthChecked && !context.isAuth) {
      navigate('../');
    }
  }, []);

  const roots = [
    {
      title: 'Acceuil',
      path: '../',
      isSelected: false,
    },
    {
      title: 'Profil',
      path: './user',
      isSelected: false,
    },
    {
      title: 'Mon tableau de bord',
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
          <h2>Mon tableau de bord</h2>
        </article>

        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-24'>
          <div className='z-0 relative flex justify-center items-center'>
            <span className='absolute -mr-96 p-40 bg-kiddoGreen rounded-full' />
          </div>
          <div className='z-20 my-3 mx-10'>
            <DashboardCard title='Mes activités' icon={activityIcon} path='./activity' />
          </div>

          <div className='z-20 my-3 mx-10'>
            <DashboardCard title='Mes favoris' icon={favIcon} path='./fav' />
          </div>

          <div className='relative z-10 flex justify-center items-center'>
            <span className='absolute -mr-72 -mt-28 px-12 py-24 bg-kiddoPurple rounded-tl-lg rounded-br-lg' />
          </div>

          <div className='z-20 my-3 mx-10'>
            <DashboardCard title='Mes notifications' icon={notifIcon} path='./notification' isDisabled />
          </div>
          <div className='z-20 my-3 mx-10'>
            <DashboardCard title='Mon compte' icon={userIcon} path='./user' />
          </div>
        </article>
      </section>
    </>
  );
}

function DashboardCard({ title, icon, path, isDisabled }) {
  const navigate = useNavigate();
  return (
    <>
      <article
        className={
          'w-full h-52 bg-kiddoGray flex flex-col items-center justify-center select-none rounded-lg shadow-sm shadow-kiddoShadow hover:ring-2 hover:ring-yellow-300 hover:shadow-yellow-300 transition-all hover:scale-[1.01] cursor-pointer ' +
          (isDisabled && 'bg-gray-400 cursor-default hover:ring-0 hover:shadow-kiddoShadow hover:scale-100')
        }
        onClick={() => !isDisabled && navigate(path)}>
        <img src={icon} alt='' className='w-10 ml-3' />
        <p>{title}</p>
      </article>
    </>
  );
}
