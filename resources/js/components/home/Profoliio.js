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
                            25歲
                        </div>
                        <div className="gender">
                            男生
                        </div>
                        <div className="job-title">
                            網站工程師
                        </div>
                        <div className="email">
                            <a target="_blank" className="email" href = "mailto: dannyisadog10@gmail.com">dannyisadog10@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profolio;