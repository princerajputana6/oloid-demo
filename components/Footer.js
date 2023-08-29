import React from 'react'
import Image from "next/image"
import oloid_logo from "../Assets/img/oloid_logo.svg"

function Footer() {
    return (
        <div className=' bg-[#27354E] w-screen flex flex-wrap  justify-center'>
            <div className="mx-auto flex flex-wrap  flex-col justify-center py-24 pb-0 max-w-7xl gap-x-9">
                <div className="footer-t flex flex-wrap  justify-between ">
                    <div className="w-[47%] p-4">
                        <div className="flex flex-wrap  lg:flex-1 mb-5">
                            <a href="/" className=" p-1.5 text-3xl text-[#fff] max-w-[140px]">
                                <img src="https://www.oloid.ai/wp-content/uploads/2023/03/whitewordmark-2.png" alt="logo" />
                            </a>
                        </div>

                        <h5 className='sub-heading'>Elevate your workplace identity and access management today!</h5>
                        <p className='text-[18px] mt-[.65rem] leading-[2.075rem] text-white '>
                            We enable secure and privacy-forward authentication with a unified identity framework that connects and manages workplace identity and access.
                        </p>
                    </div>
                    <div className="newsletter w-[49.5%] max-h-[260px]  bg-[#f2f4f9] px-[35px] pt-[25px] pb-[20px] rounded-lg p-8">
                        <h3 className='subscribe-heading text-[1.5rem] text-[#233650] leading-[1.80rem] font-bold avenirBlack'>Elevate your workplace identity and access managment experience today!</h3>
                        <div className='subscribe-panel flex flex-wrap  flex-col items-start flex-shrink-0 w-full  mx-auto mb-[28px] sm:w-auto mt-[2.5rem]'>
                            <label for="email" class="avenirBlack flex-shrink-0 mr-auto text-[15px] font-bold text-[#233751] mb-[9px]">Work Email* </label>
                            <form action="#" class="flex flex-wrap flex-col mt-1 items-center w-full md:flex-row">
                                <input type="email" id="email" style={{ boxShadow: "0px 2px 12px rgba(20,20,43,8%) !important;" }} placeholder="" class="shadow-lg bg-white border-[#dee3eb] text-gray-900 md:w-64 mb-2 md:mb-0 md:mr-4 text-sm rounded-[30px] w-full p-2.5 required" />
                                <input type="submit" class="text-white bg-[#2265b0] hover:bg-[#2265b0] focus:ring-4 focus:outline-none focus:ring-[#2265b0] font-medium rounded-[30px] text-[1rem]  sm:w-auto px-[3.375rem] py-[.75rem] text-center w-[112px] avenirBlack" value={"Submit"} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-b bg-transparent dark:bg-gray-900">

                    <div class="mx-auto w-full max-w-screen-xl">
                        <div class="grid gap-8 px-4 py-6 lg:py-8 md:grid-cols-5 sm:grid-cols-1">
                            <div>
                                <h2 class="mb-6 text-[20px] font-semibold text-white avenirBlack dark:text-white">Product</h2>
                                <ul class="text-white dark:text-gray-400 text-[1rem] font-normal">
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline leading-[26px]">M-Tag</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Cloud kay</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Smart reader</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Time Clock</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Workflow Automation</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Pasword Authenticator</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-[20px] font-semibold text-white avenirBlack dark:text-white">Solutions</h2>
                                <ul class="text-white dark:text-gray-400 text-[1rem] font-normal">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Overview</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Offices</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Factories & warehouses
                                        </a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Enterprise</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">commercial real Estate</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-[20px] font-semibold text-white avenirBlack dark:text-white">Capabilities</h2>
                                <ul class="text-white dark:text-gray-400 text-[1rem] font-normal">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Integrations</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Security & Data Privacy</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Factories & warehouses
                                        </a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Enterprise</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">commercial real Estate</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-[20px] font-semibold text-white avenirBlack dark:text-white">Resources</h2>
                                <ul class="text-white dark:text-gray-400 text-[1rem] font-normal">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Blog</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">White papers</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Case study</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">News</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-[20px] font-semibold text-white avenirBlack dark:text-white">Company</h2>
                                <ul class="text-white dark:text-gray-400 text-[1rem] font-normal">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">About Us</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Inverters & Advisers</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Work with US</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Go Green</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Partner with Us</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline leading-[26px]">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-c">
                    <div class="px-4 py-6 bg-transparent dark:bg-gray-700 md:flex flex-wrap md:items-center md:justify-between">
                        <div className='doc-links flex flex-wrap w-1/6 justify-between text[1rem]'>
                            <p className='text-white'>Privacy</p>
                            <p className='text-white'>legal</p>
                            <p className='text-white'>Cookies</p>
                        </div>
                        <div class="copyright text-[1rem] leading-[26px] w-2/6 text-white dark:text-gray-300 sm:text-start text-start">© 2023 OLOID | . All Rights Reserved. All trademarks are properties of their respective owner.
                        </div>
                        <div class="social flex flex-wrap mt-4 space-x-5 sm:justify-center items-center md:mt-0">
                            <div>
                                <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Facebook</span>
                                </a>
                                <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                    </svg>
                                    <span class="sr-only">Discord</span>
                                </a>
                                <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Twitter</span>
                                </a>
                            </div>

                            <div>
                                <Image src="https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-4a9b36e/www.oloid.ai/wp-content/uploads/2022/09/APP-STORE-v1-logo.svg" width={100} height={100} alt='Apple store' />
                                <Image src="https://cdn-gkbkl.nitrocdn.com/EahsqmkNZSarsOQvgGaWKiasFdUDbxev/assets/images/optimized/rev-4a9b36e/www.oloid.ai/wp-content/uploads/2022/09/play-store-v1.svg" width={100} height={100} alt="playstore" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Footer