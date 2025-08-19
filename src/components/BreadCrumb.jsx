import React from "react";
import { useLocation } from "react-router";

const BreadCrumb = () => {
  let location = useLocation().pathname
  let locationpathname = location.split("/")[1]
  return (
    <div className="mt-[80px]">
      <ul className="flex gap-3 ">
        <li className="font-poppins text-sm font-normal text-gray-500 ">
          Home
        </li>
        <li className="font-poppins text-sm font-normal text-gray-500 ">/</li>
        <li className="font-poppins text-sm font-normal text-gray-500 ">
          {locationpathname}
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
