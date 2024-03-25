import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-600 font-pj">Don't just take our word for it...</p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">What Our clients say about us</h2>
                    </div>

                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        
                    </div>

                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            <div className="flex flex-col overflow-hidden shadow-xl -rotate-3 rounded-lg">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                        </div>

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">"Polygad's commitment to sustainability and innovation is unmatched."</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj"> - Eric Yeboah</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl rotate-3 rounded-lg">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                        </div>

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“Polygad has transformed our food storage solutions.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj"> - Seyram</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl -rotate-3 rounded-lg">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                        </div>

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“They have been instrumental in enhancing our product packaging.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj"> - Stacy Blankson</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Testimonials;