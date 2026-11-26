import React, { useState } from 'react'
import Sectiontop from '../repeat-components/Sectiontop'

const Reviews = () => {

    const [reviewvalue, setreviewvalue] = useState([
        {
            id: 1,
            name: "Udita",
            location: "Mumbai, India",
            initial: "U",
            avatarBg: "bg-[#3b5998]",
            review:
                '"Professional attitude with a personal touch - that\'s how I would describe Multi Destination travel agency. I met Aatif and Kaiser as a client and parted ways as friends. The itinerary was well-crafted to ensure that I managed to see all the sights, have all the unique Kashmiri experiences, and also have time for leisure."',
            rating: 5,
        },
        {
            id: 2,
            name: "Ratandeep Chawla",
            location: "Delhi, India",
            initial: "R",
            avatarBg: "bg-[#1e8e3e]",
            review:
                '"It was a personalized and professional experience booking my tour with them. They made sure that we were comfortable at all levels and personally handled all our specific needs. Both Atif and Junaid humbled us with their hospitality. I would strongly recommend to book the tour with them and sit back and enjoy the trip."',
            rating: 5,
        },
        {
            id: 3,
            name: "Shweta Jain",
            location: "Bangalore, India",
            initial: "S",
            avatarBg: "bg-[#5e35b1]",
            review:
                '"Kashmir trip - one of the most memorable trips of my life! Thank you Junaid Jamal, Atif and the entire Multi Destinations team for such a wonderful experience. They are truly professional and gave our vacation a personal touch. Unprecedented things happen sometimes, but Junaid was just a call away and always sorted everything out!"',
            rating: 5,
        },
    ])

    return (
        <div className='flex w-full flex-col items-center gap-10 bg-[#E1E8EF] px-4 pt-20 pb-30 md:px-10 lg:px-16'>
            <Sectiontop span='Real Reviews' headingLeft='What Travelers' headingRight='Say About Us' paragraph="Don't just take our word for it - hear from hundreds of happy travelers who've explored Kashmir with us." />

            <div className="max-w-6xl mx-auto">

                <div className="flex justify-center mb-12">
                    <a
                        href="#google-reviews"
                        className="inline-flex items-center rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <div className="bg-white p-3 flex items-center justify-center">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                                />
                            </svg>
                        </div>
                        <div className="bg-[#4285F4] hover:bg-[#3574e2] text-white font-semibold text-sm sm:text-base px-5 py-3 transition-colors">
                            Click here to view our reviews on Google!
                        </div>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviewvalue.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-5 text-slate-400">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5m12-7h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5"
                                        />
                                    </svg>
                                </div>

                                <p className="text-slate-600 italic text-sm leading-relaxed mb-8">
                                    {item.review}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-semibold flex items-center justify-center text-sm shrink-0`}
                                    >
                                        {item.initial}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm">
                                            {item.name}
                                        </h4>
                                        <p className="text-slate-500 text-xs">{item.location}</p>
                                    </div>
                                </div>

                                {/* 5 Blue Stars */}
                                <div className="flex items-center gap-0.5 text-[#4285F4]">
                                    {[...Array(item.rating)].map((_, idx) => (
                                        <svg
                                            key={idx}
                                            className="w-4 h-4 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default Reviews