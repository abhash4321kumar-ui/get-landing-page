import React from 'react'
import Sectiontop from '../repeat-components/Sectiontop'
import Buttonblue from '../repeat-components/Buttonblue'
import { whatsappLink } from '../contactInfo'

const destinations = [
    {
        name: 'Dal Lake',
        tag: 'Srinagar',
        desc: 'Glide across the shimmering waters on a shikara and stay in a traditional houseboat.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_dallake.webp',
        link: '/destination/dal-lake',
        featured: true,
    },
    {
        name: 'Gulmarg',
        tag: 'Meadow of Flowers',
        desc: 'Ride the famous gondola and enjoy skiing, snow and alpine meadows.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_gulmarg.webp',
        link: '/destination/gulmarg',
    },
    {
        name: 'Pahalgam',
        tag: 'Valley of Shepherds',
        desc: 'Lush green valleys, the Lidder river and peaceful pine forests.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_pahalgam.webp',
        link: '/destination/pahalgam',
    },
    {
        name: 'Sonmarg',
        tag: 'Meadow of Gold',
        desc: 'Glaciers, alpine lakes and the gateway to Ladakh.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_sonmarg.webp',
        link: '/destination/sonmarg',
    },
    {
        name: 'Mughal Gardens',
        tag: 'Heritage',
        desc: 'Terraced Persian-style gardens with fountains, chinar trees and flowers.',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_mughal_garden.webp',
        link: '/destination/mughal-gardens',
    },
    {
        name: 'Doodhpathri',
        tag: 'Valley of Milk',
        desc: 'Pristine river flowing through lush pine meadows',
        imgurl: 'https://themultidestinations.com/kashmir/kashmir_hero.webp',
        link: '/destination/doodhpathri',
    },
]

const Destination = () => {
    return (
        <section id="destinations" className="w-full bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center">
                <Sectiontop
                    span="Destinations"
                    headingLeft="Popular"
                    headingRight="Destinations"
                    paragraph="Discover the most loved places in Kashmir - from serene lakes to snow-covered meadows."
                />

                {/* Mobile: 1 column, Tablet/Desktop: 3 columns (pehla card bada) */}
                <div className="mt-12 grid w-full auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-3">
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

                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/45"></div>

                            <div className={`absolute inset-x-0 bottom-0 flex flex-col ${d.featured ? 'p-6 md:p-8' : 'p-5 md:p-6'}`}>
                                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                                    <i className="ri-map-pin-2-fill"></i>
                                    {d.tag}
                                </span>

                                <h3 className={`mt-1 font-bold text-white ${d.featured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                                    {d.name}
                                </h3>

                                {/* Mobile par hamesha dikhta hai (hover nahi hota), desktop par hover par */}
                                <p
                                    className={`mt-1.5 text-sm leading-snug text-gray-200 md:mt-0 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:mt-1.5 md:group-hover:max-h-16 md:group-hover:opacity-100 ${
                                        d.featured ? 'max-w-lg' : ''
                                    }`}
                                >
                                    {d.desc}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12">
                    <Buttonblue value="Plan My Kashmir Trip" href={whatsappLink('Hi, I want to plan my Kashmir trip.')} />
                </div>
            </div>
        </section>
    )
}

export default Destination
