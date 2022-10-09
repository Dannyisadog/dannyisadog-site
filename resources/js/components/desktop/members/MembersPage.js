import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../../shared/Background";
import PrevPage from '../../shared/PrevPage';

const Container = styled.div`
  h1 {
    color: white;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .prev-icon-wrapper {
    position: absolute;
    left: 0;
    cursor: pointer;
  }

  .content {
    margin-top: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    width: 80%;

    .input {
      margin-bottom: 20px;
    }
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

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
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    let response = await fetch("/getMembers").then(res => res);
    response = await response.json();
    setMembers(response);
  }

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <Background>
      <Container>
        <div className="prev-icon-wrapper">
          <PrevPage />
        </div>
        <div className="title-wrapper">
          <h1 className="title">Members</h1>
        </div>
        <div className="content">
          <TableContainer>
            <Table sx={{ minWidth: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: 'white' }}>#</TableCell>
                  <TableCell style={{ color: 'white' }}>Name</TableCell>
                  <TableCell style={{ color: 'white' }}>Short Name</TableCell>
                  <TableCell style={{ color: 'white' }}>Github Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map((member, index) => (
                  <TableRow
                    key={index}
                  >
                    <TableCell style={{ color: 'white' }}>{index + 1}</TableCell>
                    <TableCell style={{ color: 'white' }}>{member.name}</TableCell>
                    <TableCell style={{ color: 'white' }}>{member.short_name}</TableCell>
                    <TableCell style={{ color: 'white' }}>
                      <a href={member.github_link} target="_blank">{member.github_link}</a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </Background>
  );
}

export default CoursePage;