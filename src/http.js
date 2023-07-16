import axios from "axios";

if (localStorage.getItem('__AUTH_TOKEN')) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('__AUTH_TOKEN');
}

export default axios.create({
    baseURL: "http://localhost/ron/reactecom/backend/public/api",
    headers: {
        "Content-type" : "application/json",
        "Accept" : "application/json",
    }
});