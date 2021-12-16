import styled from "styled-components";

const Container = styled.div`
  color: white;
  ul {
    font-size: 28px;
  }
`;

const FrontendContent = () => {
  return (
    <Container>
      <ul>
        <li>jquery</li>
        <li>vue, vuex</li>
        <li>react, nextjs</li>
        <li>google amp</li>
      </ul>
    </Container>
  );
}

export default FrontendContent;