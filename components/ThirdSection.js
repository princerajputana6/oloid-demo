import React from 'react'
import Image from 'next/image'
import banner2 from "../Assets/img/banner-2.png"
import bulletTick from "../Assets/img/bullet-tick.svg"

function ThirdSection() {
    return (
        <div className='common-section  w-screen flex flex-wrap justify-center'>
            <div className="mx-auto flex flex-wrap   justify-center py-24 max-w-7xl gap-x-9">
                
                <div className='section-banner w-[49%]'>
                    <Image
                        src={banner2}
                        alt='banner 1'
                        className='banner-image'
                    />
                </div>
                <div className='section-content w-[47%]'>
                    <div className='heading mx-auto'>
                        <p><span> Visual workflow automation</span> {" "}  for security, safety & business operations
                        </p>
                    </div>
                    <div className='description mt-5 mx-auto'>
                    Get up to 10X more value from your existing Physical Access Control Systems (PACS)
                    </div>
                    <div className='section-bullets  mt-8'>
                        <p className='flex flex-wrap items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Automated compliance & daily tasks</p>
                        <p className='flex flex-wrap items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Stronger security</p>
                        <p className='flex flex-wrap items-center'> <span><Image src={bulletTick} alt="bullet" /></span> Custom rules to suit your business</p>
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

export default ThirdSection