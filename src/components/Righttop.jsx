import React from 'react'
import Buttonblue from './repeat-components/Buttonblue';

const Righttop = () => {

    return (
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">Plan Your Trip</h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">
                Get a free customized itinerary
            </p>

            <form className="space-y-4">

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none focus:border-blue-600"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none focus:border-blue-600"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-1">
                            <i class="ri-group-line"></i> People *
                        </label>
                        <input
                            id="people"
                            type="number"
                            defaultValue={2}
                            min={1}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">
                            <i class="ri-alarm-line"></i> Days *
                        </label>
                        <input
                            id="days"
                            type="number"
                            defaultValue={5}
                            min={1}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none focus:border-blue-600"
                        />
                    </div>
                </div>

                <Buttonblue value='Send an Enquiry' />

                <a
                    href="https://wa.me, I want to plan a trip!"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition"
                >
                    <span>💬</span> Enquire via WhatsApp
                </a>
            </form>

            <p className="text-center text-sm text-gray-600 mt-5">
                or call us:{" "}
                <a href="tel:18008890856" className="text-blue-600 font-semibold hover:underline">
                    1800 889 0856
                </a>
            </p>
        </div>
    );
};

export default Righttop