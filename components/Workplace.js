import React from 'react'
import WorkplaceCard from './WorkplaceCard'
import WorkplaceOne from "../Assets/img/o4.png"
import WorkplaceTwo from "../Assets/img/o3.png"
import WorkplaceThree from "../Assets/img/o2.png"
import WorkplaceFour from "../Assets/img/o1.png"

function Workplace() {
    return (
        <div className=' w-screen flex justify-center'>
            <div className="mx-auto flex flex-col justify-center py-24 max-w-7xl gap-x-9">
                <div className='heading mx-auto'>
                    Safety, security and compliance for the
                    <span> {" "}
                        modern workplace
                    </span>
                </div>
                <div className='workplace-cards flex gap-[1.25rem] mt-[3rem]'>
                    <WorkplaceCard
                    image={"/o4.png"}
                    title="Office"
                    description={'Elevating employee experience in the hybrid workplace.'}
                    link="/"
                    />
                    <WorkplaceCard
                    image={"@Assets/img/o3.png"}
                    title="Factories & Warehouses"
                    description={'End-to-end safety & security solutions for the deskless worker.'}
                    link="/"
                    />
                    <WorkplaceCard
                    image={"Assets/img/o2.png"}
                    title="Enterprise"
                    description={'Physical Identity and access solutions for large enterprises..'}
                    link="/"
                    />
                    <WorkplaceCard
                    image={"Assets/img/o1.png"}
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