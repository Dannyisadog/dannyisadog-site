import ReactDom from 'react-dom';
import TodoList from './components/desktop/todolist/TodoList';
import MobileTodoList from './components/mobile/todolist/TodoList';

import { isMobile } from "react-device-detect";

let TodoListComponent = TodoList;

if (isMobile) {
    TodoListComponent = MobileTodoList;
}

ReactDom.render(
    <>
        <TodoListComponent/>
    </>,
document.getElementById('root'));