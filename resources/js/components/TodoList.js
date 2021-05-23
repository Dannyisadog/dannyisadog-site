import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    .item {
        margin-right: 10px;
    }
`;

const TodoList = () => {
    const len = [1,2,3];
    return <Container>
        {
            len.map(() => {
                return (
                    <div className="item">
                        <TodoItem className="item"/>    
                    </div>
                )
            })   
        }
    </Container>;
}

export default TodoList;