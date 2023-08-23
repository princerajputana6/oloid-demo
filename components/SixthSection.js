import React from 'react'
import platformImage from '../Assets/img/Platform.png'
import Image from 'next/image'

function SixthSection() {
    return (
        <div className='platform-section bg-[#F2F4F9]  w-screen flex justify-center'>
            <div className="mx-auto flex flex-col justify-center py-24 max-w-7xl gap-x-9">
                <div className='heading mx-auto'>
                    <span> {" "}
                        Unify
                    </span> {" "}
                    your access control experience
                </div>
                <div className='description mt-5 mx-auto mb-8'>
                    A single, intuitive and open software platform with remote management,
                    dynamic access permissions, and real-time reporting.
                </div>
                <Image src={platformImage} alt="platform image" />
            </div>
        </div>
    )
}

export default SixthSection