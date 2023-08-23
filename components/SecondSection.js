import React from 'react'
import Image from 'next/image'
import banner1 from "../Assets/img/section-1.png"
import bulletTick from "../Assets/img/bullet-tick.svg"

function SecondSection() {
    return (
        <div className='common-section bg-[#F2F4F9]  w-screen flex justify-center'>
            <div className="mx-auto flex   justify-center py-24 max-w-7xl gap-x-9">
                <div className='section-content w-3/6'>
                    <div className='heading mx-auto'>
                        <p><span> Modern & secure</span> {" "} workplace access experience for your employees
                        </p>
                    </div>
                    <div className='description mt-5 mx-auto'>
                        Choose from multiple form factors. Enable your employees to unlock any device using the same credentials
                    </div>
                    <div className='section-bullets  mt-8'>
                        <p className='flex items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Easy cloud-based access</p>
                        <p className='flex items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Seamless system integrations</p>
                        <p className='flex items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Multiple access modes</p>
                    </div>

                    <button class="learn-more-button bg-[#2265B0] ">Learn more <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7.35956 1.33374L13.0001 6.97432L7.35956 12.6149" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.0001 6.97437L1.00012 6.97437" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span></button>

                </div>
                <div className='section-banner w-3/6'>
                    <Image
                        src={banner1}
                        alt='banner 1'
                        className='banner-image'

                    />
                </div>




            </div>
        </div>
    )
}

export default SecondSection