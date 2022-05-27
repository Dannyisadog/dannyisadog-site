import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  /* width: ${(props) => props.show ? "50%" : "0"}; */
  width: 50%;
  color: white;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 1;
  background: #222;
  padding: 6rem 2rem 2rem 2rem;
  transition: 0.5s;
  transform: ${(props) => props.show ? "translateX(0px)" : "translateX(200px)"};
  .close-icon {
    position: absolute;
    right: 20px;
    top: 40px;
    width: 2rem;
    height: 2rem;
  }

  .item {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const SideMenu = ({ show, setShow }) => {
  const close = () => {
    setShow(false);
  }
  return (
    <Container show={show}>
      <div className="close-icon" onClick={close}></div>
      <div className="item">About Me</div>
      <div className="item">Resume</div>
      <div className="item">Portfolio</div>
      <div className="item">Contact</div>
    </Container >
  );
}

export default SideMenu;