'use client';
import React from 'react'
import WorkplaceCard from './WorkplaceCard'
import WorkplaceOne from "../Assets/img/o4.png"
import WorkplaceTwo from "../Assets/img/o3.png"
import WorkplaceThree from "../Assets/img/o2.png"
import WorkplaceFour from "../Assets/img/o1.png"
import { Accordion } from 'flowbite-react';
import Testimonial from './Testimonial';

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
                        image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-4a9b36e/www.oloid.ai/wp-content/uploads/2023/07/testimonialimg3.png"}
                        title="Office"
                        description={'Elevating employee experience in the hybrid workplace.'}
                        link="/"
                    />
                    <WorkplaceCard
                        image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-4a9b36e/www.oloid.ai/wp-content/uploads/2023/07/testimonialimg2.png"}
                        title="Factories & Warehouses"
                        description={'End-to-end safety & security solutions for the deskless worker.'}
                        link="/"
                    />
                    <WorkplaceCard
                        image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-4a9b36e/www.oloid.ai/wp-content/uploads/2023/07/Rectangle-872-3.png"}
                        title="Enterprise"
                        description={'Physical Identity and access solutions for large enterprises..'}
                        link="/"
                    />
                    <WorkplaceCard
                        image={"https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-4a9b36e/www.oloid.ai/wp-content/uploads/2023/07/testimonialimg1.png"}
                        title="Commercial Real Estate"
                        description={'CRE solutions designed for commercial landlords and business managers..'}
                        link="/"
                    />
                </div>
                <div className='workplace-mobile-cards flex flex-wrap gap-[1.25rem] mt-[3rem]'>
                    <Accordion className="w-full border-none">
                        <Accordion.Panel className='workplace-card' >
                            <div className='workplace-mobile-card' style={{ background: "url('https://www.oloid.ai/wp-content/uploads/2023/07/testimonialimg3.png')  no-repeat;" }}>
                                <Accordion.Title >
                                    Factories and Warehouses
                                    {/* <img src="https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-4a9b36e/www.oloid.ai/wp-content/uploads/2023/07/testimonialimg3.png" alt="workplace card" /> */}
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p>End-to-end safety & security solutions for the deskless worker.</p>
                                    <Testimonial />
                                    <a href="" className='inline-flex items-center px-3 pl-0 py-2 text-[18px] leading-[20px] text-center text-[#2265B0] avenirBlack'>
                                        Learn more &nbsp;
                                        <span className="blue-arrow">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.31451 1.18457L12.25 6.12008L7.31451 11.0556" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2499 6.12012L1.75 6.12012" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                                        </span>
                                    </a>
                                </Accordion.Content>
                            </div>

                        </Accordion.Panel>
                        <Accordion.Panel className='workplace-card'>
                        <div className='workplace-mobile-card' style={{ background: "url('https://www.oloid.ai/wp-content/uploads/2023/07/testimonialimg3.png')  no-repeat;" }}>
                                <Accordion.Title >
                                    Enterprise
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p>End-to-end safety & security solutions for the deskless worker.</p>
                                    <Testimonial />
                                    <a href="" className='inline-flex items-center px-3 pl-0 py-2 text-[18px] leading-[20px] text-center text-[#2265B0] avenirBlack'>
                                        Learn more &nbsp;
                                        <span className="blue-arrow">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.31451 1.18457L12.25 6.12008L7.31451 11.0556" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2499 6.12012L1.75 6.12012" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                                        </span>
                                    </a>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel className='workplace-card' >
                        <div className='workplace-mobile-card' style={{ background: "url('https://www.oloid.ai/wp-content/uploads/2023/07/testimonialimg3.png')  no-repeat;" }}>
                                <Accordion.Title >
                                    Offices
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p>End-to-end safety & security solutions for the deskless worker.</p>
                                    <Testimonial />
                                    <a href="" className='inline-flex items-center px-3 pl-0 py-2 text-[18px] leading-[20px] text-center text-[#2265B0] avenirBlack'>
                                        Learn more &nbsp;
                                        <span className="blue-arrow">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.31451 1.18457L12.25 6.12008L7.31451 11.0556" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2499 6.12012L1.75 6.12012" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                                        </span>
                                    </a>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel className='workplace-card'>
                        <div className='workplace-mobile-card' style={{ background: "url('https://www.oloid.ai/wp-content/uploads/2023/07/testimonialimg3.png')  no-repeat;" }}>
                                <Accordion.Title >
                                    Commercial and Real Estate
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p>End-to-end safety & security solutions for the deskless worker.</p>
                                    <Testimonial />
                                    <a href="" className='inline-flex items-center px-3 pl-0 py-2 text-[18px] leading-[20px] text-center text-[#2265B0] avenirBlack'>
                                        Learn more &nbsp;
                                        <span className="blue-arrow">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.31451 1.18457L12.25 6.12008L7.31451 11.0556" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2499 6.12012L1.75 6.12012" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                                        </span>
                                    </a>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                    </Accordion>
                </div>


            </div>
        </div>
    )

}

export default Workplace