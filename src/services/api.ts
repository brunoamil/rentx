import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.17.1.204:3333'
});

export  {api};