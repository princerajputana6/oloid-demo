import React from 'react'
import Image from 'next/image'
import banner3 from "../Assets/img/banner3.png"
import bulletTick from "../Assets/img/bullet-tick.svg"

function FourthSection() {
    return (
        <div className='common-section bg-[#F2F4F9]  w-screen flex flex-wrap justify-center'>
            <div className="mx-auto flex flex-wrap   justify-center py-24 max-w-7xl gap-x-9">
                <div className='section-content w-[49%]'>
                    <div className='heading mx-auto'>
                        <p><span> Password-less & Username-less</span> {" "}  login experience for your workforce
                        </p>
                    </div>
                    <div className='description mt-5 mx-auto'>
                    Lower your security risks, speed up logins, and boost productivity for a more efficient workplace
                    </div>
                    <div className='section-bullets  mt-8'>
                        <p className='flex flex-wrap items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Easy facial authentication-based access</p>
                        <p className='flex flex-wrap items-center'> <span><Image src={bulletTick} alt="bullet" /></span> MFA for frictionless logins</p>
                        <p className='flex flex-wrap items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Reduced costs & IT support</p>
                    </div>

                    <button class="learn-more-button bg-[#2265B0] avenirBlack">Learn more <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7.35956 1.33374L13.0001 6.97432L7.35956 12.6149" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.0001 6.97437L1.00012 6.97437" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span></button>

                </div>
                <div className='section-banner w-[47%]'>
                    <Image
                        src={banner3}
                        alt='banner 3'
                        className='banner-image'

                    />
                </div>




            </div>
        </div>
    )
}

export default FourthSection