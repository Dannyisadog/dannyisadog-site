import styled from "styled-components";

const Container = styled.div`
  .container {
    display: flex;
    justify-content: space-between;

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

    @media screen and (max-width: 800px) {
      .menu {
        display: none;
      }
    }
  }
`;

const Header = () => {
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
      </div>
    </Container>
  );
}

export default Header;