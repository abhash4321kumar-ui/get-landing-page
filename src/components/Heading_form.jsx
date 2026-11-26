import React from 'react'
import Lefttop from './Lefttop'
import Righttop from './Righttop'

const Heading_form = () => {
    return (
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
                <Lefttop />
                <Righttop />
            </div>
        </div>
    )
}

export default Heading_form
