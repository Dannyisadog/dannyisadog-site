import styled from "styled-components";
import BlockTitle from "../../shared/BlockTitle";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const Course = () => {
  return (
    <Container id="course">
      <BlockTitle title="Course" />
    </Container>
  )
}

export default Course;