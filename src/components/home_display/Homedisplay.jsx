import React, { useState } from 'react'

const Homedisplay = () => {

    const [displayvalue, setdisplayvalue] = useState([
        {
            imgurl: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
            title: '24x7',
            description: 'Support Available'
        },
        {
            imgurl: 'https://cdn-icons-png.flaticon.com/512/2838/2838794.png',
            title: 'Available 24x7',
            description: 'Round-the-clock support'
        },
        {
            imgurl: 'https://cdn-icons-png.flaticon.com/512/2592/2592317.png',
            title: '100% Transparent',
            description: 'No hidden charges'
        }, {
            imgurl: 'https://cdn-icons-png.flaticon.com/512/9512/9512451.png',
            title: '500+ Happy Trips',
            description: 'Since 2010'
        }
    ])

    return (
        <div className='flex px-30 justify-between border-1 border-blue-600 border-solid my-10'>
            {displayvalue.map((val, index) => {
                return <div key={index} className={` flex justify-center items-center gap-3 pr-5 py-10 ${index !== displayvalue.length - 1
                    ? 'border-r border-blue-600 border-solid'
                    : ''
                    } `}>

                  <div className='bg-blue-300 py-2 px-3 rounded-xl border border-blue-600 border-solid'>
              <img src={val.imgurl} alt={val.title} className='w-7 h-7' />
            </div>

                    <div className='flex flex-col gap-1'><h2 className='text-lg capitalize font-medium'>{val.title}</h2>
                        <p className='text-sm capitalize'>{val.description}</p></div>
                </div>
            })}
        </div>
    )
}

export default Homedisplay