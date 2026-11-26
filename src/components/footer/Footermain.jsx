import React from 'react'
import Logo from '../repeat-components/Logo'
import { TOLL_FREE, TOLL_FREE_LINK } from '../contactInfo'

const exploreLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tours', href: '#tours' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
]

const socials = [
    { icon: 'ri-facebook-fill', name: 'Facebook', href: '#facebook' },
    { icon: 'ri-instagram-line', name: 'Instagram', href: '#instagram' },
    { icon: 'ri-youtube-fill', name: 'YouTube', href: '#youtube' },
]

const contacts = [
    { icon: 'ri-phone-line', text: `${TOLL_FREE} (Toll Free)`, href: TOLL_FREE_LINK },
    { icon: 'ri-smartphone-line', text: '+91-94192 97657', href: 'tel:+919419297657' },
    { icon: 'ri-mail-line', text: 'contact@themultidestinations.com', href: 'mailto:contact@themultidestinations.com' },
    { icon: 'ri-map-pin-line', text: '1st Floor, Pulloo Complex, Munawara Abad, Srinagar, J&K 190001' },
]

const Footermain = () => {
    return (
        <footer id="contact" className="bg-[#183153] pb-8 pt-14 text-slate-300">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="mb-5">
                            <Logo />
                        </div>
                        <p className="mb-6 max-w-xs text-sm leading-relaxed">
                            Creating unforgettable Kashmir travel experiences since 2010. Your trusted partner for
                            authentic Kashmiri adventures.
                        </p>

                        <div className="flex items-center gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    aria-label={s.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#223e66] text-lg text-white transition hover:bg-blue-600"
                                >
                                    <i className={s.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-5 border-b border-slate-600/50 pb-3 text-xs font-bold uppercase tracking-wider text-white">
                            Explore
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {exploreLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="transition hover:text-white">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 border-b border-slate-600/50 pb-3 text-xs font-bold uppercase tracking-wider text-white">
                            Contact Us
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {contacts.map((c) => (
                                <li key={c.text} className="flex items-start gap-3">
                                    <i className={`${c.icon} text-base text-sky-400`}></i>
                                    {c.href ? (
                                        <a href={c.href} className="break-all transition hover:text-white">
                                            {c.text}
                                        </a>
                                    ) : (
                                        <span className="leading-relaxed">{c.text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-600/50 pt-6 text-xs sm:flex-row">
                    <p>© 2026 Multi Destinations. All rights reserved.</p>
                    <div className="flex items-center gap-3">
                        <a href="#privacy-policy" className="transition hover:text-white">
                            Privacy Policy
                        </a>
                        <span className="text-slate-500">•</span>
                        <a href="#contact" className="transition hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footermain
