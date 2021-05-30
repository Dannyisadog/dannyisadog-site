import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const Container = styled.div`
    border: 0;
    border-radius: 8px;
    padding: 20px;
    background: linear-gradient(to right, #344f81, #A8D0E6);

    .title {
        font-size: 32px;
        font-weight: bold;
        color: white;
    }
    .line { 
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, white, #A8D0E6);;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .content {
        display: flex;
        .project-item {
            margin-right: 20px;
        }
    }
`;

const ProjectList = () => {
    return (
        <Container>
            <div className="title">
                side projects
            </div>
            <div className="line"></div>
            <div className="content">
                <div className="project-item">
                    <ProjectItem title="todo list" url="/todolist" />
                </div>
                <div className="project-item">
                    <ProjectItem title="ttumc" url="https://ttumc.dannyisadog.com" new_tab/>
                </div>
            </div>
        </Container>
    );
}

export default ProjectList;