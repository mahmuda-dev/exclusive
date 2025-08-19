import React from "react";

const ProductColour = ({ title, colour }) => {
  return (
    <li className="mb-[18px] font-poppins text-sm font-normal text-gray-600">
      <span
        style={{ background: `${colour}` }}
        className={`w-[11px] h-[11px] inline-block rounded-full mr-[6px]`}
      ></span>
      {title}
    </li>
  );
};

export default ProductColour;
