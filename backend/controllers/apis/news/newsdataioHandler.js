const API = require("../API")

const newsdata = new API("https://newsdata.io/api/1/")

const NEWS_PER_PAGE= 10 //constant for free license->50
const NEWS_COUNT = 3
const LANGUAGE = "en"
const CATEGORIES = "politics,technology,world"


const getTopNews = (country, language=LANGUAGE) => {
    return newsdata.get("news", `apikey=${process.env.NEWSDATA_APIKEY}&country=${country}&language=${language}&category=${CATEGORIES}&prioritydomain=medium`).then(
        (res) => {
            return res.data.results[0]
    })
};

module.exports = {
    getTopNews
}