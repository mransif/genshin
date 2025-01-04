import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass, link }) => {
    return (
        <a href={link}>
            <button
                className={`group inline-flex relative z-10 q-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
                {leftIcon}
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