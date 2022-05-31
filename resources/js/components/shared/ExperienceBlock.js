import styled from "styled-components";

const Container = styled.div`
  position: relative;
  color: #f5f5f5;

  .experience-block {
    position: relative;
    border-left: 1px solid #333;
    padding: 60px 0 40px 20px;

    ::after {
      content: "";
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #333;
    }

    .header {
      width: fit-content;
      position: absolute;
      left: -20px;
      top: 10px;
      display: flex;
      align-items: center;
      height: 20px;
      .duration {
        padding: 3px 15px;
        border: 2px solid #007ced;
        border-radius: 16px;
        background: #222;
        font-size: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #d5d5d5;
      }
      .company-logo {
        margin-left: 0.8rem;
      }
      .company {
        margin-left: 0.8rem;
        font-size: 1rem;
        color: #aaa;
      }
    }
    .content {
      .job-title {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;

const ExperienceBlock = ({ company, jobTitle, start, end, title, content, icon }) => {
  return (
    <Container>
      <div className="experience-block">
        <div className="header">
          <div className="duration">{start} - {end || 'Current'}</div>
          {icon && <img className="company-logo" src={icon} height="100%" />}
          <div className="company">{company}</div>
        </div>
        <div className="content">
          <div className="job-title">{jobTitle}</div>
          <div className="desc">
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ExperienceBlock;