import React from 'react'

function WorkplaceCard({ image, title, description, link }) {
    return (

        <div class="workplace-card max-w-sm w-[290px] pl-[29px] pr-[24px] py-[2.1rem] bg-[url('/Assets/img/banner-2.png')] border border-gray-200 rounded-[1.5rem] shadow dark:bg-gray-800 dark:border-gray-700">

            <h5 class="mb-2 text-[1.25rem] font-black tracking-tight text-[#233650] dark:text-white">{title}</h5>
            <p class="mb-[1.91rem] h-24 font-normal text-[18px] text-gray-700 dark:text-gray-400">{description}</p>
            <a href={link} class="inline-flex items-center px-3 pl-0 py-2 text-[1rem]  text-center text-[#27354E] font-black">
                Learn more &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M9.44928 1.17358L16.5 8.22431L9.44928 15.275" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.4999 8.22431L1.5 8.2243" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
            <img src={image} alt='banner' />
        </div>

    )
}

export default WorkplaceCard