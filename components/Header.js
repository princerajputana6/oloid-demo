'use client';

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import oloid_logo from "../Assets/img/oloid_logo.svg"


const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const companyList = [
  { title: "company first", url: "/" },
  { title: "company second", url: "/" },
  { title: "company third", url: "/" },
  { title: "company fourth", url: "/" },
];
const productList = [
  { title: "product fourth", url: "/" },
  { title: "product first", url: "/" },
  { title: "product second", url: "/" },
  { title: "product third", url: "/" },
];
const solutionsList = [
  { title: "solution first", url: "/" },
  { title: "solution second", url: "/" },
  { title: "solution third", url: "/" },
  { title: "solution fourth", url: "/" },
];
const ResourcesList = [
  { title: "resources first", url: "/" },
  { title: "resources second", url: "/" },
  { title: "resources third", url: "/" },
  { title: "resources fourth", url: "/" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-10 py-[20px] ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 px-4" aria-label="Global">
        <div className='flex items-center gap-x-[2.5rem]'>
          <div className="flex lg:flex-1 ml-[10px]">
            <a href="#" className="-m-1.5 p-1.5">
              <Image src={oloid_logo} class="h-8 mr-3" alt="Flowbite Logo" height={100} width={100} />
            </a>
          </div>

          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1.5 text-[1rem] font-semibold leading-6 text-[#233650]">
                Company
                <ChevronDownIcon className="h-5 w-5 flex-none text-[#2265B0]" aria-hidden="true" />
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
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-48 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {companyList.map((item) => (
                      <div
                        key={item.title}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-[1rem] leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a href={item.url} className="block font-semibold text-[#233650]">
                            {item.title}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1.5 text-[1rem]  font-semibold leading-6 text-[#233650]">
                Product
                <ChevronDownIcon className="h-5 w-5 flex-none text-[#2265B0]" aria-hidden="true" />
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
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-48 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {productList.map((item) => (
                      <div
                        key={item.title}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-[1rem] leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a href={item.url} className="block font-semibold text-[#233650]">
                            {item.title}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1.5 text-[1rem] font-semibold leading-6 text-[#233650]">
                Solutions
                <ChevronDownIcon className="h-5 w-5 flex-none text-[#2265B0]" aria-hidden="true" />
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
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-48 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {solutionsList.map((item) => (
                      <div
                        key={item.title}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-[1rem] leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a href={item.url} className="block font-semibold text-[#233650]">
                            {item.title}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1.5 text-[1rem] font-semibold leading-6 text-[#233650]">
                Resources
                <ChevronDownIcon className="h-5 w-5 flex-none text-[#2265B0]" aria-hidden="true" />
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
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-48 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {ResourcesList.map((item) => (
                      <div
                        key={item.title}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-[1rem] leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a href={item.url} className="block font-semibold text-[#233650]">
                            {item.title}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>

        </div>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button class="bg-[#2265B0] py-3.5 px-[26px] rounded-full text-[1rem] font-semibold leading-[1.1rem] text-[#fff] avenirBlack">Contact Us</button>
        </div>
        <div className="flex lg:hidden">

        <button class="bg-[#2265B0] py-3.5 mr-4 px-[26px] rounded-full text-[1rem] font-semibold leading-[1.1rem] text-[#fff] avenirBlack">Contact Us</button>

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"> <path d="M1 3h14v2h-14v-2z"></path> <path d="M1 7h14v2h-14v-2z"></path> <path d="M1 11h14v2h-14v-2z"></path> </svg>
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden bg-[#f1f6f9]" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed bg-[#f1f6f9] inset-0 z-10" />
        <Dialog.Panel className="bg-[#f1f6f9] fixed inset-y-0 right-0 z-10 w-full overflow-y-aut px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">

              <Image src={oloid_logo} class="h-8 mr-3" alt="Flowbite Logo" height={100} width={100} />
            </a>
            
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 bg-[#fff] p-4  flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-[#233650] hover:bg-gray-50 AvenirBlack">
                        Company
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {companyList.map((item) => (
                          <Disclosure.Button
                            key={item.title}
                            as="a"
                            href={item.url}
                            className="block rounded-lg py-2 pl-6 pr-3 text-[1rem] font-semibold leading-7 text-[#233650] hover:bg-gray-50"
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#233650] hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {productList.map((item) => (
                          <Disclosure.Button
                            key={item.title}
                            as="a"
                            href={item.url}
                            className="block rounded-lg py-2 pl-6 pr-3 text-[1rem] font-semibold leading-7 text-[#233650] hover:bg-gray-50"
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#233650] hover:bg-gray-50">
                        Solutions
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {solutionsList.map((item) => (
                          <Disclosure.Button
                            key={item.title}
                            as="a"
                            href={item.url}
                            className="block rounded-lg py-2 pl-6 pr-3 text-[1rem] font-semibold leading-7 text-[#233650] hover:bg-gray-50"
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#233650] hover:bg-gray-50">
                        Resources
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180 text-[#2265B0]' : '', 'h-5 w-5 flex-none text-[#2265B0]')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {ResourcesList.map((item) => (
                          <Disclosure.Button
                            key={item.title}
                            as="a"
                            href={item.url}
                            className="block rounded-lg py-2 pl-6 pr-3 text-[1rem] font-semibold leading-7 text-[#233650] hover:bg-gray-50"
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
