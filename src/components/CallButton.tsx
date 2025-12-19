import React from 'react';

const CallButton = () => {
    return (
        <button className="
      glass-call-btn 
      w-[192px] h-[65px] 
      md:w-[192px] md:h-[65px] 
      sm:w-[160px] sm:h-[55px] 
      transition-all duration-300 hover:brightness-110 active:scale-95
      shadow-[0px_16px_64px_0px_#6801FF1F]
      cursor-pointer
    ">
            <span className="
        text-white font-bold text-[30px] sm:text-[24px] 
        drop-shadow-[0_11px_23px_rgba(255,255,255,0.13)]
        leading-none
      "
                style={{ fontFamily: 'Aileron, sans-serif' }}>
                Call us
            </span>
        </button>
    );
};

export default CallButton;
