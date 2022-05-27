import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  .portfolio-container {
    .img-container {
        img {
          width: 350px;
          height: 350px;
          border: 12px solid #444;
          border-radius: 100%;
      }
    }
  }
  .description-container {
    margin-left: 60px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .job-title {
      color: #aaa;
      font-size: 18px;
    }
    .author-name {
      font-size: 48px;
      font-weight: bold;
      color: #f5f5f5;
    }

    .description {
      color: #f5f5f5;
    }

    .action-buttons-container {
      display: flex;
      margin-top: 20px;
      .action-button {
        border-radius: 24px;
        padding: 8px 20px;
        border: 2px solid #d5d5d5;
        color: white;
        background: #333;
        cursor: pointer;
        transition: 0.5s;
      }
      .cv-download-button {
        border: 2px solid #007ced;
        :hover {
          background: #007ced;
        }
      }
      .contact-button {
        margin-left: 10px;
        :hover {
          background: #d5d5d5;
          color: #333;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .img-container {
        img {
          width: 50% !important;
          height: 50% !important;
        }
      }

      .description-container {
        margin-top: 20px;
        margin-left: 0;
        width: 300px;
      }
      .action-buttons-container {
        justify-content: center;
      }
    }
`;

const MainBlock = () => {
  return (
    <Container>
      <div className="portfolio-container">
        <div className="img-container">
          <img src="/images/danny-image.jpg" width="100%" />
        </div>
      </div>
      <div className="description-container">
        <div className="job-title">
          Full Stack Python Developer
        </div>
        <div className="author-name">
          Danny Chen
        </div>
        <div className="description">
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
        </div>
        <div className="action-buttons-container">
          <div className="cv-download-button action-button">Download CV</div>
          <div className="contact-button action-button">Contact</div>
        </div>
      </div>
    </Container>
  );
}

export default MainBlock;