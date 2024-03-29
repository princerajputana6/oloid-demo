import React from 'react'
import FirstSectionCard from './FirstSectionCard'

function FirstSection() {
    return (
        <div className='first-section w-screen flex flex-wrap justify-center '>
            <div className="mx-auto flex flex-wrap  flex-col max-w-7xl py-24">
                <div className='heading mx-auto'>
                Modernize workplace  
                    <span> {" "}
                    identity and access management
                    </span> {" "}
                    experience with OLOID
                </div>
                {/* <div className='description mt-5 mx-auto'>
                     Provision users from existing SSO systems to enable quick and automatic login to enterprise apps
                </div> */}
                <div className="card-wrapper flex flex-wrap  mt-[49px] gap-x-[1.25rem] justify-center">
                    {<FirstSectionCard
                    imgAlt = "first image"
                    imgSrc = "https://www.flowbite-react.com/images/blog/image-1.jpg"
                    title = "Multiple users, Shared Devices"
                    description = "Allows Windows PCs, iPads and Android devices to be shared between multiple users easily Simple user-switching without needing a username or password"
                    />}
                    {<FirstSectionCard
                    imgAlt = "first image"
                    imgSrc = "https://www.flowbite-react.com/images/blog/image-1.jpg"
                    title = "Multiple users, Shared Devices"
                    description = "Allows Windows PCs, iPads and Android devices to be shared between multiple users easily Simple user-switching without needing a username or password"
                    />}
                    {<FirstSectionCard
                    imgAlt = "first image"
                    imgSrc = "https://www.flowbite-react.com/images/blog/image-1.jpg"
                    title = "Multiple users, Shared Devices"
                    description = "Allows Windows PCs, iPads and Android devices to be shared between multiple users easily Simple user-switching without needing a username or password"
                    />}
                     {<FirstSectionCard
                    imgAlt = "first image"
                    imgSrc = "https://www.flowbite-react.com/images/blog/image-1.jpg"
                    title = "Multiple users, Shared Devices"
                    description = "Allows Windows PCs, iPads and Android devices to be shared between multiple users easily Simple user-switching without needing a username or password"
                    />}
                </div>
            </div>
        </div>
    )
}

export default FirstSection