import styled from "styled-components";
import Background from "../../shared/Background";
import AddIcon from '@mui/icons-material/Add';
import $ from 'jquery';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { fetchAssignmentList } from "@/js/api/assignment";
import AssignmentCard from "./AssignmentCard";
import { fetchUser } from "@/js/api/global";
import PrevPage from "../../shared/PrevPage";

const Container = styled.div`

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: 0;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: white;
    }
  }

  .content {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }

  h1 {
    color: white;
  }

  @media screen and (max-width: 1000px) {
    .content {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 40px;
    }
  }
`;

const token = $('meta[name="csrf-token"]').attr('content');

const headers = {
  'Content-Type': 'application/json',
  'X-CSRF-TOKEN': token
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  width: '90%',
  height: 300,
  bgcolor: 'white',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  justifyContent: 'space-between'
};

const AssignmentPage = () => {
  const [userData, setUserData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [disableCreate, setDisableCreate] = useState(true);
  const [assignmentList, setAssignmentList] = useState([]);
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    if (title && description) {
      setDisableCreate(false);
    } else {
      setDisableCreate(true);
    }
  }, [title, description]);

  const getList = async () => {
    const resp = await fetchAssignmentList();
    setAssignmentList(resp.data);
  }

  const getUser = async () => {
    const resp = await fetchUser();
    setUserData(resp.data);
  }

  useEffect(() => {
    getList();
    getUser();
  }, []);

  const createAssignment = async () => {
    if (!title || !description) {
      alert("title and description required...");
      return;
    }

    const data = {
      title,
      description
    };

    await fetch("/course/assignment", {
      method: 'POST',
      body: JSON.stringify(data),
      headers,
    }).then(_ => {
      setShowModal(false);
    });
  };
  return (
    <Background bgcolor="#222">
      <Container>
        <div className="title-wrapper">
          <PrevPage />
          <h1>Assignment</h1>
          <div className="create-button-wrapper">
            {userData.is_admin && <button onClick={openModal}><AddIcon /></button>}
          </div>
        </div>
        <div className="content">
          {
            assignmentList.map((item) => {
              return (
                <AssignmentCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                />
              )
            })
          }
        </div>
      </Container>
      <Modal
        open={showModal}
        onClose={closeModal}
      >
        <Box sx={style}>
          <h3 className="create-title">Create Assignment</h3>
          <TextField label="Title" variant="outlined" onChange={(e) => {
            setTitle(e.target.value);
          }} />
          <TextField label="Description" variant="outlined" onChange={(e) => {
            setDescription(e.target.value);
          }} />
          <Button
            className="create-button"
            variant="contained"
            onClick={createAssignment}
            disabled={disableCreate}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </Background >
  );
}

export default AssignmentPage;