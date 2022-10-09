import styled from "styled-components";

const Container = styled.div`
  padding: 40px 40px 100px 40px;
  background-color: ${(props) => props.bgcolor ?? '#222'};
  border-radius: 40px;
  position: relative;
  margin-top: 40px;
  overflow: ${(props) => props.sideMenu ? "hidden" : "auto"};
  margin-bottom: 50px;

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
      min-height: 100vh;
    }
`;

const Background = ({ children, bgcolor }) => {
  return (
    <Container bgcolor={bgcolor}>
      {children}
    </Container>
  );
}

export default Background;