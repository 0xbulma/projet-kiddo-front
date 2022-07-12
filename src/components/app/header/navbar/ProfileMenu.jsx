import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function ProfileMenu({ goToDashboard, goToProfile, logOut }) {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'>
      <Menu.Items className='absolute right-0 mt-7 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30'>
        <div className='px-1 py-1'>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={goToDashboard}
                className={`${active ? 'bg-kiddoSalmon text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                Tableau de bord
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={goToProfile}
                className={`${active ? 'bg-kiddoSalmon text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                Mon Profil
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={logOut}
                className={`${active ? 'bg-kiddoSalmon text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                Déconnexion
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  );
}
