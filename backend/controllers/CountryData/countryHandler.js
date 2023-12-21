var countries = require('country-data').countries,
    currencies = require('country-data').currencies,
    regions = require('country-data').regions,
    languages = require('country-data').languages,
    callingCountries = require('country-data').callingCountries,
    lookup = require('country-data').lookup;

const getCountryFull = (code) => {
    console.log(code)

    code = code.toUpperCase()
    return lookup.countries({alpha2: code})[0].name.toLowerCase().split(/\s+/)[0].replace(/[^\w\s\']|_/g, "") // lookup, get first entry, get name, to lowerCase, split by whitespaces (Korea, democratic republic of), remove punctuation
}

const getRegion = (code) => {
    return code.toUpperCase() === "GB" ? "uk" : "world"//TODO: give regions for world continents->
}
const c = ("Korea, democratic republic of!¨¨").split(/\s+/)[0].replace(/[^\w\s\']|_/g, "")
console.log(c)

module.exports = {
    getCountryFull, getRegion
}