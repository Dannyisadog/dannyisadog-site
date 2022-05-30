import styled from "styled-components";
import BlockTitle from "./BlockTitle";

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

const SideProject = () => {
  return (
    <Container>
      <BlockTitle title="Side Projects" />
    </Container>
  );
}

export default SideProject;
