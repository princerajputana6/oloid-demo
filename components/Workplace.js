import React from 'react'
import WorkplaceCard from './WorkplaceCard'
import WorkplaceOne from "../Assets/img/o4.png"
import WorkplaceTwo from "../Assets/img/o3.png"
import WorkplaceThree from "../Assets/img/o2.png"
import WorkplaceFour from "../Assets/img/o1.png"

function Workplace() {
    return (
        <div className=' w-screen flex flex-wrap justify-center'>
            <div className="mx-auto flex flex-wrap flex-col justify-center py-24 max-w-7xl gap-x-9">
                <div className='heading mx-auto'>
                    Safety, security and compliance for the
                    <span> {" "}
                        modern workplace
                    </span>
                </div>
                <div className='workplace-cards flex flex-wrap gap-[1.25rem] mt-[3rem]'>
                    <WorkplaceCard
                    image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-ef262b0/www.oloid.ai/wp-content/uploads/2023/07/testimonialimg3.png"}
                    title="Office"
                    description={'Elevating employee experience in the hybrid workplace.'}
                    link="/"
                    />
                    <WorkplaceCard
                    image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-ef262b0/www.oloid.ai/wp-content/uploads/2023/07/testimonialimg2.png"}
                    title="Factories & Warehouses"
                    description={'End-to-end safety & security solutions for the deskless worker.'}
                    link="/"
                    />
                    <WorkplaceCard
                    image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-ef262b0/www.oloid.ai/wp-content/uploads/2023/07/Rectangle-872-3.png"}
                    title="Enterprise"
                    description={'Physical Identity and access solutions for large enterprises..'}
                    link="/"
                    />
                    <WorkplaceCard
                    image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-ef262b0/www.oloid.ai/wp-content/uploads/2023/07/testimonialimg1.png"}
                    title="Commercial Real Estate"
                    description={'CRE solutions designed for commercial landlords and business managers..'}
                    link="/"
                    />
                </div>
            </div>
        </div>
    )

}

export default Workplace