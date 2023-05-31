const NavButtonGroup = ({ state }) => {
  return (
    <>
      <div className="flex justify-evenly w-full items-center gap-5">
        {state ? (
          <>
            <a
              href="#"
              title="Logout"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-main-800 hover:text-black focus:text-main-900 focus:bg-main-800 font-semibold text-main-900 hover:border-main-800 border-2 border-main-900 bg-transparent rounded-full"
              role="button"
            >
              Logout
            </a>
            <a
              href="#"
              title="My Dashboard"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-main-800 hover:text-black focus:text-black focus:bg-main-700 font-semibold text-black bg-main-900 hover:border-main-800 border-2 border-main-900 rounded-full"
              role="button"
            >
              My Dashboard
            </a>
          </>
        ) : (
          <>
            <a
              href="#"
              title="Login"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-main-800 hover:text-black focus:text-main-900 focus:bg-main-800 font-semibold text-main-900 hover:border-main-800 border-2 border-main-900 bg-transparent rounded-full"
              role="button"
            >
              Login
            </a>
            <a
              href="#"
              title="Register"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-main-800 hover:text-black focus:text-black focus:bg-main-700 font-semibold text-black bg-main-900 hover:border-main-800 border-2 border-main-900 rounded-full"
              role="button"
            >
              Register
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default NavButtonGroup;
