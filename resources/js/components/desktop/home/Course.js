import CourseBlock from "@Components/shared/CourseBlock";
import styled from "styled-components";
import BlockTitle from "../../shared/BlockTitle";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;

  .course-wrapper {
    margin-top: 30px;
    margin-left: 15px;
  }

  .title-wrapper {
    display: flex;
    align-items: center;

    .join-link {
      margin-left: 20px;
      color: white;
      font-size: 18px;
      border: 2px solid #007ced;
      border-radius: 8px;
      padding: 0 12px;
    }
  }
`;

const Course = () => {
  return (
    <Container id="course">
      <div className="title-wrapper">
        <BlockTitle title="Course" />
        <a className="join-link" href="/course">Join us</a>
      </div>
      <div className="course-wrapper">
        <CourseBlock title="web basic" />
        <CourseBlock title="html, css" />
        <CourseBlock title="javascript" />
        <CourseBlock title="bootstrap" />
        <CourseBlock title="git, linux" />
        <CourseBlock title="react.js" />
      </div>
    </Container>
  )
}

export default Course;