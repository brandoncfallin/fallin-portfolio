import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi'


function MainNav() {
  const {theme, setTheme} = useTheme();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 dark:bg-gray-900 bg-white text-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="font-inter text-2xl font-semibold leading-relaxed inline-block mr-4 py-3 whitespace-nowrap dark:text-slate-50"
              href="/"
            >
              Brandon Fallin
            </Link>

            <ul className="text-4xl flex items-center dark:text-slate-50 py-1">
              {theme == "dark" ? <BsSunFill onClick={() => {setTheme(theme == "dark" ? "light" : "dark")}} className="p-1 cursor-pointer leading-none border-2 border-solid border-transparent hover:border-slate-50 rounded bg-transparent lg:hidden block" /> : <BsFillMoonFill onClick={() => {setTheme(theme == "dark" ? "light" : "dark")}} className="p-1 cursor-pointer leading-none border-2 border-solid border-transparent rounded bg-transparent hover:border-gray-900 lg:hidden block" />}

              <button
                className="text-grey cursor-pointer text-2xl leading-none px-5 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                <FiMenu />
              </button>
            </ul>


          </div>
          <div
            className={
              "lg:flex flex-grow items-center dark:text-slate-50" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item font-inter font-light">
                <a
                  className="px-3 py-2 flex items-center text-lg leading-snug text-grey-700 hover:opacity-75"
                  href="#"
                >
                  <i className="text-lg leading-lg text-grey-700 opacity-75"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item font-inter font-light">
                <a
                  className="px-3 py-2 flex items-center text-lg leading-snug text-grey-700 hover:opacity-75"
                  href="#"
                >
                  <i className="text-lg leading-lg text-grey-700 opacity-75"></i><span className="ml-2">Gallery</span>
                </a>
              </li>
              <li className="nav-item font-inter font-light">
                <Link
                  className="px-3 py-2 flex items-center text-lg leading-snug text-grey-700 hover:opacity-75"
                  href="/blog"
                >
                  <i className="text-lg leading-lg text-grey-700 opacity-75"></i><span className="ml-2">Blog</span>
                </Link>
              </li>
              <li className="nav-item font-inter font-light">
                <a
                  className="px-3 py-2 flex items-center text-lg leading-snug text-grey-700 hover:opacity-75"
                  href="#"
                >
                  <i className="text-lg leading-lg text-grey-700 opacity-75"></i><span className="ml-2">Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-4xl text-grey-700 hover:opacity-75"
                  href="#"
                >
                  <i className="text-4xl leading-lg text-grey-700 opacity-75"></i>{theme == "dark" ? <BsSunFill onClick={() => {setTheme(theme == "dark" ? "light" : "dark")}} className="p-1 cursor-pointer leading-none border-2 border-solid border-transparent rounded bg-transparent hover:border-slate-50 hidden lg:block" /> : <BsFillMoonFill onClick={() => {setTheme(theme == "dark" ? "light" : "dark")}} className="p-1 cursor-pointer leading-none border-2 border-solid border-transparent rounded bg-transparent hover:border-gray-900 hidden lg:block" />}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default MainNav;