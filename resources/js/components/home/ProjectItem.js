import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.a`
    text-decoration: none !important;
    color: #333 !important;
    width: 150px;
    height: 150px;
    display: flex;
    .content {
        display: flex;
        transition: .3s;
        flex-direction: column;
        justify-content: center;
        border: 1px solid black;
        border-radius: 12px;
        align-items: center;
        font-size: 24px;
        width: 100%;
        height: 100%;
    }
    .content:hover {
        background: #333;
        color: white;
        font-size: 32px;
    }
`;

const ProjectItem = ({title, url, new_tab}) => {
    return (
        <Container target={new_tab ? "_blank" : null} href={url}>
            <div className="content">{title}</div>
        </Container>
    );
}

ProjectItem.defaultProps = {
    new_tab: false
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    new_tab:PropTypes.bool
}

export default ProjectItem;