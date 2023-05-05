
import { Link } from 'react-router-dom';

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  SquaresPlusIcon,
  XMarkIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  LockOpenIcon,
  HomeModernIcon,
  WrenchIcon, 
  MagnifyingGlassCircleIcon,
  ClipboardDocumentIcon,
  MapIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  BookOpenIcon,
  ChartBarSquareIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'

const buy = [
  { name: 'Homes For Sale', icon: HomeModernIcon, href: '/homes' },
  { name: 'Open Houses',  icon: LockOpenIcon},
  { name: 'New Construction', icon:  WrenchScrewdriverIcon },
  { name: 'Coming Soon', icon: SquaresPlusIcon },
  { name: 'All Homes', icon: ArrowPathIcon },
]
const sell = [
  { name: 'Explore Options', icon: ChartBarSquareIcon },
  { name: 'Get Estimate',  icon: CurrencyDollarIcon },
  { name: 'Home Values', icon: MapPinIcon },
  { name: 'Sellers Guide', icon: NewspaperIcon },
]
const rent = [
  { name: 'Rental Buildings', icon: BuildingStorefrontIcon },
  { name: 'Apartments For Rent',  icon: BuildingOfficeIcon, href: '/apartments' },
  { name: 'Homes For Rent', icon:  HomeIcon },
  { name: 'All Rental Listings', icon: BookOpenIcon },
]
const agent = [
  { name: 'Real Estate Agents', icon: UserIcon, href: '/agents' },
  { name: 'Property Managers',  icon: ClipboardDocumentIcon },
  { name: 'Home Inspectors', icon:  MagnifyingGlassCircleIcon },
  { name: 'Home Builders', icon: WrenchIcon },
  { name: 'Agent Resources', icon: MapIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {      
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
        <div className='w-full h-[6rem] bg-white-500'>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-start lg:flex-1">
        <Link to={'/'}><img className="h-10 w-auto mr-4" src="/img/logo.png" alt="" /></Link>
        <Link to={'/'}><h1 className='text-[2rem] font-bold text-primary-500'>Mellow</h1></Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>


        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-light leading-6 text-gray-900 hover:text-primary-500 focus:outline-none">
              Buy
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white-500 shadow-lg ring-1 ring-primary-500">
                <div className="p-4">
                  {buy.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-600"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-500 cursor-pointer" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-light hover:text-white cursor-pointer">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-light leading-6 text-gray-900 hover:text-primary-500 focus:outline-none">
              Sell
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white-500 shadow-lg ring-1 ring-primary-500">
                <div className="p-4">
                  {sell.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-600"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-500 cursor-pointer" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-light hover:text-white cursor-pointer">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-light leading-6 text-gray-900 hover:text-primary-500 focus:outline-none">
              Rent
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white-500 shadow-lg ring-1 ring-primary-500">
                <div className="p-4">
                  {rent.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-600"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-500 cursor-pointer" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-light hover:text-white cursor-pointer">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-light leading-6 text-gray-900 hover:text-primary-500 focus:outline-none">
              Find an Agent
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white-500 shadow-lg ring-1 ring-primary-500">
                <div className="p-4">
                  {agent.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-600"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-500 cursor-pointer" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-light hover:text-white cursor-pointer">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to={'/loginreg'}><div className="text-lg font-light leading-6 text-gray-900 cursor-pointer hover:text-primary-500">
            Log in <span aria-hidden="true">&rarr;</span>
          </div></Link>
        </div>
      </nav>

      {/* MOBILE POPOVER MENU */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">      
              <img
                className="h-10 w-auto"
                src="/img/logo.png"
                alt=""
              />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7">
                        Buy
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...buy].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-gray-900 hover:text-primary-500 hover:bg-white-600 cursor-pointer"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 hover:bg-gray-50">
                        Sell
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...sell].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-gray-900 hover:text-primary-500 hover:bg-white-600 cursor-pointer"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 hover:bg-gray-50">
                        Rent
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...rent].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-gray-900 hover:text-primary-500 hover:bg-white-600 cursor-pointer"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 hover:bg-gray-50">
                        Find an Agent
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...agent].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-gray-900 hover:text-primary-500 hover:bg-white-600 cursor-pointer"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              </div>
              <div className="py-6">
                <Link to={'/loginreg'}><p
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-light leading-7 text-gray-900 hover:bg-white-600 hover:text-primary-500 cursor-pointer"
                >
                  Log in &rarr;
                </p></Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
        </div> 
    </div>
  )
}

export default Navbar