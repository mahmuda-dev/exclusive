import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";



const router =   createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
  </Route>)
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
