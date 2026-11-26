import React from 'react'

// Logo (navbar aur footer dono me use hota hai)
const Logo = () => {
    return (
        <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-blue-600 text-xl text-white shadow-lg">
                <i className="ri-earth-line"></i>
            </div>
            <div className="leading-tight">
                <h2 className="text-lg font-bold tracking-tight text-white">Multi Destinations</h2>
                <span className="text-[10px] font-medium uppercase tracking-wider text-orange-300">
                    Travel Fantasies Made True
                </span>
            </div>
        </a>
    )
}

export default Logo
