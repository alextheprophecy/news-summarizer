import axios from 'axios';

const getCountryNews = (code) => {
    return axios.post("http://localhost:4000/news/get-news", {code: code})
}

export default getCountryNews