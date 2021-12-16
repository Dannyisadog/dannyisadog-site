import styled from "styled-components";

const Container = styled.div`
  color: white;
  font-size: 28px;
`;

const DevopsContent = () => {
  return (
    <Container>
      <li>jenkins, droneCI, ecs</li>
      <li>改善後端、前端上版流程 (shell script)</li>
      <li>實驗將production container化 (ecs)</li>
    </Container>
  );
}

export default DevopsContent;