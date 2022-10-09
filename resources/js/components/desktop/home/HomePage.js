import { useEffect, useState } from "react";


import Background from "../../shared/Background";
import Header from '../../shared/Header';
import SideMenu from '../../shared/SideMenu';
import SideProject from "../../shared/SideProject";
import Course from "./Course";
import Experience from "./Experience";
import Footer from './Footer';
import MainBlock from './MainBlock';

import { lockScrollBody } from "../../../utility/helper";


const HomePage = () => {
  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    lockScrollBody(sideMenu);
  }, [sideMenu]);

  return (
    <Background sideMenu={sideMenu}>
      <Header sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <MainBlock />
      {/* <About /> */}
      <Experience />
      <Course />
      <SideProject />
      <Footer />
      <SideMenu show={sideMenu} setShow={setSideMenu} />
    </Background>
  );
}

export default HomePage;