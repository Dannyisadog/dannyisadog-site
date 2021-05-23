import axios from 'axios';
import $ from 'jquery';

const token = $('meta[name="csrf-token"]').attr('content');

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
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token
    };
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