import { Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuAlt1Icon } from '@heroicons/react/outline';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

import type { IHeaderProps } from '@/types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header(props: IHeaderProps) {
  const { setSidebarOpen } = props;

  return (
    <div className="flex flex-col flex-1 lg:pl-64">
      <div className="flex relative z-10 shrink-0 h-16 bg-white  shadow lg:border-none">
        <button
          type="button"
          className="px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt1Icon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* Search bar */}
        <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8 lg:mx-auto lg:max-w-6xl">
          <div className="flex flex-1">
            <form className="flex w-full md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div
                  className="flex absolute inset-y-0 left-0 items-center pointer-events-none"
                  aria-hidden="true"
                >
                  <SearchIcon className="w-5 h-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  className="block py-2 pr-3 pl-8 w-full h-full text-gray-900 placeholder:text-gray-500 border-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search transactions"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center ml-4 md:ml-6">
            <button
              type="button"
              className="p-1 text-gray-400 hover:text-gray-500 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:p-2 lg:hover:bg-gray-50 lg:rounded-md">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="hidden ml-3 text-sm font-medium text-gray-700 lg:block">
                    <span className="sr-only">Open user menu for </span>
                    Emilia Birch
                  </span>
                  <ChevronDownIcon
                    className="hidden shrink-0 ml-1 w-5 h-5 text-gray-400 lg:block"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md focus:outline-none ring-1 ring-black/5 shadow-lg origin-top-right">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Logout
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
