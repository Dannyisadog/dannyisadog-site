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
      <div className="blank-space" onClick={close} />
      <div className="menu">
        <div className="item">
          <BlockTitle title="What I do" />
        </div>
        <div className="item">
          <BlockTitle title="Experience" />
        </div>
        <div className="item">
          <BlockTitle title="Side Projects" />
        </div>
        <div className="item">
          <BlockTitle title="Contact" />
        </div>
      </div>
    </Container >
  );
}

export default SideMenu;