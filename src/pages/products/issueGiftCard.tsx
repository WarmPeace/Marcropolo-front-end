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
            Giftcards Issue gift card
          </h3>
        </div>
        <form action="#" method="POST">
          {/* Title && Description */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Gift card details
                </h3>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gift card code
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      value="wc8hxgkm8d38kp3r"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="initial"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Initial value
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        name="initial"
                        id="initial"
                        className="pr-12 focus:outline-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-7 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expiration date */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Expiration date
                </h3>
                <div className="grid">
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Countries have different laws for gift card expiry dates.
                    Check the laws for your country before changing this date.
                  </p>
                  <div className="flex items-center p-1">
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
                  <div className="flex items-center p-1">
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
                </div>
              </div>
            </div>
          </div>

          {/* Find or create a customer */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Find or create a customer
                </h3>

                <p>
                  To send the gift card code, add a customer with an email
                  address or phone number.
                </p>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      placeholder="Search customers"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white shadow sm:rounded-lg mb-5">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Notes
                </h3>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      placeholder="Add a note"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <p id="candidates-description" className="text-gray-500">
                      These notes are private and won't be shared with the
                      customer.
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
              Activate
            </button>
          </div>
        </form>
      </div>
    </Main>
  );
}
