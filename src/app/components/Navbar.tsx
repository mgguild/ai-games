

const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-gray-200 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-16">

        </div>
        <div className="md:hidden block absolute top-4 right-8">
          <button
            aria-label="navigation"
            type="button"
            className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
          >
            <i className="fas fa-bars text-3xl" id="bars"></i>{" "}
          </button>
        </div>
        <div className="hidden md:flex">

        </div>
        <div className="hidden md:flex"></div>
      </div>
      <div id="mobileMenu" className="hidden w-full mx-auto py-8 text-center">
        <div className="flex flex-col justify-center items-center w-full">
          <a
            href="#"
            className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white"
          >
            Games
          </a>
          <a
            href="#"
            className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
