import React, { useState } from 'react'
import Buttonblue from './repeat-components/Buttonblue'
import { TOLL_FREE, TOLL_FREE_LINK, whatsappLink } from './contactInfo'

const inputStyle =
    'w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 text-base outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20'

const Righttop = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [people, setPeople] = useState(2)
    const [days, setDays] = useState(5)
    const [error, setError] = useState('')
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // 10 digit ka mobile number check
        if (!/^\d{10}$/.test(phone)) {
            setError('Please enter a valid 10-digit mobile number.')
            return
        }

        setError('')
        const message = `Hi, I want to plan a Kashmir trip.\nName: ${name}\nPhone: ${phone}\nPeople: ${people}\nDays: ${days}`
        window.open(whatsappLink(message), '_blank')
        setSent(true)
    }

    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur-sm sm:p-8 lg:ml-auto lg:mr-0">
            <h2 className="text-2xl font-bold text-slate-900">Plan Your Trip</h2>
            <p className="mb-6 mt-1 text-sm text-gray-500">Get a free customized itinerary</p>

            {sent ? (
                <div className="rounded-2xl bg-emerald-50 p-6 text-center">
                    <div className="mb-2 text-4xl text-emerald-600">
                        <i className="ri-checkbox-circle-fill"></i>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Thank you, {name}!</h3>
                    <p className="mt-1 text-sm text-slate-600">
                        Our team will contact you shortly with a custom itinerary.
                    </p>
                    <button
                        onClick={() => setSent(false)}
                        className="mt-4 text-sm font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                        Send another enquiry
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputStyle}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="10-digit mobile number"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            className={inputStyle}
                        />
                        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="people" className="mb-1 block text-sm font-medium text-gray-700">
                                <i className="ri-group-line"></i> People *
                            </label>
                            <input
                                id="people"
                                type="number"
                                min={1}
                                required
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="days" className="mb-1 block text-sm font-medium text-gray-700">
                                <i className="ri-time-line"></i> Days *
                            </label>
                            <input
                                id="days"
                                type="number"
                                min={1}
                                required
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                className={inputStyle}
                            />
                        </div>
                    </div>

                    <Buttonblue value="Send an Enquiry" type="submit" className="w-full sm:w-full" />

                    <a
                        href={whatsappLink('Hi, I want to plan a trip!')}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        <i className="ri-whatsapp-line text-lg"></i> Enquire via WhatsApp
                    </a>
                </form>
            )}

            <p className="mt-5 text-center text-sm text-gray-600">
                or call us:{' '}
                <a href={TOLL_FREE_LINK} className="font-semibold text-blue-600 hover:underline">
                    {TOLL_FREE}
                </a>
            </p>
        </div>
    )
}

export default Righttop
