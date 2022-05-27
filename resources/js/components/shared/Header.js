import styled from "styled-components";

const Container = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    }

    @media screen and (max-width: 800px) {
      .menu {
        display: none;
      }
      .hamburger {
        display: flex;
      }
    }
  }

  .hamburger {
    width: 30px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .line {
      border-radius: 4px;
      width: 100%;
      height: 3px;
      background: #f0f0f0;
    }
  }
`;

const Header = ({ setSideMenu }) => {
  return (
    <Container>
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo"></div>
          <div className="logo-name">Dannyisadog</div>
        </div>
        <div className="menu">
          <ul>
            <li>About Me</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => { setSideMenu(true) }}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </Container>
  );
}

export default Header;