import styled from "styled-components";

const Container = styled.a`
  color: #d5d5d5;
  width: 250px;
  height: 200px;
  border: 2px solid #444;
  background-color: #333;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  margin-right: 20px;
  z-index: 9999;
  cursor: pointer;
  transition: 0.3s;
  :last-child {
    margin-right: 0;
  }
  :hover {
    transform: translateY(-10px);
    background-color: #007ced;
    border: 2px solid #007ced;
    color: #d5d5d5;
    text-decoration: none;
  }
  
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
    margin-right: 0;
    :last-child {
      margin-bottom: 0;
      margin-right: 0;
    }
    :hover {
      transform: translateY(0);
      border: 2px solid #444;
      background-color: #333;
    }
  }
`;

const ProjectItem = ({ title, link }) => {
  return (
    <Container target="_blank" href={link}>
      {title}
    </Container>
  );
}

export default ProjectItem;