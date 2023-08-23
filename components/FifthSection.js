import React from 'react'
import Image from 'next/image'
import banner4 from "../Assets/img/banner4.png"
import bulletTick from "../Assets/img/bullet-tick.svg"

function FifthSection() {
    return (
        <div className='common-section  w-screen flex justify-center'>
            <div className="mx-auto flex   justify-center py-24 max-w-7xl gap-x-9">
                
                <div className='section-banner w-3/6'>
                    <Image
                        src={banner4}
                        alt='banner 4'
                        className='banner-image'
                    />
                </div>
                <div className='section-content w-3/6'>
                    <div className='heading mx-auto'>
                        <p><span> Accurate and easy</span> {" "}   time clocking for your employees
                        </p>
                    </div>
                    <div className='description mt-5 mx-auto'>
                    Facial recognition-based time tracking for secure employee authentication
                    </div>
                    <div className='section-bullets  mt-8'>
                        <p className='flex items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Face and QR code based authentication modes</p>
                        <p className='flex items-center'> <span><Image src={bulletTick} alt="bullet" /></span> No more time theft</p>
                        <p className='flex items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Seamless system integrations</p>
                    </div>

                    <button class="learn-more-button bg-[#2265B0] ">Learn more <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7.35956 1.33374L13.0001 6.97432L7.35956 12.6149" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.0001 6.97437L1.00012 6.97437" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span></button>

                </div>




            </div>
        </div>
    )
}

export default FifthSection