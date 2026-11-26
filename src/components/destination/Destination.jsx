import React from 'react'
import Sectiontop from '../repeat-components/Sectiontop'
import Buttonblue from '../repeat-components/Buttonblue'

const destinations = [
    {
        name: 'Dal Lake',
        tag: 'Srinagar',
        desc: 'Glide across the shimmering waters on a shikara and stay in a traditional houseboat.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_dallake.webp',
        link: '/destination/dal-lake',
        featured: true
    },
    {
        name: 'Gulmarg',
        tag: 'Meadow of Flowers',
        desc: 'Ride the famous gondola and enjoy skiing, snow and alpine meadows.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_gulmarg.webp',
        link: '/destination/gulmarg'
    },
    {
        name: 'Pahalgam',
        tag: 'Valley of Shepherds',
        desc: 'Lush green valleys, the Lidder river and peaceful pine forests.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_pahalgam.webp',
        link: '/destination/pahalgam'
    },
    {
        name: 'Sonmarg',
        tag: 'Meadow of Gold',
        desc: 'Glaciers, alpine lakes and the gateway to Ladakh.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_sonmarg.webp',
        link: '/destination/sonmarg'
    },
    {
        name: 'Mughal Gardens',
        tag: 'Heritage',
        desc: 'Terraced Persian-style gardens with fountains, chinar trees and flowers.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_mughal_garden.webp',
        link: '/destination/mughal-gardens'
    },
    {
        name: 'Doodhpathri',
        tag: 'Valley of Milk',
        desc: 'Pristine river flowing through lush pine meadows',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_hero.webp',
        link: '/destination/doodhpathri'
    }
]

const PinIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
)

const Destination = () => {
    return (
        <section className="flex w-full flex-col items-center gap-3 bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-20 md:px-10 lg:px-16">
            <Sectiontop span='Destinations' headingLeft='Popular' headingRight='Destinations' paragraph='Discover the most loved places in Kashmir - from serene lakes to snow-covered meadows.' />

            <div className="mt-8 grid w-full max-w-7xl auto-rows-[250px] grid-cols-1 gap-5 md:grid-cols-3">
                {destinations.map((d, index) => (
                    <a
                        key={index}
                        href={d.link}
                        className={`group relative block overflow-hidden rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                            d.featured ? 'md:col-span-2 md:row-span-2' : ''
                        }`}
                    >
                        <img
                            src={d.imgurl}
                            alt={d.name}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/45" />

                        <div className={`absolute inset-x-0 bottom-0 flex flex-col ${d.featured ? 'p-8' : 'p-6'}`}>
                            <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                                <PinIcon />
                                {d.tag}
                            </span>

                            <h3
                                className={`mt-1 font-bold text-white ${
                                    d.featured ? 'text-3xl md:text-4xl' : 'text-xl'
                                }`}
                            >
                                {d.name}
                            </h3>

                            <p
                                className={`max-h-0 overflow-hidden text-sm leading-snug text-gray-200 opacity-0 transition-all duration-300 group-hover:mt-1.5 group-hover:max-h-16 group-hover:opacity-100 ${
                                    d.featured ? 'max-w-lg' : ''
                                }`}
                            >
                                {d.desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

        <div className='pt-10'>
            <Buttonblue value='plan my kashmir trip' />
        </div>

        </section>
    )
}

export default Destination