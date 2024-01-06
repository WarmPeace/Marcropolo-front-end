import Main from '@/templates/Main';

export default function Example() {
  return (
    <Main>
      <div className="flex flex-col">
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            <button
              type="button"
              className="mx-2 inline-flex items-center p-1.5 border border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:rounded-lg"
            >
              &larr;
            </button>
            Create company price list
          </h3>
        </div>
        <form action="#" method="POST">
          {/* Title */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <p id="candidates-description" className="text-gray-500">
                      B2B customers won't see this.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Pricing
                </h3>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2 mt-1 relative rounded-md">
                    <p>Currency</p>
                    <p className="text-4xl">USD $</p>
                    <p>US Dollar</p>
                  </div>
                  <div className="col-span-4 mt-1 relative rounded-md border-l pl-5">
                    <label htmlFor="location">Overall adjustment</label>
                    <select
                      id="location"
                      name="location"
                      className="pr-12 focus:outline-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      defaultValue="Canada"
                    >
                      <option>Active</option>
                      <option>Draft</option>
                    </select>
                    <p id="candidates-description" className="text-gray-500">
                      Does not apply to fixed prices
                    </p>
                  </div>
                </div>

                <div className="relative col-span-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>

                <p className="pt-5">INDIVIDUAL ADJUSTMENTS</p>

                <p id="candidates-description" className="text-gray-500">
                  No fixed prices for products or variants
                </p>
              </div>
            </div>
          </div>

          {/* Companies */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Companies
                </h3>

                <p id="candidates-description" className="text-gray-500">
                  You haven't created any companies yet. Create a company
                </p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Status
                </h3>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 mt-1 relative rounded-md shadow-sm">
                    <select
                      id="location"
                      name="location"
                      className="pr-12 focus:outline-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      defaultValue="Canada"
                    >
                      <option>Active</option>
                      <option>Draft</option>
                    </select>

                    <p id="candidates-description" className="text-gray-500">
                      Price list will be hidden from all locations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THIS PRICE LIST CONTAINS ALL PRODUCTS */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <p>THIS PRICE LIST CONTAINS ALL PRODUCTS</p>

                <p id="candidates-description" className="text-gray-500">
                  Price list will be hidden from all locations
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Main>
  );
}
