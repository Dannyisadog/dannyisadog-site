import styled from "styled-components";
import BlockTitle from "../../shared/BlockTitle";

const Container = styled.div`
  margin-top: 40px;
  padding: 20px;
`;

const About = () => {
  return (
    <Container id="about">
      <BlockTitle title="What I do" />
    </Container>
  );
}

export default About;