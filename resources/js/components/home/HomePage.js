import {useState} from "react";
import styled from 'styled-components';
import Profolio from './Profoliio';
import ProjectList from './ProjectList';
import PopupModal from "../shared/PopupModal";

const Container = styled.div`
    .project-list-wrapper {
        margin-top: 20px;
    }
`;

const HomePage = () => {

    const [showPopupModal, setShowPopupModal] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <Container>
            <PopupModal data={modalData} show={showPopupModal} setShow={setShowPopupModal} />
            <div className="profolio-wrapper">
                <Profolio setShowPopupModal={setShowPopupModal} setModalData={setModalData} />
            </div>
            <div className="project-list-wrapper">
                <ProjectList />
            </div>
        </Container>
    );
}

export default HomePage;