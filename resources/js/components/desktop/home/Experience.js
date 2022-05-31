import styled from "styled-components";
import BlockTitle from "@Components/shared/BlockTitle";

import ExperienceBlock from "@Components/shared/ExperienceBlock";
import trendMicroLogo from "@/image/shared/trend-micro.png";
import jarvishLogo from "@/image/shared/jarvish.png";
import pconeLogo from "@/image/shared/pcone.png";
import mayoLogo from "@/image/shared/mayo.png";
import kkCompanyLogo from "@/image/shared/kkcompany.png";

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
          icon={kkCompanyLogo}
        />
        <ExperienceBlock
          company="MAYO"
          start="2022/3"
          end="2022/5"
          jobTitle="Front-end Engineer"
          icon={mayoLogo}
        />
        <ExperienceBlock
          company="松果購物"
          start="2020/4"
          end="2022/3"
          jobTitle="Software Engineer"
          icon={pconeLogo}
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
          icon={jarvishLogo}
        />
        <ExperienceBlock
          company="Trend Micro"
          start="2016/7"
          end="2017/2"
          jobTitle="Build Master"
          icon={trendMicroLogo}
        />
      </div>
    </Container>
  )
}

export default Experience;