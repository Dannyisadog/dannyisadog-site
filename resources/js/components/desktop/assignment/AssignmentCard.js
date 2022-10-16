import styled from "styled-components";

const Container = styled.a`
  width: 300px;
  height: 200px;
  border-radius: 16px;
  align-self: center;
  justify-self: center;
  padding: 20px;
  border: 2px solid #f0f0f0;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: #007ced;
    border: 2px solid #007ced;
    transform: translateY(-10px);
  }

  .title {
    color: white;
    width: 100%;
    padding: 0 10px;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
  }

  .description {
    margin-top: 8px;
      color: white;
    }
`;

const AssignmentCard = ({ id, title, description }) => {
  return (
    <Container href={`/course/assignmentContent?id=${id}`}>
      <div className="title">
        {title}
      </div>
      <div className="description">
        {description}
      </div>
    </Container>
  );
}

export default AssignmentCard;