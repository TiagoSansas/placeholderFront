'use client';
import { useTheme } from '@/app/hooks/useTheme';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';

interface NavbarProps {
  children: ReactNode;
}

export function NavbarRoot({ children }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <nav className='border-gray-200 bg-white  dark:bg-gray-900'>
      <div className=' mx-auto flex max-w-screen-xl flex-wrap justify-between p-4'>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          aria-controls='navbar-default'
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          <Bars3Icon />
        </button>

        <div
          className={`w-full ${
            menuOpen ? 'block' : 'hidden'
          } md:block md:w-auto`}
          id='navbar-default'
        >
          <ul className='flex flex-col items-start rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
            {children}
          </ul>
        </div>
        <div className='h-6 w-6 self-center '>
          {theme ? (
            <SunIcon
              className='cursor-pointer dark:text-white'
              onClick={() => setTheme((prev: boolean) => !prev)}
            />
          ) : (
            <MoonIcon
              className='cursor-pointer '
              onClick={() => setTheme((prev: boolean) => !prev)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
