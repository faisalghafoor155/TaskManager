/** @format */

import Logo from "../../../public/Assets/comrex_logo.svg";

function Login() {
  return (
    <div className="flex items-center ">
      <div className=" bg-white   p-8 rounded shadow-lg">
        <img
          src={Logo}
          alt="Comrex Logo"
          width={50}
          height={50}
          className="mx-auto mb-4"
        />
        <form className="flex justify-center items flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <label htmlFor="email1" className="font-semibold">
                Your email
              </label>
            </div>
            <input
              id="email1"
              type="email"
              placeholder="@comrex.pk"
              required
              className="textInput w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="password1" className="font-semibold">
                Your password
              </label>
            </div>
            <input
              id="password1"
              type="password"
              required
              className="textInput w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="checkbox" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
