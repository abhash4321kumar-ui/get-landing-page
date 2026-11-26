import React from 'react'

// Har section ka same heading: chhota badge + heading + paragraph
const Sectiontop = ({ span, headingLeft, headingRight, paragraph }) => {
    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                {span}
            </span>

            <h2 className="text-3xl font-bold capitalize text-[#0A2143] sm:text-4xl md:text-5xl">
                {headingLeft} <span className="text-[#29AB5F]">{headingRight}</span>
            </h2>

            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">{paragraph}</p>
        </div>
    )
}

export default Sectiontop
