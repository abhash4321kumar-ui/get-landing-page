import React from 'react'

const Sectiontop = (props) => {

    console.log(props)

  return (
    <div className='flex justify-center flex-col items-center gap-5'>
         <span className="rounded-full border border-blue-500 bg-blue-100 px-5 py-1 text-base font-semibold text-blue-700">
              {props.span}
            </span>

            <h2 id='global-color-1' className="text-center text-4xl font-bold md:text-5xl capitalize">
                {props.headingLeft} <span id='global-color-2'>{props.headingRight}</span>
            </h2>

            <p className="w-full max-w-2xl text-center text-lg text-slate-600">
                {props.paragraph}
            </p>
    </div>
  )
}

export default Sectiontop