import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import Flex from "../components/Flex";
import ShopCategory from "../components/ShopCategory";
import ShopColour from "../components/ShopColour";
import ShopbyProducts from "../components/ShopbyProducts";
import axios from "axios";
import {useDispatch} from "react-redux"
import { ProductReducer } from "../slices/ProductSlice";
const Shop = () => {
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  async function getAllproducts() {
    let data = await axios.get("https://dummyjson.com/products");
    dispatch(ProductReducer(data.data.products));
    setLoading(false);
  }
  useEffect(() => {
    getAllproducts();
  }, []);
  return (
    <section>
      <Container>
        <div>
          <BreadCrumb />
          <Flex>
            <div className="w-[20%] mt-[50px]">
              <ShopCategory />
              <ShopColour />
            </div>
            <div className="w-[75%] mt-[60px]">
              <ShopbyProducts loading={loading}/>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
