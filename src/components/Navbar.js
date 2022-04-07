import React, { useState } from 'react'
import logo from '../images/logo.svg'
import cartIcon from '../images/icon-cart.svg'
import imageAvatar from '../images/image-avatar.png'
import imageOne from '../images/image-product-1.jpg'
import iconDelete from '../images/icon-delete.svg'
import iconMenu from '../images/icon-menu.svg'
import iconClose from '../images/icon-close.svg'
import CartSvg from './CartSvg'

const Navbar = () => {
    const [cartDropdown, setCartDropdown] = useState(false)
    const [sidebar, setSidebar] = useState(false)
  return (
    <div className="flex mb-6">
      {/* for mobile */}
      <img
        onClick={() => setSidebar(true)}
        className="block lg:hidden h-4 mr-3 md:ml-24"
        src={iconMenu}
        alt="iconMenu"
      />

      {sidebar && (
        <div class="flex flex-col w-64 h-screen px-4 py-5 bg-white border-r dark:bg-gray-800 dark:border-gray-600 absolute z-40">
          <img
            onClick={() => setSidebar(false)}
            className="w-4 ml-7"
            src={iconClose}
            alt="iconClose"
          />
          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <a
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span class="mx-4 font-medium">Collections</span>
              </a>

              <a
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span class="mx-4 font-medium">Men</span>
              </a>

              <a
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span class="mx-4 font-medium">Women</span>
              </a>

              <a
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span class="mx-4 font-medium">About</span>
              </a>

              <a
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span class="mx-4 font-medium">Contact</span>
              </a>
            </nav>
          </div>
        </div>
      )}

      <img className="lg:h-6 h-4 w-16 lg:w-20 mr-12 md:mr-80 lg:mr-16" src={logo} alt="logo" />

      {/* for laptop */}

      <ul className="lg:flex text-[#666] mr-52 hidden">
        <li className="mr-4">
          <button>Collections</button>
        </li>
        <li className="mr-4">
          <button>Men</button>
        </li>
        <li className="mr-4">
          <button>Women</button>
        </li>
        <li className="mr-4">
          <button>About</button>
        </li>
        <li className="mr-4">
          <button>Contact</button>
        </li>
      </ul>
      <div className="flex lg:0 ml-24">
        <div
          onClick={() => setCartDropdown(!cartDropdown)}
          className=" relative lg:h-6 h-4 mr-5 lg:mr-8 mt-1 lg:mt-2 cursor-pointer"
        >
          <CartSvg type="black" />
        </div>
        {/* <img
          onClick={() => setCartDropdown(!cartDropdown)}
          className=" relative lg:h-6 h-4 mr-5 lg:mr-8 mt-1 lg:mt-2 cursor-pointer"
          src={cartIcon}
          alt="cartIcon"
        /> */}
        <img className="lg:w-10 w-6" src={imageAvatar} alt="imageAvatar" />
      </div>

      {cartDropdown && (
        <div class="absolute top-16 right-8 lg:right-32 lg:top-32 z-20 w-72 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
          <div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            Cart
          </div>
          <hr />
          <div className="p-2">
            <div className="flex mb-2">
              <img
                className="w-[44px] rounded-lg mr-2"
                src={imageOne}
                alt="imageOne"
              />
              <p className="mr-1">
                Fall Limited Edition Sneakers $125.00 * 3: $375.00
              </p>
              <img
                className="w-6 h-4 my-auto"
                src={iconDelete}
                alt="iconDelete"
              />
            </div>
            <button className="bg-orange-500 py-2 w-full rounded-lg text-white">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar