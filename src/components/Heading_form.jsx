import React from 'react'
import Lefttop from './Lefttop'
import Righttop from './Righttop'

const Heading_form = () => {
    return (
        <div className='relative z-10 w-full h-8/10  px-30 py-10'>
            <div className='flex justify-center items-center'>
                <Lefttop />
                <Righttop />
            </div>
        </div>
    )
}

export default Heading_form