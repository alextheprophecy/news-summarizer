const axios = require("axios");

/**
 * Template API class
 */
class API {

    /**
     * set baseURL to access website
     * @param baseUrl
     * @param apiKey
     * @param apiKeyTag tag to put in header/option
     * @param apiKeyHeader should be present in header or in option
     */
    constructor(baseUrl, apiKeyTag = '', apiKey = '') {
        this.baseUrl = baseUrl
        this.apiKeyTag = apiKeyTag
        this.apiKey = apiKey
    }

    /**
     * get request
     * @param url
     * @param options
     * @return {Promise<response>}
     */
    get(url, options) {
        if(this.apiKey !== '')options[this.apiKeyTag] = this.apiKey
        return axios.get(this.baseUrl + url, {params : options})
    }

    /**
     * post request
     * @param url
     * @param options
     * @return {Promise<response>}
     */
    post(url, options) {
        if(this.apiKey !== '')options[this.apiKeyTag] = this.apiKey
        return axios.post(this.baseUrl + url, {options})
    }
}

module.exports = API