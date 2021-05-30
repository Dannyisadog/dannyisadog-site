import styled from 'styled-components';
import Profolio from './Profoliio';
import ProjectList from './ProjectList';

const Container = styled.div`
   
`;

const HomePage = () => {
    return (
        <Container>
            {/* <div className="profolio-wrapper">
                <Profolio />
            </div> */}
            <div className="project-list-wrapper">
                <ProjectList />
            </div>
        </Container>
    );
}

export default HomePage;