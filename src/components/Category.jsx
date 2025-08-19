import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { TfiAngleRight } from "react-icons/tfi";
import { BiSolidCategory } from "react-icons/bi";
const Category = () => {
  let [categoryShow, setCategoryShow] = useState(false);

  return (
    <div className="mr-2 relative">
      <div
        onClick={() => setCategoryShow(!categoryShow)}
        className="flex lg:hidden  items-center gap-2 mt-2 "
      >
        <BiSolidCategory />
        <h2 className="select-none font-poppins text-lg text-black">
          Category
        </h2>
      </div>
      <List
        className={`mt-1 ${
          categoryShow ? "block" : "hidden"
        }   lg:block lg:p-0 p-4 lg:relative absolute left-0 top-0  z-50 bg-black lg:bg-transparent w-full`}
      >
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Women's Fashion{true ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Men's Fashion{true ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Electronics{false ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Home & Lifestyle{false ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Medicine{false ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Sport's Outdoor{false ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Baby's & toy's{false ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Groceries & Pets{false ? <TfiAngleRight /> : ""}
        </ListItem>
        <ListItem className="text-white mt-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-black">
          Health & Beauty{false ? <TfiAngleRight /> : ""}
        </ListItem>
      </List>
    </div>
  );
};

export default Category;
