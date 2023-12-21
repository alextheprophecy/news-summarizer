const Client = require('guardian-js').default
const api = new Client(process.env.GUARDIAN_API_KEY, false);//TODO: boolean: use https in production?
const {formatDate} = require("../../tools")
const {getCountryFull, getRegion} = require("../../CountryData/countryHandler")

const getGuardianNews = (code, date) => {
    const country = getCountryFull(code), region = getRegion(code)
    return api.content.search(country, {tag: (region+'/'+country), section:'news', 'to-date':formatDate(date), 'order-by':'relevance'})
}

module.exports = getGuardianNews