import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
  return (
    <header className=" bg-black py-3">
      <Container>
        <div className="flex justify-between">
        <div className=" lg:w-full  w-full">
            <h3 className="lg:w-[110%] w-[95%] text-center font-poppins text-white text-sm font-normal leading-5">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link className="ml-2 underline font-semibold leading-6">
              ShopNow
            </Link>
          </h3>
        </div>
         <div className="relative inline-block  top-2 lg:top-1/2 lg:w-[78px] ">
           <select id="countries" class=" w-[70px] lg:w-[78px] focus:outline-none  appearance-none text-white bg-black">
            <option selected Value="Eng">English</option>
            <option value="BN">BN</option>
          </select>
          <FaAngleDown className=" absolute right-0 lg:right-0  top-5 lg:top-1/2 -translate-y-4 lg:-translate-y-1/2  pointer-events-none text-white"/>
         </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
