import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

const Header = () => (
    <header class="mb-4">
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">
                    Preact + Tailwind
                </span>
            </div>
            <div class="block md:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                        class="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="w-full block flex-grow md:flex md:items-center md:w-auto text-right">
                <div class="text-sm md:flex-grow">
                    <Link
                        href="/"
                        activeClassName="font-bold"
                        class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        activeClassName="font-bold"
                        class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        About
                    </Link>
                </div>
                <div>
                    <a
                        href="#"
                        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0"
                    >
                        Github
                    </a>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
