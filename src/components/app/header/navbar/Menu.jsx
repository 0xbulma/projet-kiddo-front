import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { XIcon } from '@heroicons/react/outline';
import Logo from '../../../shared/Logo';
import { navigationHeader } from '../../../../utils/constants/navigation';
import { Link } from 'react-router-dom';
import useAuthContext from '../../../../hooks/useAuthContext';

const navigation = navigationHeader.navigation;
console.log(navigation);

const nav = [
  { name: 'Découvrir Kiddo', href: '/kiddo' },
  { name: 'Organiser une activité', href: '/create-event' },
];

let navig = navigation[1];
console.log(navig);

const submenu = navig.submenu;

const titleProp = navigationHeader.titleProp;

// const isLoggedIn = false;

export default function Menu() {
  const { isAuth } = useAuthContext();

  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'>
      <Popover.Panel focus className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
          <div className='pt-5 pb-6 px-5 sm:pb-8'>
            <div className='flex items-center justify-between'>
              <Logo titleProp={titleProp} className='w-40' />
              <div className='-mr-2'>
                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='mt-16 sm:mt-8'>
              <nav>
                <div className='flex flex-col text-center items-center gap-9 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4'>
                  {nav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-center p-3 hover:bg-gray-50 text-center border-2 rounded-full border-yellow-500'>
                      <div className='text-base font-medium text-gray-900'>{item.name}</div>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <div className='border-t border-b border-stone-700'>
            <div className='py-7 px-5 border-t border-gray-900 my-4'>
              <div className='relative flex flex-col justify-center items-center gap-y-5 mb-6'>
                <div className='text-sm underline font-medium text-gray-900'>{navig.name}</div>
                <div className='grid grid-cols-2 gap-4'>
                  {submenu.map((category) => (
                    <Link
                      to={`/category/${category.category}`}
                      key={category.name}
                      className='-m-3 flex items-center p-3 rounded-lg hover:text-gray-50'>
                      <div className='left-1 mx-auto text-center text-sm font-medium text-gray-900'>{category.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='border-t border-gray-900'>
                <div className='mt-6'>
                  {!isAuth ? (
                    <>
                      <a
                        href='/'
                        className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-kiddoSalmon hover:kiddoOrange'>
                        S'inscrire
                      </a>
                    </>
                  ) : (
                    <div className='flex flex-col gap-y-2'>
                      <button className='group active:kiddoSalmon hover:kiddoSalmon active:text-white text-gray-900 flex w-full items-center border border-black rounded-md px-2 py-2 text-sm'>
                        Tableau de bord
                      </button>
                      <button className='group active:kiddoSalmon hover:kiddoSalmon active:text-white text-gray-900 flex w-full items-center border border-black rounded-md px-2 py-2 text-sm'>
                        Mon Profil
                      </button>
                      <button className='group active:kiddoSalmon hover:kiddoSalmon active:text-white text-gray-900 flex w-full items-center border border-black rounded-md px-2 py-2 text-sm -mb-2'>
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
