import { Menu, Transition } from '@headlessui/react'
import StarsIcon from './icons/StarsIcon'
import { Fragment } from 'react'
import UnderlinedLink from './UnderlinedLink'
import Link from 'next/link'
import HamburgerIcon from './icons/HamburgerIcon'
import PlanetIcon from './icons/PlanetIcon'
import { useDarkMode } from '../contexts/DarkModeProvider'
import Capsule from './Capsule'

const Navbar = props => {
  const { path } = props
  const { toggleDarkMode, isDarkMode } = useDarkMode()
  return (
    <div className="flex items-center p-0 justify-between h-full w-full">
      <div className="flex items-center gap-6">
        <Link href="/">
          <div className="flex-none w-12 h-12 p-2 border-4 border-white dark:border-white rounded-full bg-amber-500 dark:bg-amber-500">
            <PlanetIcon className="text-white dark:text-white h-full w-full" />
          </div>
        </Link>
        <div className="flex flex-col">
          <Link href="/" className="text-lg sm:text-xl">
            Fareea Matahi
          </Link>

          <span className="font-thin text-sm">
            React <span className="self-center">&bull;</span> NodeJS{' '}
            <span className="self-center">&bull;</span> NextJS
          </span>
        </div>
      </div>

      <div className="hidden md:block">
        <ul className="inline-flex gap-4 text-sm lg:text-base">
          <li>
            <UnderlinedLink href="/" path={path}>
              Accueil
            </UnderlinedLink>
          </li>
          <span className="self-center">&bull;</span>
          <li>
            <UnderlinedLink href="/skills" path={path}>
              Compétences
            </UnderlinedLink>
          </li>

          <span className="self-center">&bull;</span>
          <li>
            <UnderlinedLink href="/experiences" path={path}>
              Projets
            </UnderlinedLink>
          </li>
        </ul>
      </div>
      <div>
        <Menu as="div" className="md:hidden inline-block mr-2">
          <div className="border-4 overflow-hidden border-white rounded-lg">
            <Menu.Button
              as="div"
              className="w-8 h-8 dark:bg-amber-500 bg-indigo-300 p-1 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <HamburgerIcon className="w-full h-full" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute flex items-stretch z-50 right-4 mt-2 w-56 origin-top-left rounded-3xl shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
              <Capsule
                className=" w-full text-sm p-2 text-justify"
                centerClassName="w-56"
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={`${
                        active
                          ? 'dark:bg-amber-500/40 bg-indigo-300/40 text-white'
                          : 'text-white'
                      } group pl-10  flex w-full items-center rounded-t-2xl rounded-b-md px-2 py-2 text-sm`}
                    >
                      Accueil
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/skills"
                      className={`${
                        active
                          ? 'dark:bg-amber-500/40 bg-indigo-300/40 text-white'
                          : 'text-white'
                      } group pl-10 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Compétences
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/experiences"
                      className={`${
                        active
                          ? 'dark:bg-amber-500/40 bg-indigo-300/40 text-white'
                          : 'text-white'
                      } group pl-10 flex w-full items-center rounded-b-2xl rounded-t-md px-2 py-2 text-sm`}
                    >
                      Projets
                    </Link>
                  )}
                </Menu.Item>
              </Capsule>
            </Menu.Items>
          </Transition>
        </Menu>
        <div
          className={`inline-block p-1 border-4 border-white dark:border-white ${
            isDarkMode
              ? 'bg-amber-500 hover:bg-amber-400'
              : 'bg-amber-500 hover:bg-amber-400'
          } cursor-pointer rounded-lg w-10 h-10`}
          onClick={toggleDarkMode}
        >
          <StarsIcon className="w-full text-white dark:text-white" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
