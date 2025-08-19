import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Vertical from "../assets/vertical.png";
import sideimage from "../assets/SideImage.png";
import doubleimage from "../assets/double.png";
import Image from "./Image";
const NewArrival = () => {
  return (
    <section className="mt-[50px]">
      <Container>
        <div>
          <Title Subtitle="Feature's" title="New Arrival" />
          <Flex className="justify-between">
            <div>
              <Image className="w-[550px] h-[450px]" src={sideimage} />
            </div>
            <div className="flex flex-col justify-between ">
              <Image className="w-[550px] h-[230px]" src={Vertical} />
              <Flex className="justify-between">
                <Image className="w-[250px] h-[200px]" src={doubleimage} />
                <Image className="w-[250px] h-[200px]" src={doubleimage} />
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
