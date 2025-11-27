import React from 'react';

// --- ToolCard Component (Horizontal Layout & Styling) ---
const ToolCard = ({ name, icon }) => {
  return (
    // Card uses fixed width (w-52 h-32) which is essential for the seamless scroll animation.
    // The internal layout is flex and centers content, making it robust within its fixed size.
    <div className="flex-none w-64 h-32 bg-[#020202] rounded-xl py-5 px-5 flex justify-center items-center gap-4 border border-gray-700 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
      {/* Icon Container */}
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-white">
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d={icon}
          ></path>
        </svg>
      </div>
      {/* Text Name */}
      <p className="text-white text-base font-medium whitespace-nowrap">{name}</p>
    </div>
  );
};

// --- Card List Definitions (Duplicated Content for Seamless Loop) ---

// Define ONE complete set of cards
const BaseCardSet = (
  <>
    <ToolCard name="CloudWatch" icon="M12 4.004L19 11.004V19.004C19 20.1085 18.1046 21.004 17 21.004H7C5.89543 21.004 5 20.1085 5 19.004V11.004L12 4.004ZM12 4.004L12 11.004M12 4.004V11.004M12 11.004L19 11.004M12 11.004L5 11.004" />
    <ToolCard name="Epicurious" icon="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a1 1 0 110-2 1 1 0 010 2z" />
    <ToolCard name="FeatherDev" icon="M17 20H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v9a2 2 0 01-2 2zM9 1h6M12 19V9" />
    <ToolCard name="Acme Corp" icon="M10 18H5a2 2 01-2-2V8a2 2 012-2h5m0 12h5a2 2 000-4h-5m0 4h-5m5 0h-5m5-4a2 2 000-4h-5m5-4h-5a2 2 01-2-2V4a2 2 012-2h5v4m0 0h5a2 2 012-2v4a2 2 01-2-2h-5" />
    <ToolCard name="Boltshift" icon="M13 10V3L4 14h7v7l9-11h-7z" />
    <ToolCard name="Lightbox" icon="M15 10a5 5 0 11-10 0 5 5 0 0110 0z" />
    <ToolCard name="Spherule" icon="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" />
    <ToolCard name="Polymath" icon="M12 9v6m0 0V9m0 6L9 9l3-6 3 6-3 6z" />
  </>
);


// --- Section Component (Main Layout) ---
const Section = () => {
  return (
    // Outer container: Uses mx-auto to center on mobile, and applies the large margin/borders only on large screens (lg).
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative mx-auto lg:mx-28 lg:border-l lg:border-r border-gray-900 rounded-2xl">

      {/* --- Hero Section --- */}
      <div className="relative pt-20 pb-40 px-4 md:px-8 lg:px-16 text-center">
        {/* Background Video (positioning kept as provided, ensuring it doesn't overlap on mobile) */}
        <div className='absolute top-[-100px] left-1/2 w-full -translate-x-1/2 max-[1680px] md:top-[-3vw]'>
          <video
            autoPlay
            muted
            loop
            className="mx-auto aspect-1680/945 h-auto max-h-[965px] w-full max-w-[1680px]"
          >
            <source src="/vidio/top_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Content and Button - Adjusted text sizing for mobile (default smaller, scales up) */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Connect with 100+ tools
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Gain invaluable predictive analytics and actionable insights, empowering your
            team to make data-driven decisions and close deal.
          </p>
          <div className="flex justify-center items-center w-full">
            <button className="group flex items-center justify-center gap-2 rounded-[58px] border-[1px] px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 border-[#222] bg-[rgba(6,6,6,0.60)] text-[#B1B1B1] shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_0px_0px_rgba(34,34,34,0)] hover:shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_15px_#556]">
              Explore All Tools
            </button>
          </div>
        </div>
      </div>

      {/* --- Row 1: Rotate Left (Seamless Loop) --- */}
      {/* Consistent horizontal padding (px-4/md:px-8/lg:px-16) is maintained */}
      <div className="relative z-10 -mt-24 pb-20 overflow-hidden">
        <div className="flex space-x-8 px-4 md:px-8 lg:px-16">
          {/* The inner div MUST be w-max and contain the animation */}
          <div className="flex w-max animate-rotate-left gap-8">
            {BaseCardSet}
            {BaseCardSet} {/* Duplicated content */}
          </div>
        </div>
      </div>

      {/* --- Row 2: Rotate Right (Seamless Loop) --- */}
      <div className="relative z-10 -mt-16 pb-20 overflow-hidden">
        <div className="flex space-x-8 px-4 md:px-8 lg:px-16">
          <div className="flex w-max animate-rotate-right gap-8">
            {BaseCardSet}
            {BaseCardSet} {/* Duplicated content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;