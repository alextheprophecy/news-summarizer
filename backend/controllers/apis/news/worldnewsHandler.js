const {formatDate} = require("../../tools")
const {getCountryFull, getRegion} = require("../../CountryData/countryHandler")
const API = require("../API")
/**
 * only have max 50 requests per day
 * @type {API}
 */
const worldNews = new API("https://api.worldnewsapi.com/search-news", "api-key", process.env.WORLDNEWS_API_KEY)

const LANGUAGE = "en"


let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 3);


const getWorldNews = (code, date, search = '', language = LANGUAGE) => {
    const searchParams = {
        //text: search
        language: language,
        sort: "publish-time",
        "sort-direction": "DESC",
        "earliest-publish-date": formatDate(pastDate),
        "max-sentiment": -0.3,
        entities: "LOC:" + getCountryFull(code),
        number: 50
    }
    return worldNews.get('', searchParams).then(filterTopNews)
};

const filterTopNews = (newsObject) => {
    /**
     * @return{{title: String, text: string, url:string, image:string, publish_date:String, author:string, language:string, source_country:string, sentiment:Number}}
     */

    const news = newsObject.data.news
    news.sort((n1,n2) => n1.sentiment <= n2.sentiment?-1:1)
    const newsCount = 5
    return news.slice(0, newsCount).map(n => n.title)[0]
}


module.exports = getWorldNews
