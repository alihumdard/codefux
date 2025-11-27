import React from 'react';

// Reusable component for the checkmark icon
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-green-400 mr-2 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const PricingSection = () => {
    return (
        <>
            <section className="bg-black pt-20 px-4 text-white font-sans">
                {/* Title and Subtitle */}
                <div className="text-center mb-16 max-w-xl mx-auto">
                    <h2 className="text-5xl font-bold mb-4">Pricing</h2>
                    <p className="text-xl text-gray-400">
                        Free forever. Upgrade for unlimited seats, more cloud storage, and exclusive features.
                    </p>
                </div>

                {/* Pricing Cards Container */}
                <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Pricing Card 1 */}
                    <div className="bg-black rounded-xl relative border border-gray-900 overflow-hidden flex flex-col justify-between">
                        <div className="relative w-fit">
                            <img
                                src="/public/images/image1.png"
                                alt=""
                                className="block h-full"
                            />

                            {/* Black gradient overlay at bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                        </div>

                        <div className="relative z-10 flex-grow">
                            <div className='p-6'>
                                {/* Price */}
                                <p className="text-7xl font-light mb-8">$19</p>

                                {/* Features */}
                                <div className="mb-2 space-y-3">
                                    <div className="flex items-center text-gray-300">
                                        <CheckIcon />
                                        <p>
                                            <em className="font-medium text-[#a7a7b4] not-italic pr-1">3</em>
                                            <span className='text-gray-500'> seats available</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <CheckIcon />
                                        <p>
                                            <em className="font-medium text-[#a7a7b4] not-italic pr-1">3</em>
                                            <span className='text-gray-500'>500GB of cloud storage</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="relative z-10 flex flex-col px-6 pb-6 items-center">
                                <div className="mb-7 flex w-full items-center justify-center gap-2">
                                    <div className="h-[1px] w-full bg-[#1F1F21]"></div>
                                    <span className="w-full text-center text-xs font-medium text-[#49494F] uppercase">7 DAYS FOR FREE</span>
                                    <div className="h-[1px] w-full bg-[#1F1F21]"></div>
                                </div>
                                <button className="mb-5 group flex items-center justify-center gap-2 rounded-[58px] border-[1px] px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 border-[#222] bg-[rgba(6,6,6,0.60)] text-[#B1B1B1] shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_0px_0px_rgba(34,34,34,0)] hover:shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_15px_#556] mb-4.5 w-full">
                                    Subscribe Now
                                </button>
                                <p className="text-gray-500 text-sm">30-day money-back guarantee</p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Card 2 */}
                    <div className="bg-black rounded-xl relative border border-gray-900 overflow-hidden flex flex-col justify-between">
                        <div className="relative w-fit">
                            <img
                                src="/public/images/image2.png"
                                alt=""
                                className="block h-full"
                            />

                            {/* Black gradient overlay at bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                        </div>

                        <div className="relative z-10 flex-grow">
                            <div className='p-6'>
                                {/* Price */}
                                <p className="text-7xl font-light mb-8">$29</p>

                                {/* Features */}
                                <div className="mb-2 space-y-3">
                                    <div className="flex items-center text-gray-300">
                                        <CheckIcon />
                                        <p>
                                            <em className="font-medium text-[#a7a7b4] not-italic pr-1">9</em>
                                            <span className='text-gray-500'> seats available</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <CheckIcon />
                                        <p>
                                            <em className="font-medium text-[#a7a7b4] not-italic pr-1">1TB</em>
                                            <span className='text-gray-500'> of cloud storage</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="relative z-10 flex flex-col px-6 pb-6 items-center">
                                <div className="mb-7 flex w-full items-center justify-center gap-2">
                                    <div className="h-[1px] w-full bg-[#1F1F21]"></div>
                                    <span className="w-full text-center text-xs font-medium text-[#49494F] uppercase">7 DAYS FOR FREE</span>
                                    <div className="h-[1px] w-full bg-[#1F1F21]"></div>
                                </div>
                                <button className="mb-5 group flex items-center justify-center gap-2 rounded-[58px] border-[1px] px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 border-[#222] bg-[rgba(6,6,6,0.60)] text-[#B1B1B1] shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_0px_0px_rgba(34,34,34,0)] hover:shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_15px_#556] mb-4.5 w-full">
                                    Subscribe Now
                                </button>
                                <p className="text-gray-500 text-sm">30-day money-back guarantee</p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Card 3 */}
                    <div className="bg-black rounded-xl relative border border-gray-900 overflow-hidden flex flex-col justify-between">
                        <div className="relative w-fit">
                            <img
                                src="/public/images/image3.png"
                                alt=""
                                className="block h-full"
                            />

                            {/* Black gradient overlay at bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                        </div>

                        <div className="relative z-10 flex-grow">
                            <div className='p-6'>
                                {/* Price */}
                                <p className="text-7xl font-light mb-8">$49</p>

                                {/* Features */}
                                <div className="mb-2 space-y-3">
                                    <div className="flex items-center text-gray-300">
                                        <CheckIcon />
                                        <p>
                                            <em className="font-medium text-[#a7a7b4] not-italic pr-1">Unllimitted</em>
                                            <span className='text-gray-500'> seats available</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <CheckIcon />
                                        <p>
                                            <em className="font-medium text-[#a7a7b4] not-italic pr-1">Unllimitted</em>
                                            <span className='text-gray-500'>of cloud storage</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="relative z-10 flex flex-col px-6 pb-6 items-center">
                                <div className="mb-7 flex w-full items-center justify-center gap-2">
                                    <div className="h-[1px] w-full bg-[#1F1F21]"></div>
                                    <span className="w-full text-center text-xs font-medium text-[#49494F] uppercase">7 DAYS FOR FREE</span>
                                    <div className="h-[1px] w-full bg-[#1F1F21]"></div>
                                </div>
                                <button className="mb-5 group flex items-center justify-center gap-2 rounded-[58px] border-[1px] px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 border-[#222] bg-[rgba(6,6,6,0.60)] text-[#B1B1B1] shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_0px_0px_rgba(34,34,34,0)] hover:shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_15px_#556] mb-4.5 w-full">
                                    Subscribe Now
                                </button>
                                <p className="text-gray-500 text-sm">30-day money-back guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p class="px-6 pt-20 pb-8 text-center text-sm text-[#72727D] opacity-70 md:pb-20">
                    The offer is available for a limited time. After the trial period expires, the amount shown on each option of the subscription plan will be charged.
                </p>
            </section>
            <footer class="mx-auto flex w-full max-w-[1680px] flex-col items-center overflow-hidden pb-20 px-6 md:px-20">
                <div class="mb-96 h-px w-full max-w-[1320px] bg-[linear-gradient(90deg,rgba(233,233,233,0.00)_0%,rgba(255,255,255,0.60)_53%,rgba(233,233,233,0.00)_100%)] opacity-30">
                    <p class=" text-center text-sm text-[#ffffff] opacity-70 md:text-base mt-10 ">
                        © 2025
                        <a href="" class="pl-1 text-white transition-opacity duration-200 ease-in-out hover:underline">Riotters</a>
                        . All rights reserved.
                        <br class="md:hidden" />
                        Project is developed as a part of RnD by
                        <a href="" class="pr-1 text-gray-50 transition-opacity duration-200 ease-in-out hover:underline">Riotters</a>
                        .
                    </p>
                </div>
            </footer>
        </>
    );
};

export default PricingSection;