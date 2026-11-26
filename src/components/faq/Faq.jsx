import React, { useState } from 'react'
import Sectiontop from '../repeat-components/Sectiontop'

const faqs = [
    {
        q: 'What is the best time to visit Kashmir?',
        a: 'April to October is ideal for green meadows and pleasant weather. December to February is perfect if you want snow and skiing in Gulmarg.',
    },
    {
        q: 'What is included in the tour packages?',
        a: 'All packages include hotels / houseboats, sightseeing, private transportation, meals as per plan and a Shikara ride on Dal Lake. 24x7 support is included too.',
    },
    {
        q: 'Can I customize my itinerary?',
        a: 'Yes! Tell us your dates, budget and interests and our team will create a custom itinerary for you within 30 minutes.',
    },
    {
        q: 'How do I book a package?',
        a: 'Fill the enquiry form, chat with us on WhatsApp or call our toll free number. We will share the itinerary and confirm your booking after a small advance payment.',
    },
]

const Faq = () => {
    // Kaun sa question khula hai (-1 = sab band)
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section id="faq" className="w-full bg-white px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center">
                <Sectiontop
                    span="FAQ"
                    headingLeft="Frequently Asked"
                    headingRight="Questions"
                    paragraph="Quick answers to the things travelers ask us the most."
                />

                <div className="mt-10 flex w-full flex-col gap-3">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div key={index} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold cursor-pointer sm:text-lg"
                                >
                                    {item.q}
                                    <i className={`text-2xl text-blue-600 transition-transform ${isOpen ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                                </button>

                                {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">{item.a}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Faq
