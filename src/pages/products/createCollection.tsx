import Main from '@/templates/Main';

export default function Example() {
  return (
    <Main>
      <div className="flex flex-col">
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            <a
              type="button"
              href="/products/collections"
              className="mx-2 inline-flex items-center p-1.5 border border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:rounded-lg"
            >
              &larr;
            </a>
            Create collection
          </h3>
        </div>
        <form action="#" method="POST">
          {/* Title && Description */}
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
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder=""
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collection type */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Collection type
                </h3>
                <div className="grid">
                  <div className="flex items-center">
                    <input
                      id="push-manual"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="push-manual" className="ml-3">
                      <span className="block text-sm font-medium text-gray-700">
                        Manual
                      </span>
                    </label>
                  </div>
                  <p className="px-7 mt-1 max-w-2xl text-sm text-gray-500">
                    Add products to this collection one by one. Learn more about
                    manual collections.
                  </p>
                  <div className="flex items-center">
                    <input
                      id="push-automated"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="push-automated" className="ml-3">
                      <span className="block text-sm font-medium text-gray-700">
                        Automated
                      </span>
                    </label>
                  </div>
                  <p className="px-7 mt-1 max-w-2xl text-sm text-gray-500">
                    Existing and future products that match the conditions you
                    set will automatically be added to this collection. Learn
                    more about automated collections.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search engine listing */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Search engine listing
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Add a title and description to see how this product might
                  appear in a search engine listing
                </p>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Page title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Meta description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder=""
                      defaultValue={''}
                    />
                    <p id="candidates-description" className="text-gray-500">
                      0 of 320 characters used
                    </p>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      URL handle
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        https://marcopolo-dev.myshopify.com/admin/products
                      </span>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="mt-1 block border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collection availability */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Collection availability
                </h3>

                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Will be available to 2 sales channels.
                </p>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <div className="flex items-center">
                      <input
                        id="track"
                        name="track"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="track"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Online Store
                      </label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center">
                      <input
                        id="continue"
                        name="continue"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="continue"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Jioukou
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collection image */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Collection image
                </h3>
                <button
                  type="button"
                  className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                    />
                  </svg>
                  <span className="mt-2 block text-sm font-medium text-gray-900">
                    Add image or drop an image to upload
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Online Store */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Online Store
                </h3>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 mt-1 relative rounded-md shadow-sm">
                    <label
                      htmlFor="SKU"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Theme template
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="pr-12 focus:outline-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      defaultValue="Canada"
                    >
                      <option>Active</option>
                      <option>Draft</option>
                    </select>
                  </div>
                </div>
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
