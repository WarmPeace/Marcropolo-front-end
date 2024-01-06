import { ScaleIcon } from '@heroicons/react/outline';
import {
  CashIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid';

import Main from '@/templates/Main';

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
];
type ITransactionsType = {
  id: number;
  name: string;
  href: string;
  amount: string;
  currency: string;
  status: 'success' | 'processing' | 'failed';
  date: string;
  datetime: string;
};
const transactions: ITransactionsType[] = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
];
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  return (
    <Main>
      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8 lg:mx-auto lg:max-w-6xl">
          <div className="py-6 md:flex md:justify-between md:items-center">
            <div className="flex-1 min-w-0">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden w-16 h-16 rounded-full sm:block"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="w-16 h-16 rounded-full sm:hidden"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      Good morning, Emilia Birch
                    </h1>
                  </div>
                  <dl className="flex flex-col mt-6 sm:flex-row sm:flex-wrap sm:mt-1 sm:ml-3">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center text-sm font-medium text-gray-500 capitalize sm:mr-6">
                      <OfficeBuildingIcon
                        className="shrink-0 mr-1.5 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Duke street studio
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="flex items-center mt-3 text-sm font-medium text-gray-500 capitalize sm:mt-0 sm:mr-6">
                      <CheckCircleIcon
                        className="shrink-0 mr-1.5 w-5 h-5 text-green-400"
                        aria-hidden="true"
                      />
                      Verified account
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="flex mt-6 space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 shadow-sm"
              >
                Add money
              </button>
              <button
                type="button"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 shadow-sm"
              >
                Send money
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Overview
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden bg-white rounded-lg shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <card.icon
                        className="w-6 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 ml-5 w-0">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {card.amount}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="py-3 px-5 bg-gray-50">
                  <div className="text-sm">
                    <a
                      href={card.href}
                      className="font-medium text-cyan-700 hover:text-cyan-900"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mx-auto mt-8 max-w-6xl text-lg font-medium leading-6 text-gray-900 ">
          Recent activity
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="overflow-hidden mt-2 divide-y divide-gray-200 shadow sm:hidden"
          >
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <a
                  href={transaction.href}
                  className="block p-4 bg-white hover:bg-gray-50"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex flex-1 space-x-2 truncate">
                      <CashIcon
                        className="shrink-0 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col text-sm text-gray-500 truncate">
                        <span className="truncate">{transaction.name}</span>
                        <span>
                          <span className="font-medium text-gray-900">
                            {transaction.amount}
                          </span>{' '}
                          {transaction.currency}
                        </span>
                        <time dateTime={transaction.datetime}>
                          {transaction.date}
                        </time>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="shrink-0 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <nav
            className="flex justify-between items-center py-3 px-4 bg-white border-t border-gray-200"
            aria-label="Pagination"
          >
            <div className="flex flex-1 justify-between">
              <a
                href="#"
                className="inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-700 hover:text-gray-500 bg-white rounded-md border border-gray-300"
              >
                Previous
              </a>
              <a
                href="#"
                className="inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-gray-700 hover:text-gray-500 bg-white rounded-md border border-gray-300"
              >
                Next
              </a>
            </div>
          </nav>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col mt-2">
              <div className="overflow-hidden overflow-x-auto min-w-full align-middle shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Transaction
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                        Amount
                      </th>
                      <th className="hidden py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block">
                        Status
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="bg-white">
                        <td className="py-4 px-6 w-full max-w-0 text-sm text-gray-900 whitespace-nowrap">
                          <div className="flex">
                            <a
                              href={transaction.href}
                              className="group inline-flex space-x-2 text-sm truncate"
                            >
                              <CashIcon
                                className="shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <p className="text-gray-500 group-hover:text-gray-900 truncate">
                                {transaction.name}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-right text-gray-500 whitespace-nowrap">
                          <span className="font-medium text-gray-900">
                            {transaction.amount}{' '}
                          </span>
                          {transaction.currency}
                        </td>
                        <td className="hidden py-4 px-6 text-sm text-gray-500 whitespace-nowrap md:block">
                          <span
                            className={classNames(
                              statusStyles[transaction.status],
                              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                            )}
                          >
                            {transaction.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-right text-gray-500 whitespace-nowrap">
                          <time dateTime={transaction.datetime}>
                            {transaction.date}
                          </time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className="flex justify-between items-center py-3 px-4 bg-white border-t border-gray-200 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to{' '}
                      <span className="font-medium">10</span> of{' '}
                      <span className="font-medium">20</span> results
                    </p>
                  </div>
                  <div className="flex flex-1 justify-between sm:justify-end">
                    <a
                      href="#"
                      className="inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
