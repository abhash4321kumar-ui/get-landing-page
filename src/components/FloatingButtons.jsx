import React, { useEffect, useState } from 'react'
import { TOLL_FREE_LINK, whatsappLink } from './contactInfo'

// Side me fixed WhatsApp + Call buttons, aur neeche scroll karne par "upar jao" button
const FloatingButtons = () => {
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 500)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-3 md:right-6">
            {/* Scroll to top */}
            <a
                href="#home"
                aria-label="Back to top"
                className={`flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2143] text-xl text-white shadow-lg transition-all duration-300 hover:bg-blue-700 ${
                    showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                }`}
            >
                <i className="ri-arrow-up-line"></i>
            </a>

            {/* WhatsApp */}
            <a
                href={whatsappLink('Hi, I want to plan a Kashmir trip!')}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-xl transition hover:scale-110"
            >
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"></span>
                <i className="ri-whatsapp-line relative"></i>
                <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0A2143] px-3 py-1.5 text-sm font-medium opacity-0 transition group-hover:opacity-100 md:block">
                    Chat on WhatsApp
                </span>
            </a>

            {/* Call */}
            <a
                href={TOLL_FREE_LINK}
                aria-label="Call us"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-xl transition hover:scale-110"
            >
                <i className="ri-phone-fill"></i>
                <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0A2143] px-3 py-1.5 text-sm font-medium opacity-0 transition group-hover:opacity-100 md:block">
                    Call 1800 889 0856
                </span>
            </a>
        </div>
    )
}

export default FloatingButtons
