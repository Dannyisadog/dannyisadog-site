import { useState, useEffect } from "react";
import styled from "styled-components";
import { downloadCV } from "../../../api/home";
import FullPageLoader from "../../shared/FullPageLoader";
import { lockScrollBody, scrollTo } from "../../../utility/helper";


const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .portfolio-container {
    .img-container {
        img {
          width: 350px;
          height: 350px;
          border: 8px solid #555;
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
      margin-top: 20px;

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

      .cv-download-button:hover {
        color: white;
        background: #333 !important;
      }
      .contact-button:hover {
        color: white !important;
        background: #333 !important;
      }
    }
`;

const MainBlock = () => {

  const [loader, setLoader] = useState(false);

  const download = async () => {
    setLoader(true);
    const resp = await downloadCV();
    setLoader(false);
    const url = window.URL.createObjectURL(new Blob([resp.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cv.pdf'); //or any other extension
    document.body.appendChild(link);
    link.click();
  }

  useEffect(() => {
    lockScrollBody(loader);
  }, [loader]);

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
          4 years experience in web development, including front-end, back-end, and a little bit of Devops.
          Using php-Laravel, python-flask to develop backend, react-next, vue to develop frontend applications.
          Have a little understanding of the operation process of CI/CD, and have used jenkins and droneCI to optimize the versioning process.
        </div>
        <div className="action-buttons-container">
          <div className="cv-download-button action-button" onClick={download}>Download CV</div>
          {/* <div className="contact-button action-button" onClick={() => scrollTo("contact")}>Contact</div> */}
        </div>
      </div>
      <FullPageLoader show={loader} />
    </Container>
  );
}

export default MainBlock;