import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
const Pagination = ({ itemsPerPage}) => {
  let productData = useSelector((state) => state.allproduct.product);
  console.log(productData);
  
  const items = productData;
  function Items({ currentItems }) {
    return (
      <div className="flex justify-between flex-wrap">
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <ProductCard
                reviews={item.reviews}
                rating={item.rating}
                imageurl={item.thumbnail}
                price={`$ ${Math.floor(
                  item.price - (item.discountPercentage / 100) * item.price
                )}`}
                cross={item.price}
                name={item.title}
                offer={`${Math.floor(item.discountPercentage)}%`}
              />
            </div>
          ))}
      </div>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex mt-[20px] mx-auto"
        pageClassName="bg-black text-white px-6 py-2 ml-2 "
      />
    </>
  );
};

export default Pagination;
