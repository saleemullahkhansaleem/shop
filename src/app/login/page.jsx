import Link from "next/link";

const login = () => (
  <div className="py-16 contain">
    <div className="max-w-lg px-6 mx-auto overflow-hidden rounded shadow py-7">
      <h2 className="mb-1 text-2xl font-medium uppercase">Login</h2>
      <p className="mb-6 text-sm text-gray-600">welcome back customer</p>
      <form action="#" method="post" autocomplete="off">
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-600">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 border border-gray-300 rounded focus:ring-0 focus:border-primary"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 border border-gray-300 rounded focus:ring-0 focus:border-primary"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="rounded-sm cursor-pointer text-primary focus:ring-0"
            />
            <label
              htmlFor="remember"
              className="ml-3 text-gray-600 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <Link href="#" className="text-primary">
            Forgot password
          </Link>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto"
          >
            Login
          </button>
        </div>
      </form>

      {/* <!-- login with --> */}
      <div className="relative flex justify-center mt-6">
        <div className="relative z-10 px-3 text-gray-600 uppercase bg-white">
          Or login with
        </div>
        <div className="absolute left-0 w-full border-b-2 border-gray-200 top-3"></div>
      </div>
      <div className="flex gap-4 mt-4">
        <Link
          href="#"
          className="w-1/2 py-2 text-sm font-medium text-center text-white uppercase bg-blue-800 rounded font-roboto hover:bg-blue-700"
        >
          facebook
        </Link>
        <Link
          href="#"
          className="w-1/2 py-2 text-sm font-medium text-center text-white uppercase bg-red-600 rounded font-roboto hover:bg-red-500"
        >
          google
        </Link>
      </div>
      {/* <!-- ./login with --> */}

      <p className="mt-4 text-center text-gray-600">
        Don't have account?{" "}
        <Link href="/register" className="text-primary">
          Register now
        </Link>
      </p>
    </div>
  </div>
);

export default login;
