import Link from "next/link";

const checkout = () => (
  <div className="container grid items-start grid-cols-12 gap-6 pt-4 pb-16">
    <div className="col-span-8 p-4 border border-gray-200 rounded">
      <h3 className="mb-4 text-lg font-medium capitalize">Checkout</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="text-gray-600">
              First Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-gray-600">
              Last Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="input-box"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="text-gray-600">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="region" className="text-gray-600">
            Country/Region
          </label>
          <input type="text" name="region" id="region" className="input-box" />
        </div>
        <div>
          <label htmlFor="address" className="text-gray-600">
            Street address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="city" className="text-gray-600">
            City
          </label>
          <input type="text" name="city" id="city" className="input-box" />
        </div>
        <div>
          <label htmlFor="phone" className="text-gray-600">
            Phone number
          </label>
          <input type="text" name="phone" id="phone" className="input-box" />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-600">
            Email address
          </label>
          <input type="email" name="email" id="email" className="input-box" />
        </div>
        <div>
          <label htmlFor="company" className="text-gray-600">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="input-box"
          />
        </div>
      </div>
    </div>

    <div className="col-span-4 p-4 border border-gray-200 rounded">
      <h4 className="mb-4 text-lg font-medium text-gray-800 uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            <h5 className="font-medium text-gray-800">Italian shape sofa</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x3</p>
          <p className="font-medium text-gray-800">$320</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="font-medium text-gray-800">Italian shape sofa</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x3</p>
          <p className="font-medium text-gray-800">$320</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="font-medium text-gray-800">Italian shape sofa</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x3</p>
          <p className="font-medium text-gray-800">$320</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="font-medium text-gray-800">Italian shape sofa</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x3</p>
          <p className="font-medium text-gray-800">$320</p>
        </div>
      </div>

      <div className="flex justify-between py-3 mt-1 font-medium text-gray-800 border-b border-gray-200 uppercas">
        <p>subtotal</p>
        <p>$1280</p>
      </div>

      <div className="flex justify-between py-3 mt-1 font-medium text-gray-800 border-b border-gray-200 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between py-3 font-medium text-gray-800 uppercas">
        <p className="font-semibold">Total</p>
        <p>$1280</p>
      </div>

      <div className="flex items-center mt-2 mb-4">
        <input
          type="checkbox"
          name="aggrement"
          id="aggrement"
          className="w-3 h-3 rounded-sm cursor-pointer text-primary focus:ring-0"
        />
        <label
          htmlFor="aggrement"
          className="ml-3 text-sm text-gray-600 cursor-pointer"
        >
          I agree to the{" "}
          <Link href="#" className="text-primary">
            terms & conditions
          </Link>
        </label>
      </div>

      <Link
        href="#"
        className="block w-full px-4 py-3 font-medium text-center text-white transition border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary"
      >
        Place order
      </Link>
    </div>
  </div>
);

export default checkout;
