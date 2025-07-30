import React, { useState } from "react";
import Container from "./Container";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Flex from "./Flex";
import { CiMenuFries } from "react-icons/ci";



const Navbar = () => {
  return (
    <nav className="mt-[40px] border-b  pb-4">
      <Container>
        <Flex className="justify-between items-center">
          <Image src="images/logo.png" alt="logo" />
          <div className="hidden w-[72%] lg:flex justify-between items-center">
            <List>
              <ListItem className="font-base font-normal font-poppins text-black  after:content-['] after:w-0 hover:after:w-full after:duration-500 inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                Home
              </ListItem>
              <ListItem className="font-base font-normal font-poppins text-black  after:content-['] after:w-0 hover:after:w-full after:duration-500 inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                Contact
              </ListItem>
              <ListItem className="font-base font-normal font-poppins text-black after:content-['] after:w-0 hover:after:w-full after:duration-500 inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                About
              </ListItem>
              <ListItem className="font-base font-normal font-poppins text-black  after:content-['] after:w-0 hover:after:w-full after:duration-500 inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative transition">
                Sign Up
              </ListItem>
            </List>
            <Flex className="items-center gap-4">
              <div className="relative w-[243px]">
                <input
                  className="bg-secondary w-full py-3 px-5 placeholder:font-poppins text-xs leading-[18px] placeholder:text-black"
                  type="text"
                  placeholder="What are you looking for?"
                />
                <CiSearch className="absolute top-3 right-4  text-xl " />
              </div>
              <Flex className="gap-4">
                <CiHeart className="text-2xl " />
                <IoCartOutline className="text-2xl " />
              </Flex>
            </Flex>
          </div>
          <CiMenuFries className="lg:hidden text-2xl" />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
