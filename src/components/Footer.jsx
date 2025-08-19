import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { VscSend } from "react-icons/vsc";
import QRCODE from "../assets/Qr.png"
import GoogleDownload from "../assets/googledownload.png"
import GooglePlay from "../assets/googleplay.png"
import Image from "./Image";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black pt-[40px] pb-6 mt-[70px]">
      <Container>
        <Flex className="justify-between">
            <div>
                <h2 className="mt-2 font-inter font-bold text-[24px] leading-6 text-[#ffffff]">Exclusive</h2>
                <h3 className="mt-2 font-poppins font-medium text-[20px] leading-7 text-[#ffffff]">Subscribe</h3>
                <h4 className="mt-2 font-poppins font-normal text-[16px] leading-6 text-[#ffffff]">Get 10% off your first order</h4>
                <div className="relative mt-2 w-[217px]">
                    <input className="px-4 py-3 w-full bg-transparent border placeholder-[#F5F5F5] placeholder:leading-6 placeholder:font-normal placeholder:text-[16px] placeholder:font-poppins" type="text" placeholder="Enter your email"/>
                    <VscSend className="text-[#FAFAFA] absolute top-4 right-4 text-xl" />
                </div>

            </div>
            <div>
                <h2 className="mt-2 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]">Support</h2>
                <h4 className="mt-2 w-[175px] font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h4>
                <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">exclusive@gmail.com</h4>
                <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">+88015-88888-9999</h4>
            </div>
            <div>
                <h2 className="mt-2 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]">Account</h2>
                 <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">My Account</h4>
                <h4 className="mt-2 w-[123px] font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">Login / Register</h4>
                <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">Cart</h4>
                <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">Wishlist</h4>
                <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">Shop</h4>
            </div>
            <div>
                <h2 className="mt-2 w-[101px] font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]">Quick Link</h2>
                 <h4 className="mt-2 w-[109px]  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">Privacy Policy</h4>
                <h4 className="mt-2 w-[109px] font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">Terms Of Use</h4>
                <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">FAQ</h4>
                <h4 className="mt-2  font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]">Contact</h4>
            </div>
            <div>
                <h2 className="mt-2 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]">Download App</h2>
                <h4 className="mt-2 w-[194px] font-poppins font-normal text-[12px] leading-6 text-[#FAFAFA]">Save $3 with App New User Only</h4>
                <div className="flex justify-between mt-3">
                    <Image src={QRCODE}/>
                    <div className="flex flex-col justify-between">
                        <Image src={GooglePlay}/>
                        <Image src={GoogleDownload}/>
                    </div>
                </div>
                <Flex className="mt-4 justify-around text-white">
                 <FaFacebookF />
                 <FiTwitter />
                 <FaInstagram />
                 <FaLinkedinIn />
                </Flex>
            </div>
        </Flex>
        
        <div className="text-center mt-[80px]">

        <h3 className="font-poppins font-normal text-[16px] leading-6 text-gray-500">Copyright Rimel 2022. All right reserved</h3>
        </div>
        </Container>
        <hr className="w-full absolute bottom-14 left-0 !border border-gray-500"/>
    </footer>
  );
};

export default Footer;
