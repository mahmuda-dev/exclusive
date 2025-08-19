import React from "react";
import Banner from "../components/Banner";

import BrowseCategory from "../components/BrowseCategory";
import BestSelling from "../components/BestSelling";
import Offer from "../components/Offer";
import NewArrival from "../components/NewArrival";
import CustomerService from "../components/CustomerService";
import ExplourProducts from "../components/ExplourProducts";
import FlashSales from "../components/FlashSales";



const Home = () => {
  return (
    <>
      <Banner />
      <FlashSales />
      <BrowseCategory/>
      <BestSelling/>
      <Offer/>
      <NewArrival/>
      <ExplourProducts/>
      <CustomerService/>
    </>
  );
};

export default Home;
