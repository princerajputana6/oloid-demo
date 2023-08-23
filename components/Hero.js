'use client';

import React from 'react'
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import sliderOne from "../Assets/img/slider1.png"

function Hero() {
    return (
        <div className='hero-section w-screen flex justify-center'>
            <Carousel className='max-w-full max-h-full rounded-none '>
                <Image
                    alt="..."
                    height={100}
                    width="100%"
                    src={sliderOne}
                    sizes = {"100vw"}
                />
                <Image
                    alt="..."
                    height={100}
                    width={100}
                    src={sliderOne}
                    sizes = {"100vw"}
                />
                <Image
                    alt="..."
                    height={100}
                    width={100}
                    src={sliderOne}
                    sizes = {"100vw"}
                />
                <Image
                    alt="..."
                    height={100}
                    width={100}
                    src={sliderOne}
                    sizes = {"100vw"}
                />
                <Image
                    alt="..."
                    height={100}
                    width={100}
                    src={sliderOne}
                    sizes = {"100vw"}
                />
            </Carousel>
        </div>

    )
}

export default Hero