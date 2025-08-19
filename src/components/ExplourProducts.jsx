import React from 'react'
import Container from './Container'
import Title from './Title'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ProductCard from './ProductCard';
import ProductImg from "../assets/productimg.png";
import ProductIMG2 from "../assets/productimg2.png";
import ProductIMG3 from "../assets/productimg3.png";
import ProductIMG4 from "../assets/productimg4.png";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const ExplourProducts = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 2,
    slidesPerRows:2,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    }
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
    <section>
        <Container>
           <div className='mt-[70px]'>
            <Title Subtitle="Today's" title="Flash Sales" />
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
           </div>
        </Container>
    </section>
  )
}

export default ExplourProducts