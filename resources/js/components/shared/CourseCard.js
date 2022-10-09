import styled from "styled-components";

const Container = styled.div`
  width: 280px;

  .header {
    height: 280px;
    background: linear-gradient(45deg, #102436, #5b5b5b);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 16px;
    }
  }
  .footer {
    height: 150px;
    background: #1e1727;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    color: white;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CourseCard = (props) => {
  const { title, img, desc } = props;
  return (
    <Container>
      <div className="header">
        <img src={img} alt="" width="85%" />
      </div>
      <div className="footer">
        <div>{title}</div>
      </div>
    </Container>
  );
}

export default CourseCard;