import React from 'react'
import Buttonblue from './repeat-components/Buttonblue'
import { TOLL_FREE, TOLL_FREE_LINK, whatsappLink } from './contactInfo'

const stats = [
    { value: '500+', label: 'Tours Completed' },
    { value: '5★', label: 'Google Rating' },
    { value: '2010', label: 'Established Since' },
    { value: '24x7', label: 'Support Available' },
]

const Lefttop = () => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold leading-tight text-[#0A2143] sm:text-5xl lg:text-6xl">
                Discover the <br />
                <span className="text-[#29AB5F]">Heaven on Earth</span> <br />- Kashmir Awaits
            </h1>

            <p className="max-w-xl text-base text-[#0A2143] sm:text-lg">
                Handcrafted Kashmir tour packages with 5★ service. Dal Lake, Gulmarg, Pahalgam, Sonmarg - every moment
                unforgettable. Starting <span className="font-semibold text-[#356EEB]">₹8,500/person.</span>
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Buttonblue value="View Tour Packages" iconvalue="ri-arrow-down-s-line" href="#tours" />
                <a
                    href={TOLL_FREE_LINK}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                >
                    <i className="ri-phone-line"></i> Call: {TOLL_FREE}
                </a>
            </div>

            <p className="text-base">
                Or directly connect via:{' '}
                <a
                    href={whatsappLink('Hi, I want to plan a Kashmir trip!')}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#1f9d4f] hover:underline"
                >
                    <i className="ri-whatsapp-line"></i> Chat on WhatsApp
                </a>
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-300/70 pt-5 sm:grid-cols-4">
                {stats.map((item) => (
                    <div key={item.label}>
                        <h3 className="text-2xl font-bold">{item.value}</h3>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-600">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lefttop
