import styled from "styled-components";

import BlockTitle from "./BlockTitle";

const Container = styled.div`
  position: fixed;
  display: none;
  color: white;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 1;
  transition: 0.5s;
  transform: ${(props) => props.show ? "translateX(0)" : "translateX(100%)"};
  .close-icon {
    position: absolute;
    right: 20px;
    top: 30px;
    width: 1.5rem;
    height: 1.5rem;
  }

  .item {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;

    .blank-space {

    }

    .menu {
      padding: 5rem 1rem 2rem 1.5rem;
      background: #222;
      width: 20rem;
    }

    .blank-space {
      visibility: ${(props) => props.show ? "visible" : "hidden"};
      width: 100%;
      background-color: #3333335e;
    }
  }
`;

const SideMenu = ({ show, setShow }) => {
  const close = () => {
    setShow(false);
  }
  return (
    <Container show={show}>
      <div className="close-icon" onClick={close}></div>
      <div className="blank-space" onClick={close} />
      <div className="menu">
        <div className="item">
          <BlockTitle title="About Me" />
        </div>
        <div className="item">
          <BlockTitle title="Resume" />
        </div>
        <div className="item">
          <BlockTitle title="Portfolio" />
        </div>
        <div className="item">
          <BlockTitle title="Contact" />
        </div>
      </div>
    </Container >
  );
}

export default SideMenu;