import React, { useState } from 'react'
import Packages from './Packages'
import Sectiontop from '../repeat-components/Sectiontop'
import Buttonblue from '../repeat-components/Buttonblue'
import { whatsappLink } from '../contactInfo'

const commonIncludes = ['Hotels / Houseboats', 'Sightseeing', 'Transportation', 'Meals', 'Shikara Ride']
const commonLocation = 'Srinagar · Mughal Gardens · Dal Lake · Pahalgam ···'
const img = 'https://themultidestinations.com/kashmir/'

const Kashmirtour = () => {
    const [tourpackages] = useState([
        {
            imgurl: img + 'kashmir_dallake.webp',
            title: 'Kashmir 4D 3N',
            miniTitle: '3 Tour Options',
            miniParagraph: { from: 'from', price: '₹8,500', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'best value',
            badgeColor: 'bg-blue-600',
            badgeInclude: '4D / 3N',
            link: '/kashmir/4d3n',
        },
        {
            imgurl: img + 'kashmir_pahalgam.webp',
            title: 'Kashmir 5D 4N',
            miniTitle: '5 Tour Options',
            miniParagraph: { from: 'from', price: '₹12,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'most popular',
            isPopular: true,
            badgeInclude: '5D / 4N',
            link: '/kashmir/5d4n',
        },
        {
            imgurl: img + 'kashmir_gulmarg.webp',
            title: 'Kashmir 6D 5N',
            miniTitle: '6 Tour Options',
            miniParagraph: { from: 'from', price: '₹16,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'best seller',
            badgeColor: 'bg-red-600',
            badgeInclude: '6D / 5N',
            link: '/kashmir/6d5n',
        },
        {
            imgurl: img + 'kashmir_sonmarg.webp',
            title: 'Kashmir 7D 6N',
            miniTitle: '7 Tour Options',
            miniParagraph: { from: 'from', price: '₹20,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'extended',
            badgeColor: 'bg-emerald-600',
            badgeInclude: '7D / 6N',
            link: '/kashmir/7d6n',
        },
        {
            imgurl: img + 'kashmir_mughal_garden.webp',
            title: 'Kashmir 8D 7N',
            miniTitle: '8 Tour Options',
            miniParagraph: { from: 'from', price: '₹24,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'premium',
            badgeColor: 'bg-purple-600',
            badgeInclude: '8D / 7N',
            link: '/kashmir/8d7n',
        },
        {
            imgurl: img + 'kashmir_hero.webp',
            title: 'Kashmir 9D 8N',
            miniTitle: '9 Tour Options',
            miniParagraph: { from: 'from', price: '₹28,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'luxury',
            badgeColor: 'bg-amber-600',
            badgeInclude: '9D / 8N',
            link: '/kashmir/9d8n',
        },
    ])

    return (
        <section id="tours" className="w-full bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center">
                <Sectiontop
                    span="Best Sellers"
                    headingLeft="Kashmir Tour"
                    headingRight="Packages"
                    paragraph="Choose from our handcrafted Kashmir packages - each designed to give you the most authentic Kashmiri experience. All packages include hotels, meals, sightseeing and 24x7 support."
                />

                <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {tourpackages.map((val, index) => (
                        <Packages key={index} val={val} />
                    ))}
                </div>

                <div className="mt-14 flex flex-col items-center gap-5 text-center">
                    <p className="max-w-3xl text-lg text-[#0A2143] sm:text-xl">
                        Can't find your perfect trip? Let us craft a custom itinerary just for you.
                    </p>
                    <Buttonblue
                        value="Plan My Custom Trip"
                        iconvalue="ri-arrow-right-line"
                        href={whatsappLink('Hi, I want a custom Kashmir itinerary.')}
                    />
                </div>
            </div>
        </section>
    )
}

export default Kashmirtour
