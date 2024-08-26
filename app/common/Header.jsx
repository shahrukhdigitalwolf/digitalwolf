'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  CursorArrowRaysIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  FingerPrintIcon,
  PresentationChartBarIcon,
  VideoCameraIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  { name: 'Digital Marketing', description: 'Get a better understanding of your traffic', href: '/digital-marketing-services', icon: ChartPieIcon },
  { name: 'SEO Services', description: 'Speak directly to your customers', href: '/seo-services', icon: PresentationChartBarIcon },
  { name: 'SMO Services', description: 'Your customers’ data will be safe and secure', href: '/smo-services', icon: FingerPrintIcon },
  { name: 'Website Development', description: 'Connect with third-party tools', href: '/website-development', icon: CodeBracketIcon },
  { name: 'PPC Marketing', description: 'Build strategic funnels that will convert', href: '/ppc-marketing-services', icon: CursorArrowRaysIcon },
  { name: 'Mobile App Development', description: 'Build strategic funnels that will convert', href: '/mobile-app-development-company', icon: DevicePhoneMobileIcon },
  { name: 'Logo & Graphic Design', description: 'Build strategic funnels that will convert', href: '/logo-graphic-design', icon: ComputerDesktopIcon },
  { name: 'Facebook Ad Services', description: 'Build strategic funnels that will convert', href: '/facebook-ad-services', icon: VideoCameraIcon },
  { name: 'Content Writing Services', description: 'Build strategic funnels that will convert', href: '/content-writing-services', icon: ClipboardDocumentListIcon },
  { name: 'Software Development', description: 'Build strategic funnels that will convert', href: '/software-development-company', icon: CommandLineIcon },
  { name: 'Bulk Message Services', description: 'Build strategic funnels that will convert', href: '/bulk-message-services', icon: EnvelopeIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false); // State for Popover open

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setStickyHeader(window.scrollY > headerRef.current.offsetTop);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header ref={headerRef} className={`bg-transparent w-[100%] ${stickyHeader ? 'sticky' : ''}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="" src="/img/dw-logo.png" className="h-8 w-auto" width={40} height={50} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 py-5">
            Home
          </Link>
          <Link href="/about-us" className="text-sm font-semibold leading-6 text-gray-900 py-5">
            About Us
          </Link>
          <Popover
            className="relative"
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
          >
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 group py-5">
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              static
              className={`absolute -left-72 top-full z-[99] w-[50rem] max-w-[50rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-opacity duration-300 ${popoverOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="p-4 grid grid-cols-2">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/events" className="text-sm font-semibold leading-6 text-gray-900 py-5">
            Happy To Share
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 py-5">
            Blog
          </Link>
          <Link href="/contact-us" className="text-sm font-semibold leading-6 text-gray-900 py-5">
            Contact Us
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-[99]" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[99] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src="/img/dw-logo.png" className="h-8 w-auto" width={40} height={50} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Happy To Share
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}