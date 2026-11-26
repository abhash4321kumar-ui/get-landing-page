import React from 'react'
import { whatsappLink } from '../contactInfo'

// Ek tour package ka card. Data Kashmirtour.jsx se "val" me aata hai.
const Packages = ({ val }) => {
    return (
        <div
            className={`group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                val.isPopular ? 'ring-2 ring-blue-600' : 'ring-1 ring-slate-200'
            }`}
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={val.imgurl}
                    alt={val.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <span
                    className={`absolute left-4 top-4 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${
                        val.isPopular ? 'bg-amber-500' : val.badgeColor
                    }`}
                >
                    {val.isPopular && <i className="ri-star-fill pr-1"></i>}
                    {val.badgeValue}
                </span>

                <span className="absolute bottom-3 right-4 rounded-md bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {val.badgeInclude}
                </span>
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                    <h3 className="text-xl font-bold">{val.title}</h3>
                    <p className="text-sm text-slate-500">{val.miniTitle}</p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        {val.miniParagraph.from}{' '}
                        <span className="text-2xl font-bold text-blue-700">{val.miniParagraph.price}</span>{' '}
                        {val.miniParagraph.person}
                    </p>
                    <p className="text-xs text-slate-400">{val.tripleShare}</p>
                </div>

                <p className="flex items-start gap-1.5 text-sm text-slate-600">
                    <i className="ri-map-pin-2-fill text-blue-600"></i>
                    {val.tripLocation}
                </p>

                <div className="flex flex-wrap gap-2">
                    {val.tripIncludes.map((item) => (
                        <span
                            key={item}
                            className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                            <i className="ri-checkbox-circle-line"></i>
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons - mt-auto se hamesha card ke neeche rehte hai */}
                <div className="mt-auto grid grid-cols-2 gap-3 pt-3">
                    <a
                        href={val.link}
                        className="rounded-xl border border-slate-300 py-2.5 text-center text-sm font-semibold transition hover:border-blue-600 hover:text-blue-700"
                    >
                        View Tours <i className="ri-arrow-right-line"></i>
                    </a>
                    <a
                        href={whatsappLink(`Hi, I want a quote for ${val.title}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 py-2.5 text-center text-sm font-semibold text-white transition hover:shadow-lg"
                    >
                        Get Quote
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Packages
