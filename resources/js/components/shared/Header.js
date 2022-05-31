import styled from "styled-components";
import { scrollTo } from "../../utility/helper";

const Container = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 0;

    a {
      text-decoration: none;
    }

    .logo-wrapper {
      display: flex;
      align-items: center;

      .logo {
        width: 57.6px;
        height: 60px;
      }

      .logo-name {
        font-size: 28px;
        font-weight: bold;
        margin-left: 5px;
        color: white;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      ul {
        width: 400px;
        font-size: 16px;
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
      }
      li {
        cursor: pointer;
        color: #9f9f9f;
        transition: 0.3s;
      }

      li:hover {
        color: white;
      }
    }

    .hamburger {
      display: none;
      position: fixed;
      right: 20px;
    }

    @media screen and (max-width: 800px) {
      .menu {
        display: none;
      }
      .hamburger {
        display: flex;
        z-index: 2;
      }
      .logo-name {
        display: none;
      }
    }
  }

  .hamburger {
    width: 30px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .line {
      position: absolute;
      border-radius: 4px;
      width: 100%;
      height: 3px;
      background: #f0f0f0;
      transition: 0.3s;
    }

    .line:nth-child(1) {
      top: ${(props) => props.sideMenu ? "10px" : "0"};
      transform: ${(props) => props.sideMenu ? "rotate(45deg)" : "0"};
    }
    .line:nth-child(2) {
      top: ${(props) => props.sideMenu ? "10px" : "10px"};
      transform: ${(props) => props.sideMenu ? "rotate(-45deg)" : "0"};
    }
    .line:nth-child(3) {
      top: ${(props) => props.sideMenu ? "50px" : "20px"};
      opacity: ${(props) => props.sideMenu ? "0" : "1"};
    }
  }
`;

const Header = ({ sideMenu, setSideMenu }) => {

  const toggle = () => {
    setSideMenu(!sideMenu);
  }

  return (
    <Container sideMenu={sideMenu}>
      <div className="container">
        <a href="./">
          <div className="logo-wrapper">
            <div className="logo"></div>
            <div className="logo-name">Dannyisadog</div>
          </div>
        </a>
        <div className="menu">
          <ul>
            <li onClick={() => scrollTo("about")}>What I do</li>
            <li onClick={() => scrollTo("experience")}>Experience</li>
            <li onClick={() => scrollTo("side-project")}>Side Projects</li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </Container>
  );
}

export default Header;