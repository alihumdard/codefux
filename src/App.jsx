import React from 'react';
import Section from './components/Section';

// 

// The App component encapsulates the entire design.
const App = () => {
  return (
    <div className="font-intertight h-full bg-black text-white relative -z-1">
      <div className='absolute top-[-480px] left-1/2 w-full -translate-x-1/2 max-[1680px]:top-[-25vw]'>

        <video
          autoPlay
          muted
          loop
          className="mx-auto aspect-1680/945 h-full max-h-[965px] w-full max-w-[1680px]"
        >
          {/* Note: Ensure 'top_bg.mp4' is accessible in the runtime environment */}
          <source src="/vidio/top_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <nav className="sticky top-8 z-50 w-full">
        {/* Inner container for centering and the pill shape */}
        <div className="max-w-[1075px] mx-auto flex justify-between items-center rounded-full border-[#ffffff1a] bg-[#0a0a0ab3] px-4 py-4 ">

          <div className="flex items-center justify-between gap-8 w-full">
            {/* Logo Pill */}
            <a
              href="#"
              className="text-white text-2xl rounded-full px-4 py-2 transition duration-200"
            >
              Codefus
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-3">
              {["Services", "Features", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-200 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group items-center justify-center gap-2 rounded-[58px] border-[1px] px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 border-[#222] bg-[rgba(6,6,6,0.60)] text-[#B1B1B1] shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_0px_0px_rgba(34,34,34,0)] hover:shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_15px_#556] hidden md:flex">
              <span>Try For Free</span>

              {/* Arrow Icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

        </div>
      </nav>

      <header className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-10">
        <h1 className="mt-16 bg-[linear-gradient(180deg,_#F4F4F6_40.09%,_#B3B0BC_90.52%)] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-[64px] md:leading-[72px] md:tracking-[-2px] max-w-4xl">
          Detect, Report, and Fix Code Errors Faster Than Ever.
        </h1>
        <p className="text-[#e3e3e4] sm:text-lg md:text-xl md:text-[#9192A1] pt-4 pb-10" >
          Our intelligent tool automatically identifies bugs in your code.
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <div className="p-[1px] rounded-[58px] bg-gradient-to-b from-[#5B66A0] to-[#10192E]">
            <button className="group flex items-center justify-center gap-2 px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 rounded-[500px] bg-[#151322] shadow-[0px_-10px_14px_0px_#101B36_inset,0_0_0px_0px_rgba(93,104,163,0)] hover:shadow-[0px_-10px_14px_0px_#101B36_inset,0_0_15px_#5D68A3]">
              <span className="bg-gradient-to-r from-[#DDB6ED] to-[#C6CAF8] bg-clip-text text-transparent">Try It Now For Free</span>
            </button>
          </div>
          <button className="group flex items-center justify-center gap-2 rounded-[58px] border-[1px] px-3.5 py-2.5 font-semibold transition-shadow duration-300 ease-in-out md:px-6 md:py-3 border-[#222] bg-[rgba(6,6,6,0.60)] text-[#B1B1B1] shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_0px_0px_rgba(34,34,34,0)] hover:shadow-[0px_0.583px_2.333px_0px_#4E4E59_inset,0px_4.667px_18.667px_0px_rgba(52,52,60,0.40)_inset,0_0_15px_#556]">
            Watch Demo
          </button>
        </div>
      </header>

      <div className="mt-10">
        <img src="/images/download.png" alt="" />
      </div>

      <Section/>
    </div>
  );
}

export default App;