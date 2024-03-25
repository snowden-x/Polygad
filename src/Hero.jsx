import React, { useState } from 'react';
import Cups from './assets/cups.webp'
import Plates from './assets/platescup.webp'
import Softbottle from './assets/softbottle.webp'
import Watbottle from './assets/watbottles.webp'
import PrintM from './assets/printm.webp'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Badge } from '@radix-ui/themes';
import Faq from './Faq';
import Testimonials from './Testimonials';
import Services from './Services';
import OurMission from './OurMission';
import Stats from './Stats';
import MapComponent from './MapComponent';

const Hero = () => {
    return (
        <div className="relative">
            <section className="bg-white overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                    <div className="relative rounded-3xl h-[600px] transform -translate-y-20 w-full overflow-hidden lg:-translate-y-40 lg:order-1 lg:h-auto lg:w-5/12 ">
                        <div className="absolute inset-0">
                            <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false} showStatus={false} className="my-carousel">
                                <div>
                                    <img className="object-cover w-full h-auto" src={Plates} alt="Plates" />
                                </div>
                                <div>
                                    <img className="object-cover w-full h-auto" src={PrintM} alt="Printing Machine" />
                                </div>
                                <div>
                                    <img className="object-cover w-full h-auto" src={Softbottle} alt="Bottles" />
                                </div>
                                <div>
                                    <img className="object-cover w-full h-auto" src={Cups} alt="Cups" />
                                </div>

                            </Carousel>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-5 left-0">
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center justify-center">

                                    <h2 className="font-bold text-white text-2xl ml-2.5 sm:text-3xl md:text-4xl lg:text-6xl">POLYGAD</h2>
                                </div>
                                <p className="mx-8 mt-1.5 text-lg text-center font-bold text-blue-400">EVERYONE DESERVES QUALITY.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="absolute bottom-6 right-0 hidden lg:block">
                            <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                        </div>

                        <div className="relative px-4 pt-10 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h3 className="text-4xl font-bold text-black sm:text-6xl xl:text-4xl">
                                Unlock the potential of innovative plastic solutions for your business.<br />

                            </h3>
                            <p className="mt-8 text-xl text-gray-600 font-medium">At Polygad, we're committed to innovating the plastics industry sustainably. With a focus on quality and precision, we tailor cutting-edge solutions to meet diverse client needs, driving progress for a brighter future.</p>

                            <div className="flex flex-col items-center justify-between sm:flex-row">
                                <p className="flex justify-center items center mt-7 whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700 text-center w-fit">Packaging like never before</p>
                                <p className="flex justify-center items center mt-7 whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700 text-center w-fit">Fast and Easy.</p>
                                <p className="flex justify-center items center mt-7 whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700 text-center w-fit">Earth Friendly</p>


                            </div>



                        </div>

                    </div>


                </div>
            </section>
            <Services></Services>
            <OurMission></OurMission>
            <Testimonials></Testimonials>
            <Stats></Stats>
            <Faq></Faq>
            
        </div>

    )
}
export default Hero;