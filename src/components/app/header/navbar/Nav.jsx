// import NavItem from "./NavItem";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { classNames } from '../../../../utils/lib/classNames'

export default function Nav({ submenu }) {
  return (
    <Popover.Group as="nav" className="flex space-x-10">
      <a href="/kiddo" className="text-base font-medium text-black hover:text-gray-900">
        Découvrir Kiddo
      </a>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-black',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:underline'
              )}
            >
              <span>Participer aux activités</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-full">
                <div className="bg-white">
                  <div className="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                    {submenu.map((item) => (
                      <div key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                        >
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <a href="/" className="text-base font-medium text-black hover:text-gray-900">
        Organiser une activité
      </a>
    </Popover.Group>
  )
}

// <NavItem key={page.name} page={page} />