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
            Create gift card product
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

          {/* Media */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Media
                </h3>
                <div className="grid">
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-700"></label>
                    <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Denominations */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Denominations
                </h3>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="pr-12 focus:outline-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-7 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        name="compareAtPrice"
                        id="compareAtPrice"
                        className="pr-12 focus:outline-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-7 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span
                          className="text-gray-500 sm:text-sm"
                          id="price-currency"
                        >
                          Price
                        </span>
                      </div>
                    </div>
                  </div>
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

          {/* Metafields */}
          <div className="bg-gray-50 shadow sm:rounded-lg mb-5">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Metafields
              </h3>
              <div className="col-span-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="Available"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Product rating count
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="Available"
                      id="Available"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="Available"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Product rating
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="Available"
                      id="Available"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product status */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Product status
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
                      This product will be hidden from all sales channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SALES CHANNELS AND APPS */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  SALES CHANNELS AND APPS
                </h3>
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

          {/* Product organization */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Product organization
                </h3>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 mt-1 relative rounded-md shadow-sm">
                    <label
                      htmlFor="SKU"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Category
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

                    <p id="candidates-description" className="text-gray-500">
                      Helps you manage products, and determines US tax rates
                      and/or exemptions for this product and its variants. Learn
                      more about product category and taxes.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 mt-1 relative rounded-md shadow-sm">
                    <label
                      htmlFor="SKU"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Vendor
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

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 mt-1 relative rounded-md shadow-sm">
                    <label
                      htmlFor="SKU"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Collections
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

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 mt-1 relative rounded-md shadow-sm">
                    <label
                      htmlFor="SKU"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tags
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

                  <div className="col-span-6 mt-1 relative rounded-md shadow-sm">
                    <label
                      htmlFor="SKU"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gift card template suffix
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
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      This is what customers see when they redeem a gift card.
                    </p>
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
              Save gift card product
            </button>
          </div>
        </form>
      </div>
    </Main>
  );
}
