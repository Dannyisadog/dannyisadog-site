import React, {useState} from 'react';
import styled from 'styled-components';
import { createTodoList } from '../api';
import $ from 'jquery';

const Container = styled.div`
    width: 200px;
    height: 250px;
    border:1px solid #e9e9e9;
    border-radius: 8px;
    background: white;
    padding: 20px;
    color: #333;
    
    .title {
        font-size: 20px;
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
        height: 180px;
        overflow-y: scroll;
        padding-top: 10px;

        .list-item {
            margin-bottom: 5px;
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
            return $(item).val();
        }).toArray();
    
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

    return (
        <Container>
            {
                type == 'show' ?
                <>
                    <div className="title">{content.title}</div>
                    <div className="content">
                        {
                            content.items.map((item, index) => {
                                return (
                                    <div className="list-item" key={item.id}>{item.title}</div>
                                );        
                            })
                        }
                    </div>
                </> :
                <>
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
                </>
            }
        </Container>
    )
}

export default TodoItem;