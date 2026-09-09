import axios from 'axios';

export default axios.create({
    baseURL:'http://13.222.102.192:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
