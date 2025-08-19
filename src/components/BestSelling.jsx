import React from "react";
import Container from "./Container";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Flex from "./Flex";
import ProductImg from "../assets/productimg.png";
import ProductIMG2 from "../assets/productimg2.png";
import ProductIMG3 from "../assets/productimg3.png";
import ProductIMG4 from "../assets/productimg4.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
const BestSelling = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          top: "-60px",
          right: "260px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <FaAngleRight />
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
          top: "-60px",
          right: "200px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  }
  return (
    <section>
      <Container>
        <section className="mt-[80px]">
          <Flex className="justify-between items-center">
            <Title Subtitle="This Month" title="Best Selling Products" />
            <div className="text-center mt-[20px] lg:mt-[60px]">
              <Link className="mb-3 font-poppins font-medium text-base text-white bg-third py-4 px-12 inline-block rounded-[4px] ">
                View All
              </Link>
            </div>
          </Flex>
          <Slider {...settings}>
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
          </Slider>
        </section>
      </Container>
    </section>
  );
};

export default BestSelling;
