import CircularProgress from '@mui/material/CircularProgress';
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  background: #010101af;
  top: 0;
  left: 0;
  display: ${(props) => props.show ? "flex" : "none"};
  justify-content: center;
  align-items: center;
`;

const Loader = (props) => {
  const { show } = props;
  return (
    <Container show={show}>
      <CircularProgress size="60px" />
    </Container>
  );
}

export default Loader;