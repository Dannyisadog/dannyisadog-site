import styled from 'styled-components';

import Header from '../../shared/Header';
import MainBlock from './MainBlock';
import Footer from './Footer';

const Container = styled.div`
    padding: 40px 40px 100px 40px;
    background-color: #222;
    border-radius: 40px;
    position: relative;
    margin-top: 40px;

    @media screen and (max-width: 800px) {
      position: absolute;
      margin-top: 0;
      border-radius: 0;
      width: 100%;
      left: 0;
      top: 0;
    }

    .main-block-wrapper {
      margin-top: 60px;
    }
`;

const HomePage = () => {
  return (
    <Container>
      <Header />
      <div className="main-block-wrapper">
        <MainBlock />
      </div>
      <Footer />
    </Container>
  );
}

export default HomePage;