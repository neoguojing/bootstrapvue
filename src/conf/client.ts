import axios from "axios";
import config from "./config";

const client = axios.create({
    baseURL: config.baseURL,
});

//client.defaults.headers.common['Authorization'] = "";
client.defaults.headers.post['Content-Type'] = "application/json";
client.defaults.timeout = 10*1000;
client.defaults.withCredentials=true;

export default client;