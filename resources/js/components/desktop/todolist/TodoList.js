import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTodoList } from '../../../api';
import FullPageLoader from '../../shared/FullPageLoader';
import TodoItem from './TodoItem';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    .item {
        margin-left: 60px;
        margin-bottom: 20px;
    }
`;

const TodoList = () => {
  const [lists, setLists] = useState([]);
  const [created, setCreated] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (created) {
      setShowLoader(true);
      setCreated(false);
      fetchTodoList().then(resp => {
        if (resp.data.success) {
          setLists(resp.data.data);
          setShowLoader(false);
        }
      });
    }
  }, [created]);

  return <Container>
    {
      <>
        <div className="item">
          <TodoItem className="item" type="create" setCreated={setCreated} setShowLoader={setShowLoader} />
        </div>

        {
          lists.map((item) => {
            return (
              <div className="item" key={item.id}>
                <TodoItem className="item" content={item} type="show" setCreated={setCreated} setShowLoader={setShowLoader} />
              </div>
            )
          })
        }
      </>
    }
    <FullPageLoader show={showLoader} />
  </Container>;
}

export default TodoList;