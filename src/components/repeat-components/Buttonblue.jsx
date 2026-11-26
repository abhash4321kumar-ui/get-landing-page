import React from 'react'

const Buttonblue = (props) => {
    return (
        <div className='flex justify-center items-center'>
            <button className='bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg px-6 py-3 rounded-xl capitalize text-xl border-1 border-blue-600 border-solid cursor-pointer w-full'>{props.value} <i className={props.iconvalue ? props.iconvalue : ''}></i></button>
        </div>
    )
}

export default Buttonblue