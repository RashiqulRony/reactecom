import axios from "axios";

export default axios.create({
    baseURL: "http://localhost/ron/reactecom/backend/public/api",
    headers: {
        "Content-type" : "application/json",
        "Accept" : "application/json",
    }
});