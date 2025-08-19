import React from "react";
import Container from "./Container";
import Title from "./Title";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineTabletAndroid } from "react-icons/md";
import { MdOutlineLaptopMac } from "react-icons/md";
import { MdOutlineWatch } from "react-icons/md";
import { MdOutlineHeadphones } from "react-icons/md";
import { MdOutlineSpeaker } from "react-icons/md";
import SmartDesign from "./SmartDesign";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const BrowseCategory = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: false,
          nextArrow: "",
          prevArrow: "",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          nextArrow: "",
          prevArrow: "",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          nextArrow: "",
          prevArrow: "",
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
          borderRadius: "50%",
          position: "absolute",
          top: "-90px",
          right: "60px",
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
          borderRadius: "50%",
          position: "absolute",
          top: "-90px",
          right: "0px",
        }}
        onClick={onClick}
      >
        <div >
          <FaAngleRight />
        </div>
      </div>
    );
  }
  return (
    <section>
      <Container>
        <div className="mt-[80px] mb-[50px]">
          <Title Subtitle="Category" title="Browse By Category" />
        </div>
        <div>
           <Slider {...settings}>
          {/* <SmartDesign />
          <SmartDesign />
          <SmartDesign />
          <SmartDesign />
          <SmartDesign />
          <SmartDesign /> */}
          <SmartDesign icon={<MdOutlinePhoneIphone />} title="Phones" />
          <SmartDesign icon={<MdOutlineTabletAndroid />} title="Tablets" />
          <SmartDesign icon={<MdOutlineLaptopMac />} title="Laptops" />
          <SmartDesign icon={<MdOutlineWatch />} title="Watches" />
          <SmartDesign icon={<MdOutlineHeadphones />} title="Headphones" />
          <SmartDesign icon={<MdOutlineSpeaker />} title="Speakers" />
        </Slider>
         
        </div>
      </Container>
    </section>
  );
};

export default BrowseCategory;
