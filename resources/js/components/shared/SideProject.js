import styled from "styled-components";
import BlockTitle from "./BlockTitle";

import ProjectItem from "./ProjectItem";

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;

  .item-wrapper {
    margin-top: 40px;
    display: flex;
  }

  @media screen and (max-width: 800px) {
    .item-wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const SideProject = () => {
  return (
    <Container id="side-project">
      <BlockTitle title="Side Projects" />
      <div className="item-wrapper">
        <ProjectItem title="TTUMC" link="https://ttumc.dannyisadog.com/schedule" />
        <ProjectItem title="CyberGoblin" link="https://cybergoblin.club" />
        <ProjectItem title="TodoList" link="https://svelte-todolist.dannyisadog.com/" />
        <ProjectItem title="F2E Tutorial" link="https://frontend-tutorial.dannyisadog.com/" />
      </div>
    </Container>
  );
}

export default SideProject;
