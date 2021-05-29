import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const Container = styled.div`
    border: 1px solid #333;
    border-radius: 8px;
    padding: 20px;
    .title {
        font-size: 24px;
    }
    .line { 
        width: 100%;
        border-top: 1px solid #333;
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
                site projects
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