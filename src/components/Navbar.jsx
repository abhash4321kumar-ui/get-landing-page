import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [scrollvalue, setscrollvalue] = useState(false)
    
    useEffect(() => {

        window.addEventListener('scroll', function(){
            if(window.scrollY > 25){
                setscrollvalue(true)
            }else{
                setscrollvalue(false)
            }
        })

    }, [])
    

    return (
        <div className={`sticky relative  px-30  transition-all duration-500  z-1000 text-white top-0 ${scrollvalue ? 'bg-[#0A2143]' : ''} `}>

            <div className='w-full h-25 flex'>

                <div className='w-4/20 h-full flex justify-start items-center '>
                    <img className='w-8/10 h-6/10 object-cover object-fit' src="./src/assets/image.png" alt="" />
                </div>

                <div className='flex gap-2 w-10/20 justify-center items-center cursor-pointer px-5'>
                    <h2 className='capitalize text-lg hover:font-medium w-3/20'>home</h2>
                    <h2 className='capitalize text-lg hover:font-medium w-3/20'>tours</h2>
                    <h2 className='capitalize text-lg hover:font-medium w-3/20'>hotels</h2>
                    <h2 className='capitalize text-lg hover:font-medium w-3/20'>about</h2>
                    <h2 className='capitalize text-lg hover:font-medium w-3/20'>contact</h2>
                </div>
                <div className='w-6/20 flex justify-center items-center gap-3'>
                    <h2 className='text-lg cursor-pointer'><i class="ri-phone-line pr-2"></i>1800 899 0856</h2>
                    <button className='bg-gradient-to-br cursor-pointer from-blue-600 to-blue-800 text-white shadow-lg px-5 py-2 rounded-lg capitalize'><i class="ri-calendar-line pr-2"></i> get itinerary</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar