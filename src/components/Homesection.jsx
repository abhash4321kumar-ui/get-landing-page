import React from 'react'
import Heading_form from './Heading_form'

// Navbar ab yaha nahi hai - wo App.jsx me hai taaki poore page par aaye
const Homesection = () => {
    return (
        <section
            id="home"
            className="relative w-full overflow-hidden bg-[url('https://themultidestinations.com/kashmir/kashmir_hero.webp')] bg-cover bg-center bg-no-repeat pb-24 pt-28 lg:pb-28 lg:pt-32"
        >
            {/* White fade: text padhne me asaan */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/50 lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-transparent"></div>

            {/* Upar dark shade taaki white navbar clearly dikhe */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent"></div>

            <Heading_form />
        </section>
    )
}

export default Homesection
