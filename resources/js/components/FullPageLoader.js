import styled from 'styled-components';
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';

const Container = styled.div`
    display: ${(props)=>props.show ? "flex" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    justify-content: center;
    align-items: center;
    background: #0000004f;
`;

const FullPageLoader = ({show}) => {
    return <Container show={show} className="full-page-loader">
        <Loader
            type="TailSpin"
            color="#5593f0"
        />
    </Container>
}

FullPageLoader.propTypes = {
    show: PropTypes.bool.isRequired
}

export default FullPageLoader;