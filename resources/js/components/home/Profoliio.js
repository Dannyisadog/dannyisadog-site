import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100px;
    border:1px solid #333;
    border-radius: 8px;
    padding: 20px;
    
    .title {
        font-size: 24px;
    }
`;

const Profolio = () => {
    return (
        <Container>
            <div className="title">
                profolio
            </div>
            <div className="content">

            </div>
        </Container>
    );
}

export default Profolio;