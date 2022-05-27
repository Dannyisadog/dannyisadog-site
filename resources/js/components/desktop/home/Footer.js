import styled from "styled-components";

const Container = styled.div`
  background-color: #252525;
  border-top: 2px solid #333;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link-container {
    display: flex;
    width: 200px;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #9f9f9f;
      transition: 0.3s;

      :hover {
        color: #ddd;
      }
    }
  }

  @media screen and (max-width: 800px) {
    border-radius: 0;
    padding: 0 20px;
    justify-content: center;
    .copyright {
      display: none;
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <div className="link-container">
        <a target="_blank" href="https://github.com/Dannyisadog/">Github</a>
        <a target="_blank" href="https://www.linkedin.com/in/zhong-yi-chen-78470b145/">LinkedIn</a>
        <a target="_blank" href="https://www.instagram.com/dannyisadog/">Instagram</a>
      </div>
      <div className="copyright">
        © {year} All rights reserved
      </div>
    </Container>
  );
}

export default Footer;