import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const ShopCategory = () => {
  return <div>
    <h2 className="font-poppins font-bold text-xl text-[#262626]">Shop by Category</h2>
    <List className="mt-[15px]">
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Women's Fashion
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Men's Fashion
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Electronics
        </ListItem>
        <ListItem className=" text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Home & Lifestyle
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Medicine
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Sport's Outdoor
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Baby's & toy's
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Groceries & Pets
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Health & Beauty
        </ListItem>
    </List>
  </div>;
};

export default ShopCategory;
