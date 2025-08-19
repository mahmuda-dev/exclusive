import React from "react";
import Container from "./Container";
import Title from "./Title";
import SalesCounttime from "./SalesCounttime";
import Flex from "./Flex";
import ProductCard from "./ProductCard";
import ProductImg from "../assets/productimg.png";
import ProductIMG2 from "../assets/productimg2.png";
import ProductIMG3 from "../assets/productimg3.png";
import ProductIMG4 from "../assets/productimg4.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FlashSales = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F5F5F5",
          width: "50px",
          height: "50px",
          position: "absolute",
          top: "-90px",
          right: "60px",
          borderRadius: "50%"
        }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F5F5F5",
          width: "50px",
          height: "50px",
          position: "absolute",
          top: "-90px",
          right: "0px",
          borderRadius: "50%"
        }}
        onClick={onClick}
      >
        <FaAngleRight />
      </div>
    );
  }

  return (
    <section className="mt-[20px] lg:mt-[100px]">
      <Container>
        <div className="border-b pb-5 lg:pb-[60px]">
          <Flex className="lg:gap-[87px] lg:mb-10 flex-col lg:flex-row">
            <Title Subtitle="Today's" title="Flash Sales" />
            <SalesCounttime />
          </Flex>

          <Slider {...settings}>
            {/* <div className="gap-6 w-full flex justify-center items-center"> */}
            <ProductCard
              imageurl={ProductImg}
              price="$120"
              cross="$160"
              name="HAVIT HV-G92 Gamepad"
              offer="-40%"
              rating="(88)"
            />
            <ProductCard
              imageurl={ProductIMG2}
              price="$960"
              cross="$1160"
              name="AK-900 Wired Keyboard"
              offer="-35%"
              rating="(75)"
            />
            <ProductCard
              imageurl={ProductIMG3}
              price="$370"
              cross="$400"
              name="IPS LCD Gaming Monitor"
              offer="-30%"
              rating="(99)"
            />
            <ProductCard
              imageurl={ProductIMG4}
              price="$375"
              cross="$400"
              name="S-Series Comfort Chair "
              offer="-25%"
              rating="(99)"
            />
            {/* </div> */}
          </Slider>
          <div className="text-center mt-[20px] lg:mt-[60px]">
            <Link className="font-poppins font-medium text-base text-white bg-third py-4 px-12 inline-block rounded-[4px] ">
              View All Products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FlashSales;
