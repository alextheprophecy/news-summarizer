const formatDate = (date) => {
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset * 60 * 1000))
    return date.toISOString().substring(0, 10)
}


module.exports = {
    formatDate
}