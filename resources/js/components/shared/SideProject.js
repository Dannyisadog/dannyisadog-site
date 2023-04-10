import styled from "styled-components";
import BlockTitle from "./BlockTitle";

import ProjectItem from "./ProjectItem";

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;

  .item-wrapper {
    margin-top: 40px;
    display: grid;
    justify-content: space-between;
    gap: 24px;
    grid-template-columns:  250px 250px 250px 250px;
  }

  @media screen and (max-width: 800px) {
    .item-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const SideProject = () => {
  return (
    <Container id="side-project">
      <BlockTitle title="Gallery" />
      <div className="item-wrapper">
        <ProjectItem title="松果購物" link="https://pcone.com.tw/downloadApp" />
        <ProjectItem title="生活市集" link="https://www.buy123.com.tw/site/sku/2079643#ref=d_search_product_2" />
        <ProjectItem title="TTUMC" link="https://ttumc.dannyisadog.com/schedule" />
        <ProjectItem title="CyberGoblin" link="https://cybergoblin.dannyisadog.com" />
        <ProjectItem title="TodoList" link="https://svelte-todolist.dannyisadog.com/" />
        <ProjectItem title="F2E Tutorial" link="https://github.com/Dannyisadog/frontend-crash-course" />
      </div>
    </Container>
  );
}

export default SideProject;
