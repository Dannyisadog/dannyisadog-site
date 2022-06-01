import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }

  .course-content {
    color: #d5d5d5;
    border: 1px solid #333;
    position: relative;
    .header {
      position: absolute;
      left: 10px;
      top: -15px;
      font-size: 1.2rem;
      background: #222;
      padding: 0 10px;
    }
    .content {
      padding: 30px 20px;
    }
  }
`;

const CourseBlock = ({ title }) => {
  return (
    <Container>
      <div className="course-content">
        <div className="header">
          <div className="title">{title}</div>
        </div>
        <div className="content">

        </div>
      </div>
    </Container>
  );
}

export default CourseBlock;