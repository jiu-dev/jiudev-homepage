import { Menu, Transition } from '@headlessui/react'
import StarsIcon from './icons/StarsIcon'
import { Fragment, forwardRef } from 'react'
import UnderlinedLink from './UnderlinedLink'
import Link from 'next/link'
import SaturneIcon from './icons/SaturneIcon'
import HamburgerIcon from './icons/HamburgerIcon'
import PlanetIcon from './icons/PlanetIcon'

const Navbar = props => {
  const { path } = props
  return (
    <div className="flex items-center justify-between h-full w-full">
      <div className="flex items-center justify-start gap-6">
        <div className="w-14 h-14 p-2 border-4 border-white rounded-full bg-amber-500 ">
          <PlanetIcon className="text-white w-10 sm:w-full" />
        </div>
        <div className="flex flex-col">
          <a href="/" className="text-lg text-white sm:text-xl">
            Fareea Matahi
          </a>

          <span className="font-thin text-sm">
            React <span className="self-center">&bull;</span> NodeJS{' '}
            <span className="self-center">&bull;</span> NextJS
          </span>
        </div>
      </div>

      <div className="hidden md:block">
        <ul className="inline-flex gap-4">
          <li>
            <UnderlinedLink href="/" path={path}>
              Accueil
            </UnderlinedLink>
          </li>
          <span className="self-center">&bull;</span>
          <li>
            <UnderlinedLink href="/portfolio" path={path}>
              Portfolio
            </UnderlinedLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Menu as="div" className=" md:hidden block ">
          <div>
            <Menu.Button className="inline-flex w-10 h-10 justify-center border-4 border-white rounded-lg bg-indigo-300 p-1 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <HamburgerIcon />
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
            <Menu.Items className="absolute flex items-stretch z-50 right-4 mt-2 w-56 origin-top-left rounded-3xl bg-indigo-300/40 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
              <div className="w-10 self-stretch">
                <div className="w-10 h-full bg-indigo-300/40 border-l-4 border-y-4 border-white rounded-tl-3xl rounded-bl-3xl"></div>
              </div>
              <div className="bg-indigo-300/40">
                <div className="-ml-10 -mr-10 flex z-10 w-56">
                  <span
                    className={`block w-full text-sm p-2 text-justify ${props.className}`}
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active
                              ? 'bg-indigo-300/40 text-white'
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
                          href="/portfolio"
                          className={`${
                            active
                              ? 'bg-indigo-300/40 text-white'
                              : 'text-white'
                          } group pl-10 flex w-full items-center rounded-b-2xl rounded-t-md px-2 py-2 text-sm`}
                        >
                          Portfolio
                        </Link>
                      )}
                    </Menu.Item>
                  </span>
                </div>
              </div>
              <div className="w-10 self-stretch">
                <div className="w-10 h-full bg-indigo-300/40 border-r-4 border-y-4 border-white rounded-tr-3xl rounded-br-3xl"></div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="p-1 border-4 border-white bg-amber-500 rounded-lg w-10 h-10 ">
          <StarsIcon className="w-full text-white" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
