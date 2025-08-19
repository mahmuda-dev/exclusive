import React from "react";
import Container from "./Container";
import CustomerItem from "./CustomerItem";
import IconOne from "../assets/iconone.png";
import Flex from "./Flex";
const CustomerService = () => {
  return (
    <section>
      <Container>
        <Flex className="justify-around">
          <CustomerItem
            imgsrc={IconOne}
            title="FREE AND FAST DELIVERY"
            subtitle="Free delivery for all orders over $140"
          />
          <CustomerItem
            imgsrc={IconOne}
            title="24/7 CUSTOMER SERVICE"
            subtitle="Friendly 24/7 customer support"
          />
          <CustomerItem
            imgsrc={IconOne}
            title="MONEY BACK GUARANTEE"
            subtitle="We reurn money within 30 days"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default CustomerService;
