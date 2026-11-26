import React from 'react'
import Buttonblue from './repeat-components/Buttonblue'

const Lefttop = () => {
    return (
        <div className='w-1/2 flex flex-col gap-5'>
            <h2 className='text-[#0A2143] text-6xl font-bold'>Discover the <br />
                <span className='text-[#29AB5F]'>Heaven on Earth</span> <br />
                - Kashmir Awaits</h2>
            <p className='text-xl text-[#0A2143]'>Handcrafted Kashmir tour packages with 5★ service. Dal Lake, Gulmarg, Pahalgam, Sonmarg - every moment unforgettable. Starting <span className='text-[#356EEB]'>₹8,500/person.</span></p>
            <div className='flex gap-5 pb-3'>
               <Buttonblue value='view tour package' iconvalue='ri-arrow-down-s-line' />
                <button className='bg-gradient-to-br bg-white shadow-lg px-6 py-3 rounded-xl capitalize text-xl border-1 border-black border-solid text-black cursor-pointer'><i class="ri-phone-line pr-1"></i> call: 1800 899 0856</button>
            </div>
            <h2 className='text-lg'>Or directly connect via:
                <span className='text-[#418059]'> <i class="ri-chat-3-fill"></i> Chat on WhatsApp</span></h2>

                <div className='w-full min-h-10 flex py-2 justify-between items-center'>
                    <div>
                        <h2 className='text-xl capitalize font-medium'>500+</h2>
                        <p className='text-sm uppercase'>Tours Completed</p>
                    </div>
                    <div>
                        <h2 className='text-xl capitalize font-medium'>5★</h2>
                        <p className='text-sm uppercase'>Google Rating</p>
                    </div>
                    <div>
                        <h2 className='text-xl capitalize font-medium'>2010</h2>
                        <p className='text-sm uppercase'>Established Since</p>
                    </div>
                    <div>
                        <h2 className='text-xl capitalize font-medium'>24x7</h2>
                        <p className='text-sm uppercase'>Support Available</p>
                    </div>
                    
                </div>
        </div>
    )
}

export default Lefttop