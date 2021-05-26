import React, {useState} from 'react';
import styled from 'styled-components';
import { createTodoList, updateTodoItem } from '../api';
import $ from 'jquery';

const Container = styled.div`
    width: 200px;
    height: 280px;
    border:1px solid #e9e9e9;
    border-radius: 8px;
    background: white;
    padding: 20px;
    color: #333;
    
    .title {
        font-size: 16px;
        font-weight: bold;
    }

    .title-input {
        margin-bottom: 20px;
    }

    .content-input {
        height: 130px;
        overflow-y: scroll;
    }

    .content {
        height: 215px;
        overflow-y: scroll;
        padding-top: 10px;

        .list-item {
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
            .item-content {
                word-wrap: break-word;
                width: 90%;
            }
        }
    }

    .content::-webkit-scrollbar,
    .content-input::-webkit-scrollbar {
        display: none;
    }

    .create-button {
        width: 100%;
        height: 30px;
        border: 1px solid #74b3ee;
        border-radius: 4px;
        background: white;
        transition: .2s;
        color: #74b3ee;
    }

    .create-button:hover {
        background: #74b3ee;
        border: 1px solid white;
        color: white;
    }

    .create-item-button {
        width: 100%;
        height: 30px;
        border: 1px dotted #d3d3d3;
        border-radius: 4px;
        transition: .3s;
        background: white;
        color: #cecece;
    }

    .create-item-button:hover {
        background: #ffbe81;
        color: white;
    }
`;

const TitleCreateInput = styled.input`
    width: 100%;
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 3px 10px;
`;

const ItemCreateInput = styled.input`
    width: 100%;
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 3px 10px;
    margin-bottom: 10px;
`;

const ListItem = styled.div`
    .item-content {
        text-decoration: ${(props)=> props.finished ? "line-through" : "none"};
        color: ${(props)=> props.finished ? "#cecece" : "#333"};
    }
`;

const CreateItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const CheckboxInput = styled.input`
    cursor: pointer;
`;

const TodoItem = ({type, content, setCreated}) => {
    const [newItemCount, setNewItemCount] = useState(2);

    let newItemList = [];

    for (let i = 0; i < newItemCount; i++) {
        newItemList.push(
            <ItemCreateInput
                className="item-input"
                type="text"
                placeholder="待辦事項"
                key={i}
            />   
        );
    }

    const handleCreate = (setCreated) => {
        const title = $("#title-input").val();
        const items = $(".item-input").map((index, item) => {
            return $(item).val() ? $(item).val() : null;
        }).toArray();

        if (!title) {
            alert("請輸入標題");
            return;
        }

        if (items.length == 0) {
            alert("請至少輸入一個代辦事項");
            return;
        }
    
        createTodoList({
            title: title,
            items: items
        }).then(resp => {
            if (resp.data.success) {
                setNewItemCount(2);
                setCreated(true);
                $("#title-input").val("");
                $(".item-input").val("");
            }
        }).catch((error) => {
            alert("新增失敗");
        });
    }

    const updateItem = (list_id, item_id, finished) => {
        updateTodoItem({
            list_id: list_id,
            item_id: item_id,
            finished: finished
        }).then(resp => {
            setCreated(true);
        }).catch(() => {

        });
    }


    return (
        <Container>
            {
                type == 'show' ?
                <>
                    <div className="title">{content.title} ({content.created_at})</div>
                    <div className="content">
                        {
                            content.items.map((item) => {
                                return (
                                    <ListItem className="list-item" key={item.id} finished={item.finished_at}>
                                        <div className="item-content">{item.title}</div>
                                        <div className="checkbox">
                                            <CheckboxInput type="checkbox" checked={item.finished_at ? true : false} onClick={(e)=>updateItem(item.list_id, item.id, e.target.checked)}/>
                                        </div>
                                    </ListItem>
                                );        
                            })
                        }
                    </div>
                </> :
                <CreateItemWrapper>
                    <div className="title-input">
                        <TitleCreateInput id="title-input" type="text" placeholder="請輸入標題"/>
                    </div>
                    <div className="content-input">
                        {newItemList}
                        <button className="create-item-button" onClick={()=>setNewItemCount(newItemCount+ 1)}>新增代辦事項</button>
                    </div>
                    <div className="create-button-container">
                        <button className="create-button" onClick={()=>handleCreate(setCreated)}>新增</button>
                    </div>
                </CreateItemWrapper>
            }
        </Container>
    )
}

export default TodoItem;