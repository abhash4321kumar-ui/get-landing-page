import React from 'react'
import Sectiontop from '../repeat-components/Sectiontop'

const categories = [
    {
        title: 'Kashmir Tour Packages',
        desc: 'Explore the breathtaking beauty of Kashmir with our curated tour packages.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_dallake.webp',
        link: '/kashmir'
    },
    {
        title: 'Ladakh Tour Packages',
        desc: 'Experience the rugged charm of Ladakh with our adventure-packed tours.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_sonmarg.webp',
        link: '/ladakh'
    },
    {
        title: 'Couple Tour Packages',
        desc: 'Romantic getaways designed for couples to create unforgettable memories.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_mughal_garden.webp',
        link: '/couple-tours'
    },
    {
        title: 'Adventure Tour Packages',
        desc: 'Thrilling adventures for adrenaline junkies in stunning locations.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_pahalgam.webp',
        link: '/adventure-tours'
    },
    {
        title: 'Spiritual Tour Packages',
        desc: 'Embark on a soul-enriching journey to sacred destinations.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_hero.webp',
        link: '/spiritual-tours'
    },
    {
        title: 'Skiing & Snowboarding',
        desc: 'Hit the slopes with our skiing and snowboarding tours in Gulmarg.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_gulmarg.webp',
        link: '/skiing-snowboarding'
    }
]

const Topcategories = () => {
    return (
        <section className="flex w-full flex-col items-center gap-3 bg-[#E1E8EF] px-4 py-20 md:px-10 lg:px-16">

           <Sectiontop span='explore' headingLeft='top' headingRight='categories' paragraph='From snow-clad peaks to spiritual valleys - discover the diverse experiences Kashmir has to offer.' />

            <div className="mt-8 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((cat, index) => (
                    <a
                        key={index}
                        href={cat.link}
                        className="group relative block aspect-[17/10] overflow-hidden rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        <img
                            src={cat.imgurl}
                            alt={cat.title}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* dark overlay (gets darker on hover) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/50" />

                        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-7">
                            <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                            <p className="max-w-[90%] text-sm leading-snug text-gray-200">{cat.desc}</p>

                            <span className="mt-1 flex h-0 items-center gap-1.5 overflow-hidden text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:h-6 group-hover:opacity-100">
                                View Tours
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}


export default Topcategories