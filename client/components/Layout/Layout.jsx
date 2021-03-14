import React from "react";
import Navbar from "../Header/Navbar";
import Meta from "../Meta/Meta";
import { MainWrapper } from "./styledLayout";


const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default Layout;
