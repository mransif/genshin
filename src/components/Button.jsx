import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass, link }) => {
    return (
        <a href={link} target='_blank'>
            <button
                className={`group inline-flex relative z-10 q-fit gap-1 cursor-pointer overflow-hidden rounded-full bg-gray-200 px-4 py-2 text-black ${containerClass}`}>
                <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
                    <div>
                        {title}
                    </div>
                </span>
                {rightIcon}
            </button>
        </a>

    )
}

export default Button