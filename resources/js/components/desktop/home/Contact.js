import styled from "styled-components";
import BlockTitle from "../../shared/BlockTitle";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <BlockTitle title="Contact" />
    </Container>
  )
}

export default Contact;
