import React from 'react'
import Navbar from './Navbar'
import Heading_form from './Heading_form'

const Homesection = () => {
    return (
        <div className="min-h-110 pb-10 w-full bg-[url('./src/assets/kashmir_hero_bg.webp')] bg-cover object-cover bg-center bg-no-repeat relative">
            <div className=' before:absolute before:inset-0 before:bg-linear-to-r before:from-white before:via-white/60 before:to-transparent'></div>

            <div className='absolute inset-x-0 top-0 h-3/10 bg-gradient-to-b from-black/90 to-transparent'></div>
            <Navbar />
            <Heading_form />
        </div>
    )
}

export default Homesection