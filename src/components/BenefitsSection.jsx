import React from 'react';

// Reusable component for the hexagonal icons (used in the third card)
const HexagonIcon = ({ children }) => (
    <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center border border-gray-600/50 backdrop-blur-sm">
        {children}
    </div>
);

const BenefitsSection = () => {
    return (
        <section className="bg-black py-20 text-white font-sans">
            {/* Title and Subtitle */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-5xl font-bold mb-4">Benefits you get with CodeFus</h2>
                <p className="text-xl text-gray-400">
                    Work with your team to fix bugs faster with shared reports and issue tracking.
                </p>
            </div>

            {/* Three Benefit Cards Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: Real-Time Bug Detection (with Code Block) */}
                <div className="bg-black border border-gray-800 rounded-xl p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Real-Time Bug Detection</h3>
                        <p className="text-gray-400 mb-6">
                            Instantly identify coding errors as you write, helping you catch mistakes before they cause bigger problems.
                        </p>
                    </div>
                    <div className="bg-black rounded-lg overflow-x-auto">
                        <img src="/images/box1.jpg" alt="" />
                    </div>
                </div>

                {/* Card 2: Detailed Error Reporting (with Activity) */}
                <div className="bg-black border border-gray-800 rounded-xl flex flex-col justify-between">
                    <div className='px-8 pt-8'>
                        <h3 className="text-2xl font-semibold mb-4">Detailed Error Reporting</h3>
                        <p className="text-gray-400 mb-6">
                            Get comprehensive reports on every error, including severity levels, potential solutions, and code snippets.
                        </p>
                    </div>
                    <div className="">
                        <img src="/images/box2.png" alt="" />
                    </div>
                </div>

                {/* Card 3: Seamless Integration (with Icons) */}
                <div className="bg-black border border-gray-800 rounded-xl flex flex-col justify-between">
                    <div className='px-8 pt-8'>
                        <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
                        <p className="text-gray-400 mb-6">
                            Easily integrate with your existing development environment, supporting major languages and frameworks.
                        </p>
                    </div>
                    <div className="">
                        <img src="/images/box3.png" alt="" />
                    </div>
                </div>

            </div>

            <div className="w-full flex justify-center items-center mt-14">
                <div className="p-[1px] rounded-[58px]">
                    <button className="group flex items-center justify-center gap-2 px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 rounded-[500px] bg-[#151322] shadow-[0px_-10px_14px_0px_#101B36_inset,0_0_0px_0px_rgba(93,104,163,0)] hover:shadow-[0px_-10px_14px_0px_#101B36_inset,0_0_15px_#5D68A3]">
                        <span className="bg-gradient-to-r from-[#DDB6ED] to-[#C6CAF8] bg-clip-text text-transparent">
                            Try It Now For Free
                        </span>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default BenefitsSection;