import { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react';
import styled from "styled-components";
import Background from "../../shared/Background";
import Loader from '../../shared/Loader';
import PrevPage from '../../shared/PrevPage';

const Container = styled.div`
  h1 {
    color: white;
  }

  a {
    text-decoration: underline !important;
    color: white !important;
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

    .short-name-col, .order-id {
      display: none;
    }
  }
`;

const CoursePage = () => {
  const [members, setMembers] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const getMembers = async () => {
    setShowLoader(true);
    let response = await fetch("/getMembers").then(res => res);
    response = await response.json();
    setMembers(response);
    setShowLoader(false);
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
          <Table inverted color="#222">
            <Table.Header >
              <Table.Row>
                <Table.HeaderCell className="order-id" style={{ color: 'white' }}>#</Table.HeaderCell>
                <Table.HeaderCell style={{ color: 'white' }}>Name</Table.HeaderCell>
                <Table.HeaderCell className="short-name-col" style={{ color: 'white' }}>Short Name</Table.HeaderCell>
                <Table.HeaderCell style={{ color: 'white' }}>Github Link</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {members.map((member, index) => (
                <Table.Row
                  key={index}
                >
                  <Table.Cell className="order-id" style={{ color: 'white' }}>{index + 1}</Table.Cell>
                  <Table.Cell style={{ color: 'white' }}>{member.name}</Table.Cell>
                  <Table.Cell className="short-name-col" style={{ color: 'white' }}>{member.short_name}</Table.Cell>
                  <Table.Cell className="link-wrapper" style={{ color: 'white' }}>
                    <a href={member.github_link} target="_blank">{member.github_link}</a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Container>
      <Loader show={showLoader} />
    </Background>
  );
}

export default CoursePage;