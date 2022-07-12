/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router';
import useAuthContext from '../../../hooks/useAuthContext';
import { useEffect } from 'react';

export default function UserDashboardNotification() {
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
      path: '../dashboard/user',
      isSelected: false,
    },
    {
      title: 'Mon tableau de bord',
      path: '../dashboard',
      isSelected: false,
    },
    {
      title: 'Notifications',
      path: '',
      isSelected: true,
    },
  ];

  const handleRootClick = (isSelected, path) => {
    if (!isSelected) navigate(path);
  };

  return (
    <>
      <section className='generic-container flex min-h-screen'>
        <article className='mb-20'>
          <div className='flex'>
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

        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-24 mb-10'></article>
      </section>
    </>
  );
}
