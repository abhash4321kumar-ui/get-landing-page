import React, { useEffect, useState } from 'react'
import Logo from './repeat-components/Logo'
import { TOLL_FREE, TOLL_FREE_LINK, whatsappLink } from './contactInfo'

const links = [
    { name: 'home', href: '#home' },
    { name: 'tours', href: '#tours' },
    { name: 'destinations', href: '#destinations' },
    { name: 'reviews', href: '#reviews' },
    { name: 'contact', href: '#contact' },
]

const Navbar = () => {
    const [scrollvalue, setscrollvalue] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setscrollvalue(window.scrollY > 25)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        // component hat jaye to listener bhi hata do
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Navbar fixed hai, isliye ye poore page par rahega (sirf home section tak nahi)
    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full text-white transition-all duration-300 ${
                scrollvalue || menuOpen ? 'bg-[#0A2143]/95 shadow-lg backdrop-blur' : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
                <Logo />

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 lg:flex">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative text-base font-medium capitalize text-white/90 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop phone + button */}
                <div className="hidden items-center gap-5 lg:flex">
                    <a href={TOLL_FREE_LINK} className="flex items-center gap-2 text-base font-medium">
                        <i className="ri-phone-line"></i>
                        {TOLL_FREE}
                    </a>
                    <a
                        href={whatsappLink('Hi, I want a Kashmir tour itinerary.')}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 px-5 py-2.5 text-sm font-semibold capitalize shadow-lg transition hover:-translate-y-0.5"
                    >
                        <i className="ri-calendar-line pr-2"></i>get itinerary
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-2xl lg:hidden cursor-pointer"
                >
                    <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="border-t border-white/10 px-4 pb-6 pt-2 lg:hidden">
                    <ul className="flex flex-col">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block border-b border-white/10 py-3 text-lg capitalize"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-5 flex flex-col gap-3">
                        <a href={TOLL_FREE_LINK} className="flex items-center justify-center gap-2 rounded-xl border border-white/30 py-3">
                            <i className="ri-phone-line"></i> {TOLL_FREE}
                        </a>
                        <a
                            href={whatsappLink('Hi, I want a Kashmir tour itinerary.')}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 py-3 text-center font-semibold"
                        >
                            <i className="ri-calendar-line pr-2"></i>Get Itinerary
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
