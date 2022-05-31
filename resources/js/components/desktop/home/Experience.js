import styled from "styled-components";
import BlockTitle from "../../shared/BlockTitle";

import ExperienceBlock from "../../shared/ExperienceBlock";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <BlockTitle title="Experience" />
      <ExperienceBlock />
    </Container>
  )
}

export default Experience;