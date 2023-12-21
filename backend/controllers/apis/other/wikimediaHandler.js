const API = require("../API");
const wikimedia = new API("https://en.wikipedia.org/api/rest_v1/")

/**
 * Takes in wikipedia pagename and returns lead image src of page
 * @param pageName
 * @return {Promise} src
 */
const getLeadImage = (pageName) => {
    return wikimedia.get(`page/media-list/${pageName}`, {redirect : true}).then( (res) => {
        const images = res.data.items
        for (let img of images) {
            if (img.leadImage) return (img.srcset[0].src) // srcset: [{ src, scale}]
        }
        throw new Error(`Error! no lead image found on page ${pageName}`)
    })
}

const getPerson = (pageName) => {
    return wikimedia.get(`page/media-list/${pageName}`, {redirect : true}).then( (res) => {
        console.log(res.data)
    })
}
getPerson("Emmanuel_Macron")

module.exports = {
    getLeadImage
}