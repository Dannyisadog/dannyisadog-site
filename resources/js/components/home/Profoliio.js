import styled from 'styled-components';

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
            .email {
                color: white;
                text-decoration: none !important;
                transition: .3s;
            }
            .email:hover {
                color: #f76c6c;
            }
        }

        .block-line {
            border-left: 3px solid #ffffff50;
            border-radius: 8px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .skill {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            .skill-block {
                border: 2px solid #ffffffa0;
                border-radius: 8px;
                padding: 6px 12px;
                width: 120px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                cursor: pointer;
                transition: .3s;
            }
            .skill-block:hover {
                color: #f76c6c;
                border: 2px solid #f76c6c;
                font-size: 22px;
            }
        }
    }
`;

const Profolio = () => {
    return (
        <Container>
            <div className="title">
                profolio
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
                            25
                        </div>
                        <div className="gender">
                            male
                        </div>
                        <div className="job-title">
                            web engineer
                        </div>
                        <div className="email">
                            <a target="_blank" className="email" href = "mailto: dannyisadog10@gmail.com">dannyisadog10@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="block-line"></div>
                <div className="skill">
                    <div className="front-end skill-block">
                        <div>front-end</div>
                    </div>
                    <div className="back-end skill-block">
                        <div>back-end</div>
                    </div>
                    <div className="dev-ops skill-block">
                        <div>dev-ops</div>
                    </div>
                </div>
                <div className="block-line"></div>
                <div className="introduction">

                </div>
            </div>
        </Container>
    );
}

export default Profolio;