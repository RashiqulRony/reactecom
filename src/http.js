import axios from "axios";

if (localStorage.getItem('__AUTH_TOKEN')) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('__AUTH_TOKEN');
}

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-type" : "multipart/form-data",
        "Accept" : "application/json",
    }
});