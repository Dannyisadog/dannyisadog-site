import styled from "styled-components";

const Container = styled.div`
  .title {
    color: white;
    font-size: 1.4rem;
    width: fit-content;
    position: relative;
    font-weight: bold;
  }
  .title:before {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    background-color: #666;
    height: 2px;
    bottom: 0;
  }
  .title:after {
    display: block;
    position: absolute;
    content: '';
    width: 30px;
    background-color: #007ced;
    height: 2px;
    bottom: 0;
  }

`;

const BlockTitle = ({ title }) => {
  return (
    <Container>
      <div className="title">
        {title}
      </div>
    </Container>
  );
}

export default BlockTitle;