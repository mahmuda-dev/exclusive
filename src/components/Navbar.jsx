import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Flex from "./Flex";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  let navAccountRef = useRef();
  let [menuShow, setMenuShow] = useState(false);
  let handleMenu = () => {
    setMenuShow(!menuShow);
  };
  useEffect(() => {
    console.log(navAccountRef);
  }, []);
  return (
    <nav className="z-50 relative mt-[40px] border-b  pb-4">
      <Container>
        <Flex className="justify-between items-center">
          <Link to="/">
            <Image src="images/logo.png" alt="logo" />
          </Link>
          <div
            className={`${
              menuShow ? "block" : "hidden"
            } w-full lg:w-[72%] lg:flex justify-between items-center absolute left-0 top-9 lg:static lg:bg-transparent bg-black p-5 lg:p-0`}
          >
            <List>
              <ListItem className="font-base font-normal font-poppins text-white lg:text-black   after:content-['] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full after:duration-500 block lg:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                Home
              </ListItem>
              <ListItem className="font-base font-normal font-poppins text-white lg:text-black   after:content-['] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full after:duration-500 block lg:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                Contact
              </ListItem>
              <ListItem className="font-base font-normal font-poppins text-white lg:text-black  after:content-['] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full after:duration-500 block lg:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                About
              </ListItem>
              <ListItem className="font-base font-normal font-poppins text-white lg:text-black   after:content-['] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full after:duration-500 block lg:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                Sign Up
              </ListItem>
            </List>
            <Flex className="items-center gap-4">
              <div className="relative w-[243px] mt-5 lg:mt-0">
                <input
                  className="bg-secondary w-full py-3 px-5 placeholder:font-poppins text-xs leading-[18px] placeholder:text-black"
                  type="text"
                  placeholder="What are you looking for?"
                />
                <CiSearch className="absolute top-3 right-4  text-xl " />
              </div>
              <Flex className="gap-4 items-center">
                <CiHeart className="text-white lg:text-black text-2xl " />
                <div ref={navAccountRef} className="relative">
                  <IoCartOutline className="text-white lg:text-black text-2xl " />
                  <List className=" w-[235px] h-auto absolute right-0 top-8  z-50 bg-red-700  text-white rounded-[4px]">
                    <ListItem className=" mt-4 ml-4 flex justify-between items-center font-poppins text-base font-normal leading-6 text-white">
                      Manage My Accounts
                    </ListItem>
                    <ListItem className=" mt-4 ml-4 flex justify-between items-center font-poppins text-base font-normal leading-6 text-white">
                      Owner
                    </ListItem>
                    <ListItem className=" mt-4 ml-4 flex justify-between items-center font-poppins text-base font-normal leading-6 text-white">
                      My Reviewer
                    </ListItem>
                    <ListItem className=" mt-4 ml-4 flex justify-between items-center font-poppins text-base font-normal leading-6 text-white">
                      My Category
                    </ListItem>
                    <ListItem className=" mt-4 ml-4 flex justify-between items-center font-poppins text-base font-normal leading-6 lg:text-white">
                      LogOut
                    </ListItem>
                  </List>
                </div>
              </Flex>
            </Flex>
          </div>
          <CiMenuFries
            onClick={handleMenu}
            className="lg:hidden text-2xl absolute top-0 right-3"
          />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
