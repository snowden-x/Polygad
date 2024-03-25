import React, { useState } from 'react';
import Bottle from './assets/bottle.png'
import Fstore from './assets/foodstorage.png'
import Recycle from './assets/recycle.png'
import Cuttlery from './assets/cuttlery.png'
import Plasbag from './assets/plasticbag.png'
import PlasticC from './assets/plasticchair.png'

{/*Icons from Noun Project
plastic chair by Muhammad Atiq from <a href="https://thenounproject.com/browse/icons/term/plastic-chair/" target="_blank" title="plastic chair Icons">Noun Project</a> (CC BY 3.0)
food storage by Dahlia nur aini from <a href="https://thenounproject.com/browse/icons/term/food-storage/" target="_blank" title="food storage Icons">Noun Project</a> (CC BY 3.0)
Recycle by Cocoa Bella from <a href="https://thenounproject.com/browse/icons/term/recycle/" target="_blank" title="Recycle Icons">Noun Project</a> (CC BY 3.0)
cuttlery by Syahrul Hidayatullah from <a href="https://thenounproject.com/browse/icons/term/cuttlery/" target="_blank" title="cuttlery Icons">Noun Project</a> (CC BY 3.0)
Bottle by Bakunetsu Kaito from <a href="https://thenounproject.com/browse/icons/term/bottle/" target="_blank" title="Bottle Icons">Noun Project</a> (CC BY 3.0) 
plastic bag by Ehtisham Abid from <a href="https://thenounproject.com/browse/icons/term/plastic-bag/" target="_blank" title="plastic bag Icons">Noun Project</a> (CC BY 3.0)
*/}

const Services = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">What we offer</h2>
                    <p className="mt-4 text-xl leading-7 text-indigo-500 sm:mt-8 font-semibold">OUR SERVICES</p>
                </div>
                

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14">
                        <img src={PlasticC} width="70" height="46" className="mx-auto" alt="Plastic Furniture"></img>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Plastic Furniture and Utility Items</h3>
                        <p className="mt-5 text-base text-gray-600">Explore our range of plastic buckets, tanks, and chairs designed to meet various utility needs.</p>
                        <p className="mt-5 text-base text-gray-600">Whether you need sturdy storage solutions or durable seating options, we have you covered with our quality plastic products.</p> 
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <img src={Fstore} width="70" height="46" className="mx-auto" alt="Food Storage Containers"></img>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Food Storage Containers</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Keep your food fresh with our durable plastic food storage containers.</p>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <img src={Plasbag} width="70" height="46" className="mx-auto" alt="Packaging"></img>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Packaging and Shopping Solutions</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Discover our assortment of plastic shopping bags, packaging bags, and water rolls film tailored to fulfill your packaging and carrying requirements. </p>
                        <p className="mt-5 text-base text-gray-600 font-pj">From securing your items during transit to convenient shopping experiences, our products offer reliability and convenience.</p>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                        <img src={Bottle} width="70" height="46" className="mx-auto" alt="Drinkware"></img>

                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Drinkware</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Explore our wide range of plastic drinkware, perfect for everyday use.</p>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <img src={Recycle} width="70" height="46" className="mx-auto" alt="Plastic Recycling"></img>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Plastic Recycling</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Our plastic recycling program helps reduce waste and promote sustainability by processing plastic materials for reuse.</p>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <img src={Cuttlery} width="70" height="46" className="mx-auto" alt="Cuttlery"></img>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Disposable Cutlery</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Convenient and eco-friendly disposable plastic cutlery for any occasion.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Services;