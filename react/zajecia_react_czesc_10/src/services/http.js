// services/api.js
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchTodosQuery = () =>  axios.get(`/todos`);

export default {
    fetchTodosQuery,
};