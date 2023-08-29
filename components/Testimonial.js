import Image from 'next/image'
import React from 'react'
import companyLogo from "../Assets/img/egnite.png"
import userLogo from "../Assets/img/user.png"


function Testimonial() {
    return (
        <div className='testimonial-section w-screen flex flex-wrap justify-center'>
            <div className="mx-auto flex flex-wrap flex-col justify-center  max-w-7xl gap-x-9">
                <div className="testimonial flex">
                    <div className="testimonial-logo w-2/6 flex flex-wrap justify-end mr-[5.375rem]">
                        <Image src={companyLogo} alt="company Logo" className='max-h-[11.438rem]'/>
                    </div>
                    <div className="testimonial-content w-4/6 flex flex-wrap flex-col">
                        <p className='testimonial-description bg-[#F2F4F9] text-[1.5rem]'>
                        “OLOID has upscaled access management at the Egnyte office with powerful integrations. With mobile access, Egnyte employees do not need to carry badges anymore, and they are no longer dependent on the firm’s administrative staff for any access-related tasks.”
                        </p>
                        <div className='testimonial-profile flex flex-wrap mt-[1.1rem] mx-[2rem] items-center'>
                            <div className='user-image mr-[1.1rem]'>
                                <Image src={userLogo} alt="user icon" />
                            </div>
                            <div className='user-info flex flex-wrap flex-col items-start '>
                                <p className='user-name text-[1.5rem] leading-[2.25rem] avenirBlack text-[#233650]'>Vineet Jain</p>
                                <p className='user-designation text-[#5B667B] text-[1.25rem] leading-[1.35rem] mt-[6px]'>CEO at Egnyte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial