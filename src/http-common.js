import axios from 'axios';

export default axios.create({
    baseURL: process.env.ENDPOINT,
    headers: {
        "Content-type": "application/json"
    }
});