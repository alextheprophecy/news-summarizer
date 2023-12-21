const {getLeadImage} = require("./apis/other/wikimediaHandler");
const getPerson = (name) => {
    return wikiImage(name)
}

/**
 * takes a wikipedia page_name returns the main image
 * @param pageName ex. Barack_Obama
 * @return {Promise<String>} promise of image url
 */
const wikiImage = (pageName) => {
    return getLeadImage(pageName)
}

module.exports = {
    getPerson
}