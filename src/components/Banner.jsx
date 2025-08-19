import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Category from "./Category";
import BannerImage from "../assets/bannerimg.jpg";
import Image from "./Image";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            gap: "12px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: "#808080",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };
  return (
    <section>
      <Container>
        <Flex className="lg:gap-[45px] flex-col lg:flex-row">
          <div className="lg:w-[20%] w-full lg:border-r ">
            <Category />
          </div>
          <div className=" mt-1 lg:mt-10 lg:w-[80%] w-full ">
            <Slider {...settings}>
              <div>
                <Image src={BannerImage} alt="bannerimage" />
              </div>
              <div>
                <Image src={BannerImage} alt="bannerimage" />
              </div>
              <div>
                <Image src={BannerImage} alt="bannerimage" />
              </div>
              <div>
                <Image src={BannerImage} alt="bannerimage" />
              </div>
              <div>
                <Image src={BannerImage} alt="bannerimage" />
              </div>
            </Slider>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
