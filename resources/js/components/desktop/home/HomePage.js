import { useState } from "react";

import styled from 'styled-components';

import Header from '../../shared/Header';
import MainBlock from './MainBlock';
import About from "./About";
import SideProject from "../../shared/SideProject";
import SideMenu from '../../shared/SideMenu';
import Footer from './Footer';

const Container = styled.div`
    padding: 40px 40px 100px 40px;
    background-color: #222;
    border-radius: 40px;
    position: relative;
    margin-top: 40px;
    overflow: ${(props) => props.sideMenu ? "hidden" : "auto"};

    @media screen and (max-width: 800px) {
      position: absolute;
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 0;
      border-radius: 0;
      width: 100%;
      left: 0;
      top: 0;
    }
`;

const HomePage = () => {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <Container sideMenu={sideMenu}>
      <Header setSideMenu={setSideMenu} />
      <MainBlock />
      {/* <About /> */}
      <SideProject />
      <Footer />
      <SideMenu show={sideMenu} setShow={setSideMenu} />
    </Container>
  );
}

export default HomePage;