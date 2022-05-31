import styled from "styled-components";
import BlockTitle from "../../shared/BlockTitle";

import ExperienceBlock from "../../shared/ExperienceBlock";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;

  .experience-wrapper {
    margin-top: 20px;
    margin-left: 15px;
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <BlockTitle title="Experience" />
      <div className="experience-wrapper">
        <ExperienceBlock
          company="KKCompany"
          start="2022/6"
          jobTitle="Full Stack Python Developer"
        />
        <ExperienceBlock
          company="MAYO"
          start="2022/3"
          end="2022/5"
          jobTitle="Front-end Engineer"
        />
        <ExperienceBlock
          company="松果購物"
          start="2020/4"
          end="2022/3"
          jobTitle="Software Engineer"
        />
        <ExperienceBlock
          company="中研科技"
          start="2018/1"
          end="2019/1"
          jobTitle="Back-end Engineer"
        />
        <ExperienceBlock
          company="Jarvish"
          start="2017/2"
          end="2017/8"
          jobTitle="Software Engineer"
        />
        <ExperienceBlock
          company="Trend Micro"
          start="2016/7"
          end="2017/2"
          jobTitle="Build Master"
        />
      </div>
    </Container>
  )
}

export default Experience;