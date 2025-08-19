import React from "react";
import Image from "./Image";
import ProductImage from "../assets/productimg.png";
import Flex from "./Flex";
import List from "./List";
// import ProductCard from "./ProductCard";
import ListItem from "./ListItem";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosEye } from "react-icons/io";
import { Rate } from "antd";

const ProductCard = ({
  imageurl,
  price,
  cross,
  name,
  offer,
  rating,
  reviews,
}) => {
  return (
    <div className="w-full lg:w-[270px] md:px-2 sm:px-3 lg:px-0 relative">
      <div className="overflow-hidden group relative w-full h-[250px] bg-secondary rounded-[4px] flex justify-center items-center">
        <h5 className="text-sm font-poppins font-normal text-white bg-third py-1 px-3 rounded-[4px] absolute top-3 left-3 ">
          {offer}
        </h5>
        <div className="absolute top-3 right-3">
          <div className="bg-white p-[5px] rounded-full">
            <CiHeart className="text-2xl" />
          </div>
          <div className="bg-white p-[5px] rounded-full mt-[8px]">
            <IoIosEye className="text-2xl" />
          </div>
        </div>
        <Image src={imageurl} />

        <button className="w-full group-hover:bottom-0 duration-500  font-poppins font-medium text-base text-white bg-black absolute bottom-[-100%] left-0 py-2 rounded-b-[4px]">
          Add To Cart
        </button>
      </div>
      <h2 className="font-poppins font-medium text-black text-base leading-[24px] mt-4">
        {name}
      </h2>
      <Flex className="gap-4">
        <h3 className="font-poppins font-medium text-third text-base leading-[24px] mt-1">
          {price}
        </h3>
        <del className="font-poppins font-medium text-[#808080] text-base leading-[24px] mt-1">
          {cross}
        </del>
      </Flex>
      <List className="flex my-2 gap-1">
        <Rate value={rating} disabled />
        {/* <ListItem>
          <FaStar className="text-[#FFAD33]" />
        </ListItem>
        <ListItem>
          <FaStar className="text-[#FFAD33]" />
        </ListItem>
        <ListItem>
          <FaStar className="text-[#FFAD33]" />
        </ListItem>
        <ListItem>
          <FaStar className="text-[#FFAD33]" />
        </ListItem>
        <ListItem>
          <FaStar className="text-[#FFAD33]" />
        </ListItem> */}
        <h3 className="font-poppins text-sm text-[#808080] font-semibold ml-2">
          ({reviews ? reviews.length : "0"})
        </h3>
      </List>
    </div>
  );
};

export default ProductCard;
