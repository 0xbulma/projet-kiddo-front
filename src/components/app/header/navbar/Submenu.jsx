import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export default function Submenu({ item }) {
  return (
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
            {item.submenu.map((category) => (
              <div key={category.name} className="flow-root">
                <a
                  href={`/category/${category.category}`}
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                >
                  <span className="ml-3">{category.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}