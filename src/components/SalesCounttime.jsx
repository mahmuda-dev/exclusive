import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import Semicolon from "../assets/semicolon.png";
import Image from "./Image";
import { countDownDateAndTime } from "countdown-date-time";

const SalesCounttime = () => {
  const conduct_date = "2025-08-25 16:54:00";

  let [count, setCount] = useState({});
  useEffect(() => {
    const countDown = countDownDateAndTime(conduct_date);
    setCount(countDown);
  }, [count]);
  return (
    
    <Flex className="items-center gap-[10px] lg:gap-[17px] mb-4 lg:mb-0  mt-2 lg:mt-9">
      <div>
        <h4 className="font-poppins text-xs font-medium text-black leading-[18px]">
          Days
        </h4>
        <h2 className="font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[2px] mt-1">
          {count.days}
        </h2>
      </div>
      <Image className="mt-5" src={Semicolon} />
      <div>
        <h4 className="font-poppins text-xs font-medium text-black leading-[18px]">
          Hours
        </h4>
        <h2 className="font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[2px] mt-1">
          {count.hours}
        </h2>
      </div>
      <Image className="mt-5" src={Semicolon} />
      <div>
        <h4 className="font-poppins text-xs font-medium text-black leading-[18px]">
          Minutes
        </h4>
        <h2 className="font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[2px] mt-1">
          {count.minutes}
        </h2>
      </div>
      <Image className="mt-5" src={Semicolon} />
      <div>
        <h4 className="font-poppins text-xs font-medium text-black leading-[18px]">
          Seconds
        </h4>
        <h2 className="font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[2px] mt-1">
          {count.seconds}
        </h2>
      </div>
    </Flex>
  );
};

export default SalesCounttime;
