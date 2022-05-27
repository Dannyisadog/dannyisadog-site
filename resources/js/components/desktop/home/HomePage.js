import { useState } from "react";

import styled from 'styled-components';

import Header from '../../shared/Header';
import MainBlock from './MainBlock';
import SideMenu from '../../shared/SideMenu';
import Footer from './Footer';

const Container = styled.div`
    padding: 40px 40px 100px 40px;
    background-color: #222;
    border-radius: 40px;
    position: relative;
    margin-top: 40px;

    @media screen and (max-width: 800px) {
      position: absolute;
      padding-left: 0;
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
    <Container>
      <Header setSideMenu={setSideMenu} />
      <div className="main-block-wrapper">
        <MainBlock />
      </div>
      <Footer />
      <SideMenu show={sideMenu} setShow={setSideMenu} />
    </Container>
  );
}

export default HomePage;