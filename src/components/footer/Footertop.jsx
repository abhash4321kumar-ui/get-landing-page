import React from 'react'
import { TOLL_FREE, TOLL_FREE_LINK, whatsappLink } from '../contactInfo'

const Footertop = () => {
    return (
        <div className="bg-[#113361] px-4 py-14 md:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
                <div>
                    <h2 className="text-3xl font-bold capitalize text-white sm:text-4xl">Ready to Explore Kashmir?</h2>
                    <p className="mt-2 text-lg text-blue-200">Get a personalized itinerary within 30 minutes</p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-5">
                    <a
                        href={whatsappLink('Hi, I want to plan my Kashmir trip.')}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-white px-8 py-3 text-center text-base font-semibold text-[#0A2143] transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        Plan My Trip
                    </a>
                    <a
                        href={TOLL_FREE_LINK}
                        className="rounded-xl border border-white/60 px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-[#0A2143]"
                    >
                        <i className="ri-phone-line pr-2"></i>
                        {TOLL_FREE}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footertop
