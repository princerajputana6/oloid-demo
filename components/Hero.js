'use client';

import React from 'react'
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import sliderOne from "../Assets/img/firstSlider.png"
import sliderTwo from "../Assets/img/secondSlider.png"
import sliderThree from "../Assets/img/thirdSlider.png"
import sliderFour from "../Assets/img/fourthSlider.png"
function Hero() {
    return (
        <div className='hero-section w-screen flex justify-center'>
            <div className='mx-auto flex max-w-7xl rounded-none'>
                <div className='w-1/2'>
                    <div className='p-[10px] py-[59px]'>
                        <h1 className='heading text-[54px]  leading-[4.1rem] font-black'>
                            <span>Converging cyber and physical identity</span> for the modern workplace
                        </h1>
                        <p className='text-[1.25rem] mt-[1rem] leading-[2.3rem] font-medium'>Secure your workplace, automate business processes, and elevate employee experience.</p>
                        <div className='flex mt-[2.5rem]'>
                            <button className='mr-[1.51rem] flex items-center text-white px-[30px] pt-[20px] pb-[22px] bg-[#2265b0] rounded-[6rem] text-[18px]  font-black'>Get Started &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path d="M7.85944 1.21542L13.5 6.856L7.85944 12.4966" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.4999 6.85602L1.5 6.85602" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                            <button className='flex items-center text-[#2265b0] px-[30px] pt-[20px] pb-[22px] text-[18px]  font-black'>
                                <span className='w-[2rem] h-[2rem] flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                        <path d="M5.64198 12.3708C4.97635 12.7962 4.10339 12.3182 4.10339 11.5282V3.51349C4.10339 2.72352 4.97628 2.24546 5.64192 2.67088L11.9116 6.67788C12.5268 7.07111 12.5269 7.96978 11.9116 8.36306L5.64198 12.3708Z" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                &nbsp;
                                Watch Video</button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Carousel className=''>
                        <Image
                            alt="..."
                            height={100}
                            width="100%"
                            src={sliderOne}
                            sizes={"100%"}
                        />
                        <Image
                            alt="..."
                            height={100}
                            width={100}
                            src={sliderTwo}
                            sizes={"100%"}
                        />
                        <Image
                            alt="..."
                            height={100}
                            width={100}
                            src={sliderThree}
                            sizes={"100%"}
                        />
                        <Image
                            alt="..."
                            height={100}
                            width={100}
                            src={sliderFour}
                            sizes={"100%"}
                        />
                    </Carousel>
                </div>
            </div>

        </div>

    )
}

export default Hero