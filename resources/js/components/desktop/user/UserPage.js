import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../../shared/Background";
import PrevPage from '../../shared/PrevPage';

const Container = styled.div`
  h1 {
    color: #222;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  .prev-icon-wrapper {
    cursor: pointer;
    position: absolute;
    left: 0;
  }

  .content {
    margin-top: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    width: 400px;

    .input {
      margin-bottom: 20px;
    }
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .member-link {
      font-size: 18px;
      margin-left: 20px;
    }
  }

  .update-button {
    margin-top: 30px;
  }

  @media screen and (max-width: 1000px) {
    .content {
      margin-top: 40px;
      width: 100%;
      padding: 0 40px;
    }

    .title-wrapper {
      flex-direction: column;
      margin-top: 30px;
    }
  }
`;

const CoursePage = () => {
  const [userData, setUserData] = useState({
    name: "",
    short_name: "",
    email: "",
    github_link: ""
  });

  const dataHandler = (e, type) => {
    const new_value = e.target.value;
    switch (type) {
      case "name":
        setUserData(prev => {
          let newState = { ...prev, name: new_value };
          return newState;
        });
        break;
      case "short_name":
        setUserData(prev => {
          let newState = { ...prev, short_name: new_value };
          return newState;
        });
        break;
      case "github_link":
        setUserData(prev => {
          let newState = { ...prev, github_link: new_value };
          return newState;
        });
        break;
    }
  }

  async function getUserData() {
    let response = await fetch('/getUserData');
    response = await response.json();
    setUserData(response);
  };

  async function updateUserData() {
    const token = $('meta[name="csrf-token"]').attr('content');

    const headers = {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': token
    };

    let response = await fetch("/updateUserData", {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers,
    }).then(res => res);
    response = await response.json();
    if (response.success) {
      alert("update successfully !");
    }
    window.location = "/course";
  };

  useEffect(() => {
    getUserData();
  }, []);

  const update = () => {
    if (!userData.name) {
      alert("Name required !");
    }
    updateUserData();
  }

  return (
    <Background bgcolor="#f0f0f0">
      <Container>
        <div className="prev-icon-wrapper">
          <PrevPage color="#222" />
        </div>
        <div className="title-wrapper">
          <h1 className="title">User data</h1>
        </div>
        <div className="content">
          <TextField className="input" label="Name" value={userData.name} onChange={(e) => {
            dataHandler(e, "name");
          }} />
          <TextField className="input" label="Short Name" variant="outlined" value={userData.short_name} onChange={(e) => {
            dataHandler(e, "short_name");
          }} />
          <TextField className="input" label="Email" disabled variant="outlined" value={userData.email} inputProps={
            { readOnly: true, }
          } />
          <TextField className="input" label="Github Link" variant="outlined" value={userData.github_link} onChange={(e) => {
            dataHandler(e, "github_link");
          }} />
          <Button className="update-button" variant="contained" onClick={update}>Update</Button>
        </div>
      </Container>
    </Background>
  );
}

export default CoursePage;