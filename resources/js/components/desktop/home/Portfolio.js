import styled from 'styled-components';
import PropTypes from "prop-types";

import AboutContent from '../../shared/AboutContent';
import FrontendContent from '../../shared/FrontendContent';
import BackendContent from '../../shared/BackendContent';
import DevopsContent from '../../shared/DevopsContent';

const Container = styled.div`
    width: 100%;
    border:0;
    border-radius: 8px;
    padding: 20px;
    background: linear-gradient(to right, #3f5580, #122d57);
    
    .title {
        font-size: 32px;
        color: white;
        font-weight: bold;
    }

    .line { 
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, white, #122d57);;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .content {
        color: white;
        display: flex;
        height: 200px;
        .about {
            display: flex;

            .profile-img-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .basic-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 20px;
            font-size: 16px;
            .github {
                color: white;
                text-decoration: none !important;
                transition: .3s;
            }
            .github:hover {
                color: #f76c6c;
            }
        }

        .block-line {
            border-left: 2px solid #ffffff50;
            border-radius: 8px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .skill {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            
            .skill-block {
                border: 3px solid white;
                border-radius: 8px;
                padding: 6px 12px;
                width: 125px;
                height: 125px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 22px;
                cursor: pointer;
                transition: .3s;
                /* color: #f7d76c;
                border: 3px solid #f7d76c; */
            }
            .skill-block:hover {
                color: #f76c6c;
                /* color: #f7d76c; */
                border: 3px solid #f76c6c;
                /* border: 3px solid #f7d76c; */
                width: 170px;
                height: 170px;
                font-size: 32px;
            }
        }
    }
`;

const Portfolio = ({setShowPopupModal, setModalData}) => {

    const handleAbout = () => {
        setModalData({
            title: "about",
            content: <AboutContent/>
        });
        setShowPopupModal(true);
    }

    const handleFrontEnd = () => {
        setModalData({
            title: "front end",
            content: <FrontendContent/>
        });
        setShowPopupModal(true);
    }

    const handleBackEnd = () => {
        setModalData({
            title: "back end",
            content: <BackendContent/>
        });
        setShowPopupModal(true);
    }

    const handleDevops = () => {
        setModalData({
            title: "dev ops",
            content: <DevopsContent/>
        });
        setShowPopupModal(true);
    }

    return (
        <Container>
            <div className="title">
                portfolio
            </div>
            <div className="line"></div>
            <div className="content">
                <div className="about">
                    <div className="profile-img-wrapper">
                        <div className="profile-img"></div>
                    </div>
                    <div className="basic-info">
                        <div className="name">
                            陳鍾逸 Danny
                        </div>
                        <div className="age">
                            26歲
                        </div>
                        <div className="gradutation">
                            大同資工所
                        </div>
                        <div className="job-title">
                            網站工程師
                        </div>
                        <div className="github">
                            <a target="_blank" className="github" href="https://github.com/Dannyisadog/">github.com/Dannyisadog</a>
                        </div>
                    </div>
                </div>
                {/* <div className="block-line"></div> */}
                <div className="skill">
                    <div className="front-end skill-block" onClick={handleAbout}>
                        <div>about</div>
                    </div>
                    <div className="front-end skill-block" onClick={handleFrontEnd}>
                        <div>front-end</div>
                    </div>
                    <div className="back-end skill-block" onClick={handleBackEnd}>
                        <div>back-end</div>
                    </div>
                    <div className="dev-ops skill-block" onClick={handleDevops}>
                        <div>dev-ops</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

Portfolio.propTypes = {
    setShowPopupModal: PropTypes.func.isRequired,
    setModalData:PropTypes.func.isRequired
}

export default Portfolio;