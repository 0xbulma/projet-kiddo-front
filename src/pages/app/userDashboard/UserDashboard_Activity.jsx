import { useNavigate } from 'react-router';

export default function UserDashboard_Activity() {
  const navigate = useNavigate();

  const roots = [
    {
      title: 'Acceuil',
      path: '../',
      isSelected: false,
    },
    {
      title: 'Profil',
      path: '../user',
      isSelected: false,
    },
    {
      title: 'Mon tableau de bord',
      path: '../user/dashboard',
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
      <section className='generic-container pt-28 mb-32'>
        <article className='mb-20'>
          <div className='flex'>
            {roots.map((item, index) => (
              <div className='flex'>
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

        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-24 mb-10'>
          <h2>Toto</h2>
        </article>
      </section>
    </>
  );
}
