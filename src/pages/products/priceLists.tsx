import { PlusIcon } from '@heroicons/react/outline';

import Main from '@/templates/Main';

export default function Example() {
  return (
    <Main>
      <div className="flex flex-col">
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Price lists
          </h3>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="m-12 my-48 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Personalize wholesale buying with price lists
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Set buyer-specific prices and assign them to the company without
              the use of tags or apps.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Create price list
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
