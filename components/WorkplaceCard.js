import React from 'react'

function WorkplaceCard({ image, title, description, link }) {
    return (

        <div class="workplace-card max-w-sm w-[290px] pl-[29px] pr-[24px] py-[2.1rem] bg-[url('/Assets/img/banner-2.png')] border border-gray-200 rounded-[1.5rem] shadow dark:bg-gray-800 dark:border-gray-700">

            <h5 class="mb-2 text-[1.25rem] font-black tracking-tight text-[#233650] dark:text-white">{title}</h5>
            <p class="mb-[1.91rem] h-24 font-normal text-[18px] text-gray-700 dark:text-gray-400">{description}</p>
            <a href={link} class="inline-flex items-center px-3 pl-0 py-2 text-[18px] leading-[20px] text-center text-[#27354E] avenirBlack">
                Learn more &nbsp;
                <span className="blue-arrow">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.31451 1.18457L12.25 6.12008L7.31451 11.0556" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2499 6.12012L1.75 6.12012" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                </span>
                <span className="white-arrow" style={{display:"none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M9.14935 1.83203L16.2001 8.88275L9.14935 15.9335" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.2 8.88281L1.20007 8.88281" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </a>
            <img src={image} alt='banner' />
        </div>

    )
}

export default WorkplaceCard