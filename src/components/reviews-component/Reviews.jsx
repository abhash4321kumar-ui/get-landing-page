import React, { useState } from 'react'
import Sectiontop from '../repeat-components/Sectiontop'

const Reviews = () => {
    const [reviewvalue] = useState([
        {
            id: 1,
            name: 'Udita',
            location: 'Mumbai, India',
            initial: 'U',
            avatarBg: 'bg-[#3b5998]',
            review:
                "Professional attitude with a personal touch - that's how I would describe Multi Destination travel agency. I met Aatif and Kaiser as a client and parted ways as friends. The itinerary was well-crafted to ensure that I managed to see all the sights, have all the unique Kashmiri experiences, and also have time for leisure.",
            rating: 5,
        },
        {
            id: 2,
            name: 'Ratandeep Chawla',
            location: 'Delhi, India',
            initial: 'R',
            avatarBg: 'bg-[#1e8e3e]',
            review:
                'It was a personalized and professional experience booking my tour with them. They made sure that we were comfortable at all levels and personally handled all our specific needs. Both Atif and Junaid humbled us with their hospitality. I would strongly recommend to book the tour with them and sit back and enjoy the trip.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Shweta Jain',
            location: 'Bangalore, India',
            initial: 'S',
            avatarBg: 'bg-[#5e35b1]',
            review:
                'Kashmir trip - one of the most memorable trips of my life! Thank you Junaid Jamal, Atif and the entire Multi Destinations team for such a wonderful experience. They are truly professional and gave our vacation a personal touch. Unprecedented things happen sometimes, but Junaid was just a call away and always sorted everything out!',
            rating: 5,
        },
    ])

    return (
        <section id="reviews" className="w-full bg-[#E1E8EF] px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">
                <Sectiontop
                    span="Real Reviews"
                    headingLeft="What Travelers"
                    headingRight="Say About Us"
                    paragraph="Don't just take our word for it - hear from hundreds of happy travelers who've explored Kashmir with us."
                />

                {/* Google reviews button */}
                <a
                    href="https://www.google.com/search?q=Multi+Destinations+Srinagar+reviews"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex max-w-full items-center overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
                >
                    <div className="flex items-center justify-center self-stretch bg-white p-3">
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                            <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" />
                            <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
                            <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
                        </svg>
                    </div>
                    <div className="bg-[#4285F4] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3574e2] sm:px-5 sm:text-base">
                        Click here to view our reviews on Google!
                    </div>
                </a>

                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reviewvalue.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                        >
                            <div>
                                <div className="mb-4 text-4xl text-blue-200">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                                <p className="mb-8 text-sm italic leading-relaxed text-slate-600">"{item.review}"</p>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${item.avatarBg}`}
                                    >
                                        {item.initial}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                                        <p className="text-xs text-slate-500">{item.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-0.5 text-[#4285F4]">
                                    {[...Array(item.rating)].map((_, idx) => (
                                        <i key={idx} className="ri-star-fill"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews
