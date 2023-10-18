import axios from 'axios'

export const api = axios.create({
    baseURL:'https://rocknotes-api.onrender.com'
    //'http://localhost:3000' desenvolvimento 
});

api.get('/user/:id')