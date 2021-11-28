import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
    transition: .3s;
    display: ${(props)=>props.show ? "flex" : "flex"};
    justify-content: center;
    align-items: center;
    height: ${(props)=>props.show ? "100%" : "0"};
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #000000a0;
    z-index: 99;

    @media only screen and (max-width: 600px) {
        align-items: flex-end;
    }

    .modal {
        padding: 20px;
        display: block;
        width: 600px;
        overflow: hidden;
        height: ${(props)=>props.show ? "450px" : "0"};
        background: #122d57;
        border-radius: 12px;
        top: auto;
        left: auto;
        position: relative;
        visibility: ${(props)=>props.show ? "visible" : "hidden"};
        .title {
            color: white;
            font-size: 24px;
        }
        .line {
            width: 100%;
            border-top: 3px solid #ffffff50;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
`;

const CloseIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
`;

const PopupModal = ({data, show, setShow}) => {
    return (
        <Container show={show}>
            <div className="modal">
                <CloseIcon className="close-icon" onClick={() => setShow(false)}/>
                <div className="title">{data.title}</div>
                <div className="line"></div>
                <div className="content">{data.content}</div>
            </div>
        </Container>
    );
}

PopupModal.propTypes = {
    data: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired
}

export default PopupModal;