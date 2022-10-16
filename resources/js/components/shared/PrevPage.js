import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  .backIcon {
    color: ${(props) => props.color ?? 'white'};
  }
`;

const PrevPage = ({ color }) => {
  return (
    <Container onClick={() => history.back()} color={color}>
      <KeyboardBackspaceIcon className="backIcon" fontSize='large' />
    </Container>
  );
}

export default PrevPage;