import React from "react";

const Title = ({ Subtitle, title }) => {
  return (
    <div className="relative">
      <h4 className='font-poppins text-third text-base font-semibold lg:after:w-[20px] after:w-[10px] lg:after:h-[40px] after:h-[20px] after:content-[""] after:absolute after:top-3 after:translate-y-[-50%] pl-[20px] lg:pl-[36px] after:left-0 after:bg-third  after:rounded-[4px]'>
        {Subtitle}
      </h4>
      <h2 className="font-inter font-semibold text-[20px] lg:text-[36px] text-black leading-12 mt-[10px] lg:mt-[26px]">
        {title}
      </h2>
    </div>
  );
};

export default Title;
