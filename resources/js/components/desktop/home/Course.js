import styled from "styled-components";
import BlockTitle from "../../shared/BlockTitle";
import CourseBlock from "@Components/shared/CourseBlock";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;

  .course-wrapper {
    margin-top: 30px;
    margin-left: 15px;
  }
`;

const Course = () => {
  return (
    <Container id="course">
      <BlockTitle title="Course" />
      <div className="course-wrapper">
        <CourseBlock title="Web Basic" />
        <CourseBlock title="Html, Css" />
        <CourseBlock title="Javascript" />
        <CourseBlock title="Bootstrap" />
        <CourseBlock title="Git, Linux" />
        <CourseBlock title="React, Vue" />
      </div>
    </Container>
  )
}

export default Course;