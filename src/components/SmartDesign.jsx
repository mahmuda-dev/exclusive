import React from "react";
const SmartDesign = ({ icon, title }) => {
  return (
     <div className="relative w-[184px] h-[145px] bg-transparent border border-gray rounded-[4px] py-[40px] group text-center lg:hover:bg-third transition duration-500 ">
    <div className="flex justify-center items-center text-[56px] mx-auto text-black lg:group-hover:text-white transition duration-500">
        {icon}
      </div>
    <h3 className="font-poppins font-normal text-base text-black mt-3 lg:group-hover:text-white transition duration-500">{title}</h3>
    </div>
  );
};

export default SmartDesign;
