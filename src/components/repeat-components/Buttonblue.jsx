import React from 'react'

// Reusable blue button.
// href dene par link ban jata hai, nahi to normal button.
const Buttonblue = ({ value, iconvalue, href, onClick, type = 'button', className = '' }) => {
    const style = `inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto cursor-pointer ${className}`

    if (href) {
        return (
            <a href={href} onClick={onClick} className={style}>
                {value} {iconvalue && <i className={iconvalue}></i>}
            </a>
        )
    }

    return (
        <button type={type} onClick={onClick} className={style}>
            {value} {iconvalue && <i className={iconvalue}></i>}
        </button>
    )
}

export default Buttonblue
