'use client';

export default function FirstSectionCard({ imgAlt, imgSrc, title, description }) {
  return (


    
<div class="card lg:basis-1/4 max-w-[18.125rem] sm:basis-1 rounded-3xl shadow-none border-none">
  <img class="rounded-[1.5rem] w-full aspect-square	 " src={imgSrc} alt="" />
      <div class="pt-[1.5rem]">
        <h5 class="text-[1.5rem]  font-black font-[AvenirBlack] leading-[2.25rem] tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p class="card-description text-[18px] font-medium text-gray-700 dark:text-gray-400 mt-[10px]">{description}</p>
        <p  class="learn-more text-[18px]   leading-[20px] text-[#2265b0] ">
          Learn more <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M9.66934 1.17365L16.7201 8.22437L9.66934 15.2751" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.72 8.22437L1.72006 8.22437" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg></span>
        </p>
      </div>
    </div>

  )
}