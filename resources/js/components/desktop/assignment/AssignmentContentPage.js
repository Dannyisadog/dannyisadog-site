import styled from "styled-components";
import Background from "../../shared/Background";
import AddIcon from '@mui/icons-material/Add';
import $ from 'jquery';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import PrevPage from "../../shared/PrevPage";
import { fetchAssignmentContent, submitAssignment, updateAssignment } from "@/js/api/assignment";
import { Table } from 'semantic-ui-react';
import EditIcon from '@mui/icons-material/Edit';
import 'semantic-ui-css/semantic.min.css';
import { fetchUser } from "@/js/api/global";


const Container = styled.div`
  .item-cell {
    height: 80px;
  }

  .update-button {
    margin-left: 20px;
  }

  .cell-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .link-cell-wrapper {
    width: 100%;
  }

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

  .assignment-content {
    padding: 30px;
    width: 80%;
    margin: 0 auto;
  }

  table {
    color: white;
  }

  h1 {
    color: white;
  }

  .link {
    width: 80%;
  }

  .link-wrapper {
    display: flex;
    align-items: center;
    width: 100% !important;

    .edit-icon {
      margin-left: 20px;
      cursor: pointer;
    }
  }

  .edit-input {
    display: flex;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    .content {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 40px;
    }
    .item-cell {
      height: auto;
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
  height: 250,
  bgcolor: 'white',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  justifyContent: 'space-between'
};

const AssignmentPage = () => {
  const [id, setId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [link, setLink] = useState(null);
  const [assignmentContent, setAssignmentContent] = useState({});
  const [userData, setUserData] = useState({});
  const [editable, setEditable] = useState(false);
  const [newLink, setNewLink] = useState("");

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  const submit = async () => {
    const data = {
      id,
      link
    }

    await submitAssignment(data);
    await getContentData();
    closeModal();
  }

  const update = async () => {
    const data = {
      id,
      newLink
    }

    await updateAssignment(data);
    await getContentData();

    setEditable(false);
  }

  const getUserData = async () => {
    const resp = await fetchUser();
    setUserData(resp.data);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const assignmentId = urlParams.get('id');
    setId(assignmentId);
    getUserData();
  }, []);

  const getContentData = async () => {
    let resp = await fetchAssignmentContent(id);
    setAssignmentContent(resp.data);
  }

  useEffect(() => {
    if (!id) return;
    getContentData();
  }, [id]);

  useEffect(() => {
    if (link) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [link]);

  return (
    <Background bgcolor="#222">
      <Container>
        <div className="title-wrapper">
          <PrevPage />
          <h1>{assignmentContent.title}</h1>
          <div className="create-button-wrapper">
            {assignmentContent.can_submit && <button onClick={openModal}><AddIcon /></button>}
          </div>
        </div>
        <div className="assignment-content">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className="order-id" >#</Table.HeaderCell>
                <Table.HeaderCell className="name" >Name</Table.HeaderCell>
                <Table.HeaderCell className="link" >link</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                assignmentContent.list && assignmentContent.list.map((item, index) => {
                  return (
                    <Table.Row
                      key={item.id}
                    >
                      <Table.Cell className="order-id item-cell">
                        <div className="cell-wrapper">
                          {index + 1}
                        </div>
                      </Table.Cell>
                      <Table.Cell className="item-cell">
                        <div className="cell-wrapper">
                          {item.name}
                        </div>
                      </Table.Cell>
                      <Table.Cell className="link-wrapper item-cell">
                        <div className="cell-wrapper link-cell-wrapper">
                          {
                            editable
                              ? <div className="edit-input">
                                <TextField fullWidth size="small" label="New Link" variant="outlined" value={newLink} onChange={(e) => {
                                  setNewLink(e.target.value);
                                }} />
                                <Button
                                  className="update-button"
                                  variant="contained"
                                  disabled={!newLink}
                                  onClick={update}
                                >
                                  Update
                                </Button>
                              </div>
                              : <>
                                <a href={item.link} target="_blank">{item.link}</a>
                                {userData.user_id == item.user_id && <EditIcon onClick={() => {
                                  setNewLink(item.link);
                                  setEditable(true);
                                }} className="edit-icon" />}
                              </>
                          }
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>
          </Table>
        </div>
      </Container>
      <Modal
        open={showModal}
        onClose={closeModal}
      >
        <Box sx={style}>
          <h2 className="create-title">Submit Assignment</h2>
          <TextField label="Link" variant="outlined" onChange={(e) => {
            setLink(e.target.value);
          }} />
          <Button
            className="create-button"
            variant="contained"
            disabled={disableSubmit}
            onClick={submit}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Background >
  );
}

export default AssignmentPage;