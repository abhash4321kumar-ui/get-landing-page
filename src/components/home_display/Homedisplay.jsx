import React, { useState } from 'react'

const Homedisplay = () => {
    const [displayvalue] = useState([
        { icon: 'ri-star-smile-fill', color: 'bg-amber-100 text-amber-600', title: 'Rated 5 Stars', description: 'on Google Reviews' },
        { icon: 'ri-customer-service-2-fill', color: 'bg-blue-100 text-blue-600', title: 'Available 24x7', description: 'Round-the-clock support' },
        { icon: 'ri-shield-check-fill', color: 'bg-emerald-100 text-emerald-600', title: '100% Transparent', description: 'No hidden charges' },
        { icon: 'ri-suitcase-3-fill', color: 'bg-purple-100 text-purple-600', title: '500+ Happy Trips', description: 'Since 2010' },
    ])

    return (
        // -mt-12: card hero ke upar halka sa overlap karta hai
        <div className="relative z-20 mx-auto -mt-12 w-full max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-2">
                {displayvalue.map((val, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-4 p-4 ${
                            index !== displayvalue.length - 1 ? 'lg:border-r lg:border-slate-200' : ''
                        }`}
                    >
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${val.color}`}>
                            <i className={val.icon}></i>
                        </div>

                        <div>
                            <h3 className="text-base font-semibold">{val.title}</h3>
                            <p className="text-sm text-slate-500">{val.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homedisplay
