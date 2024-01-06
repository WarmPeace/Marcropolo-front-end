import { Dialog, Disclosure, Transition } from '@headlessui/react';
import {
  ChartBarIcon,
  CogIcon,
  CollectionIcon,
  DocumentReportIcon,
  HomeIcon,
  LibraryIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  TagIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment } from 'react';

import type { ILeftSidebarProps } from '@/types';
import { classNames } from '@/utils/Helper';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  {
    name: 'Products',
    href: '/products',
    icon: TagIcon,
    current: true,
    children: [
      { name: 'Inventory', href: '/products/inventory' },
      { name: 'Transfers', href: '/products/transfers' },
      { name: 'Collections', href: '/products/collections' },
      { name: 'Gift Cards', href: '/products/giftCards' },
      { name: 'Price lists', href: '/products/priceLists' },
    ],
  },
  {
    name: 'Orders',
    href: 'orders',
    icon: CollectionIcon,
    current: false,
    children: [
      { name: 'Drafts', href: '/orders/drafts' },
      { name: 'Abandoned checkouts', href: '/orders/abandonedCheckouts' },
    ],
  },
  {
    name: 'Customers',
    href: 'customers',
    icon: UserGroupIcon,
    current: false,
    children: [{ name: 'Companies', href: 'customers/companies' }],
  },
  {
    name: 'Finances',
    href: 'finances',
    icon: LibraryIcon,
    current: false,
    children: [{ name: 'Billing', href: 'finances/billing' }],
  },
  {
    name: 'Analytics',
    href: 'analytics',
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: 'Reports', href: 'analytics/reports' },
      { name: 'Live View', href: 'analytics/liveView' },
    ],
  },
  {
    name: 'Marketing',
    href: 'marketing',
    icon: DocumentReportIcon,
    current: false,
    children: [
      { name: 'Compaigns', href: 'marketing/compaigns' },
      { name: 'Automations', href: 'marketing/automations' },
    ],
  },
  { name: 'Discount', href: '/', icon: HomeIcon, current: false },
];
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];

export default function Footer(props: ILeftSidebarProps) {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <Fragment>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="flex fixed inset-0 z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600/75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="flex relative flex-col flex-1 pt-5 pb-4 w-full max-w-xs bg-cyan-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    type="button"
                    className="flex justify-center items-center ml-1 w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex items-center shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 grow flex flex-col">
                <nav
                  className="flex-1 px-2 space-y-1 bg-white"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                          )}
                        >
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                              )}
                            >
                              <svg
                                className={classNames(
                                  open
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                  'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                              {item.name}
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:flex-col lg:w-64">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex overflow-y-auto flex-col grow pt-5 pb-4 bg-cyan-700">
          <div className="flex shrink-0 items-center px-4">
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
              alt="Easywire logo"
            />
          </div>
          <nav
            className="flex overflow-y-auto flex-col flex-1 mt-5 divide-y divide-cyan-800"
            aria-label="Sidebar"
          >
            <div className="px-2 space-y-1">
              {navigation.map((item) =>
                !item.children ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-cyan-800 text-white'
                        : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className="shrink-0 mr-4 w-6 h-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ) : (
                  <Disclosure as="div" key={item.name} className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            item.current
                              ? 'bg-cyan-800 text-white'
                              : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                            'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md w-full'
                          )}
                        >
                          <item.icon
                            className="shrink-0 mr-4 w-6 h-6 text-cyan-200"
                            aria-hidden="true"
                          />
                          <span className="flex-1 text-left">{item.name}</span>
                          <svg
                            className={classNames(
                              open
                                ? 'text-gray-400 rotate-90'
                                : 'text-gray-300',
                              'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                            )}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {item.children.map((subItem) => (
                            <Disclosure.Button
                              key={subItem.name}
                              as="a"
                              href={subItem.href}
                              className="group text-cyan-100 hover:text-white hover:bg-cyan-600 flex items-center p-2 text-sm leading-6 font-medium rounded-md px-12"
                            >
                              {subItem.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              )}
            </div>
            <div className="pt-6 mt-6">
              <div className="px-2 space-y-1">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center p-2 text-sm font-medium leading-6 text-cyan-100 hover:text-white hover:bg-cyan-600 rounded-md"
                  >
                    <item.icon
                      className="mr-4 w-6 h-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}
