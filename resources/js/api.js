import axios from 'axios';
import $ from 'jquery';

const token = $('meta[name="csrf-token"]').attr('content');

const headers = {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
};

export const fetchTodoList = () => {
   return new Promise((resolve, reject) => {
       axios.get('/fetchTodoList').then(resp => {
           return resolve(resp);
       }).catch(() => {
           alert("fetch todo list error");
       });
   });
}

export const createTodoList = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('/createTodoList', data, {
            headers: headers
        }).then(resp => {
            if (resp.data.success) {
                return resolve(resp);
            } else {
                return reject("create todo list error");
            }
        }).catch(() => {
            reject("create todo list error");
        });
    });
}

export const updateTodoItem = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('/updateTodoItem', data, {
            headers: headers
        }).then(resp => {
            if (resp.data.success) {
                return resolve(resp);
            } else {
                return reject("create todo list error");
            }
        }).catch(() => {
            reject("create todo list error");
        });
    });
}