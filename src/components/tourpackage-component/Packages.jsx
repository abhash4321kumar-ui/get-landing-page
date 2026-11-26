import React from 'react'

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-emerald-500"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
)

const Packages = ({ val }) => {
    const isPopular = val.isPopular

    return (
        <article
            className={`group relative flex w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isPopular ? 'border-2 border-blue-600' : 'border border-gray-200'
            }`}
        >
            {isPopular && (
                <div className="flex items-center justify-center gap-1.5 bg-blue-600 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#facc15"
                        stroke="#facc15"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {val.badgeValue}
                </div>
            )}

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                <img
                    src={val.imgurl}
                    alt={val.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {!isPopular && (
                    <span
                        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md ${val.badgeColor}`}
                    >
                        {val.badgeValue}
                    </span>
                )}

                <span className="absolute bottom-3 right-3 rounded-full bg-black/80 px-3 py-1.5 text-xs font-bold uppercase text-white backdrop-blur-sm">
                    {val.badgeInclude}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-extrabold text-[#0A2143]">{val.title}</h3>
                <p className="mt-0.5 text-sm text-gray-500">{val.miniTitle}</p>

                <div className="mt-4">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-sm capitalize text-gray-500">{val.miniParagraph.from}</span>
                        <span className="text-3xl font-extrabold text-blue-600">{val.miniParagraph.price}</span>
                        <span className="text-sm text-gray-500">{val.miniParagraph.person}</span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-gray-500">{val.tripleShare}</p>
                </div>

                <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 shrink-0 text-blue-600"
                        aria-hidden="true"
                    >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>{val.tripLocation}</p>
                </div>

                {/* Includes as pills */}
                <ul className="mt-4 flex flex-wrap gap-2">
                    {val.tripIncludes.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                            <CheckIcon />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto grid grid-cols-2 gap-2.5 pt-5">
                    <a
                        href={val.link}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        aria-label={`View details for ${val.title}`}
                    >
                        View Tours
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    >
                        Get Quote
                    </button>
                </div>
            </div>
        </article>
    )
}


export default Packages