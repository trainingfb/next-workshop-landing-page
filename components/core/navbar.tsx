// components/core/navbar.tsx
'use client';

import { useCart } from '@/store/cart.store';
import { LanguageContext } from '@/store/LanguageContextProvider';
import { ProfileContext } from '@/store/ProfileContextProvider';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

export default function Navbar() {
  const pathname = usePathname()

  /*NEW*/
  const totalCartItems = useCart(state => state.list.length)
  const { language } = useContext(LanguageContext);
  const { state, dispatch } = useContext(ProfileContext);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="text-3xl text-black dark:text-white">
             Next 14 Demo
            </h1>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  aria-current="page"
                  className={clsx(
                    { 'active': pathname === '/' },
                    'nav-item',
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={clsx(
                    { 'active': pathname === '/about' },
                    'nav-item',
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={clsx(
                    { 'active': pathname.includes('/shop') },
                    'nav-item',
                  )}
                >
                  Shop
                </Link>
              </li>

              {/*NEW*/}

              <li className="bg-pink-600 px-3 rounded-xl">
                <Link href="/demo-context">
                  {totalCartItems} | {language === 'it' ? '🇮🇹' : '🇬🇧'}
                  - { state.email } | { state.username }
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
};

