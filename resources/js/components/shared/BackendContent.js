import styled from "styled-components";

const Container = styled.div`
  color: white;
  font-size: 28px;
`;

const BackendContent = () => {
  return (
    <Container>
      <ul>
        <li>php</li>
        <li>codeigniter</li>
        <li>laravel</li>
        <li>mysql</li>
      </ul>
    </Container>
  );
}

export default BackendContent;