import React, { useState } from 'react'
import Packages from './Packages'
import Sectiontop from '../repeat-components/Sectiontop'
import Buttonblue from '../repeat-components/Buttonblue'

const commonIncludes = ['Hotels / Houseboats', 'Sightseeing', 'Transportation', 'Meals', 'Shikara Ride']
const commonLocation = 'Srinagar · Mughal Gardens · Dal Lake · Pahalgam ···'

const Kashmirtour = () => {
    const [tourpackages] = useState([
        {
            imgurl: 'https://themultidestinations.com/kashmir/kashmir_dallake.webp',
            title: 'Kashmir 4D 3N',
            miniTitle: '3 Tour Options',
            miniParagraph: { from: 'from', price: '₹8,500', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'best value',
            badgeColor: 'bg-blue-600',
            badgeInclude: '4D / 3N',
            link: '/kashmir/4d3n'
        },
        {
            imgurl: 'https://themultidestinations.com/kashmir/kashmir_pahalgam.webp',
            title: 'Kashmir 5D 4N',
            miniTitle: '5 Tour Options',
            miniParagraph: { from: 'from', price: '₹12,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'most popular',
            isPopular: true,
            badgeInclude: '5D / 4N',
            link: '/kashmir/5d4n'
        },
        {
            imgurl: 'https://themultidestinations.com/kashmir/kashmir_gulmarg.webp',
            title: 'Kashmir 6D 5N',
            miniTitle: '6 Tour Options',
            miniParagraph: { from: 'from', price: '₹16,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'best seller',
            badgeColor: 'bg-red-600',
            badgeInclude: '6D / 5N',
            link: '/kashmir/6d5n'
        },
        {
            imgurl: 'https://themultidestinations.com/kashmir/kashmir_sonmarg.webp',
            title: 'Kashmir 7D 6N',
            miniTitle: '7 Tour Options',
            miniParagraph: { from: 'from', price: '₹20,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'extended',
            badgeColor: 'bg-emerald-600',
            badgeInclude: '7D / 6N',
            link: '/kashmir/7d6n'
        },
        {
            imgurl: 'https://themultidestinations.com/kashmir/kashmir_mughal_garden.webp',
            title: 'Kashmir 8D 7N',
            miniTitle: '8 Tour Options',
            miniParagraph: { from: 'from', price: '₹24,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'premium',
            badgeColor: 'bg-purple-600',
            badgeInclude: '8D / 7N',
            link: '/kashmir/8d7n'
        },
        {
            imgurl: 'https://themultidestinations.com/kashmir/kashmir_hero.webp',
            title: 'Kashmir 9D 8N',
            miniTitle: '9 Tour Options',
            miniParagraph: { from: 'from', price: '₹28,000', person: '/person' },
            tripleShare: 'Triple Sharing',
            tripLocation: commonLocation,
            tripIncludes: commonIncludes,
            badgeValue: 'luxury',
            badgeColor: 'bg-amber-600',
            badgeInclude: '9D / 8N',
            link: '/kashmir/9d8n'
        }
    ])

    return (
        <section className="flex w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-14 md:px-10 lg:px-16">
            <Sectiontop span='Best Sellers' headingLeft='Kashmir Tour' headingRight='Packages' paragraph='Choose from our handcrafted Kashmir packages - each designed to give you the most authentic Kashmiri experience. All packages include hotels, meals, sightseeing and 24x7 support.' />

            <div className="mt-6 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-5 pb-10">
                {tourpackages.map((val, index) => (
                    <div key={index} className="flex justify-center">
                        <Packages val={val} />
                    </div>
                ))}
            </div>
                 <div className='flex flex-col gap-5 justify-center items-center'>
                    <p className="w-full max-w-3xl text-center text-xl text-[#0A2143]">
                Can't find your perfect trip? Let us craft a custom itinerary just for you.
            </p>
            <Buttonblue value='plan my custom trip' iconvalue='ri-arrow-right-long-line' />
                 </div>
            

        </section>
    )
}

export default Kashmirtour