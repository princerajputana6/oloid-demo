import React from 'react'
import Image from 'next/image'
import identity from "../Assets/img/identity.png"
import IdentityCard from './IdentityCard'

function Identity() {
    return (
        <div className='identity-section w-screen flex flex-wrap justify-center'>
            <div className="mx-auto flex flex-wrap flex-col justify-center my-24 max-w-7xl gap-x-9">
                <div className='heading'>
                Enabling the<span> {" "}future of work</span>{" "}for progressive organizations
                </div>
                <div className='workplace-cards flex flex-wrap gap-[1.75rem] mt-[3rem]'>
                    <IdentityCard
                    image = "https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-8b867e8/www.oloid.ai/wp-content/uploads/2022/08/human-resources-search-team-svg.svg"
                    title = "Who we are"
                    description = "Learn more about the mission, vision and values that guide our way forward and get to know our leadership team."
                    linkTitle = "About Us"
                    link = ""
                    />
                    <IdentityCard
                    image = "https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-8b867e8/www.oloid.ai/wp-content/uploads/2022/06/real-estate-action-building-shield-1.svg"
                    title = "What we do"
                    description = "Learn how workplaces are boosting safety, security and compliance by using OLOID’s technology."
                    linkTitle = "Solutions Overview"
                    link = ""
                    />
                    <IdentityCard
                    image = "https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-8b867e8/www.oloid.ai/wp-content/uploads/2022/06/pet-tracking-tablet-1.svg"
                    title = "How we do it"
                    description = "Learn more about our approach to authentication, automation and identity management."
                    linkTitle = "Products Overview"
                    link = ""
                    />
                </div>
            </div>
        </div>
    )
}

export default Identity