let express = require("express"),
    router = express.Router();

const getGuardianNews = require("../controllers/apis/news/theguardianHandler")
const getWorldNews = require("../controllers/apis/news/worldnewsHandler")

router.post("/get-news", (req, res, next) => {
    const {code} = req.body
    /*getGuardianNews(code, new Date()).then((news)=>{
        const topNews = news.results[0]
        res.send(topNews.webTitle)
    }).catch(console.log)*/

    getWorldNews(code, new Date()).then((news)=>{
        res.status(200).send(news)
    }).catch(console.log)
});

module.exports = router;