import { courseData } from "@/js/constants/courses";
import styled from "styled-components";
import Background from "../../shared/Background";
import CourseCard from "../../shared/CourseCard";

const Container = styled.div`
  h1 {
    color: white;
  }

  .content {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }

  .course-card {
    align-self: center;
    justify-self: center;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .member-link {
      font-size: 18px;
      color: white;
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 1000px) {
    .content {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      row-gap: 40px;
    }

    .title-wrapper {
      flex-direction: column;
      margin-top: 30px;
    }

    .member-link:first-child {
      margin-left: 0px;
    }
  }
`;

const CoursePage = () => {
  return (
    <Background bgcolor="#222">
      <Container>
        <div className="title-wrapper">
          <h1 className="title">Frontend Course</h1>
          <div className="right">
            <a href="/course/assignment" className="member-link">assignment</a>
            <a href="/course/members" className="member-link">members</a>
            <a href="/user" className="member-link">profile</a>
          </div>
        </div>
        <div className="content">
          {
            courseData.map((course, index) => {
              return (
                <div className="course-card" key={index}>
                  <CourseCard img={course.img} title={course.title} />
                </div>
              )
            })
          }
        </div>
      </Container>
    </Background>
  );
}

export default CoursePage;