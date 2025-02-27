import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
            <footer
                className="bg-cover bg-center h-128"
                style={{ backgroundImage: "url('/images/footer.png')" }}
            >
                <div className="container px-4 mx-auto h-full flex flex-col justify-between">


                    <div className="py-8">
                        <div className="-mx-4 flex flex-wrap justify-between">
                            <img
                                src="/images/logo1.png"
                                alt="Ar Group"
                                height={150}
                                width={150}
                            />

                            <div className="flex items-center space-x-4">
                                <span className="text-[#E9BD8D] text-2xl">Follow Us</span>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-[#E9BD8D] text-4xl" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-[#E9BD8D] text-4xl" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-[#E9BD8D] text-4xl" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-[#E9BD8D] text-4xl" />
                                </a>
                            </div>
                        </div>


                        <div className="-mx-4 flex flex-wrap justify-between">
                            {/* About Us Section */}
                            <div className="px-4 my-4 w-full xl:w-1/5 text-white">
                                <h2 className="text-2xl pb-4 mb-4   text-[#E9BD8D]">About Us</h2>
                                <p className='mt-4'>(456) 789-12301</p>
                                <p className='mt-2'>info@modrino.co.uk</p>
                                <p className='mt-2'>South 13th street</p>
                                <p className='mt-2'>New York, America</p>
                            </div>

                            {/* Explore Section */}
                            <div className="px-4 my-4 w-full sm:w-auto text-white" >
                                <h2 className="text-2xl pb-4 mb-4  text-[#E9BD8D]">Explore</h2>
                                <ul className="leading-8">
                                    <li><a href="#" className="hover:text-[#E9BD8D]">Home</a></li>
                                    <li><a href="#" className="hover:text-[#E9BD8D]">Blog</a></li>
                                    <li><a href="#" className="hover:text-[#E9BD8D]">Contact us</a></li>
                                    <li><a href="#" className="hover:text-[#E9BD8D]">Services</a></li>
                                </ul>
                            </div>

                            {/* Recent News Section */}
                            <div className="px-4 my-4 w-full sm:w-auto text-white">
                                <h2 className="text-2xl pb-4 mb-4  text-[#E9BD8D]">Recent News</h2>
                                <ul className="leading-8">
                                    <li>June 14, 2024 - Puff pastry bliss.</li>
                                    <li>June 14, 2024 - Puff pastry bliss.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */} 
                    <div className=" py-4 text-gray-100 text-center">
                        <div className="container mx-auto px-6 text-center">
                            <div className=" text-center">
                                <div className="px-4 w-full text-[#737373] text-center sm:w-auto sm:text-left">
                                  <p className='text-center'> © 2025 Abdullah Al Sakib. All rights reserved </p>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}