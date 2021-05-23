import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100px;
    height: 200px;
    background: pink;
    border:1px solid transparent;
    border-radius: 8px;
`;

const TodoItem = () => {
    return (
        <Container>
            123
        </Container>
    )
}

export default TodoItem;