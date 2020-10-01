module.exports = (query) => {
    const API_URL = `https://pixabay.com/api/?key=${process.env.VUE_APP_API_KEY.replace(
        "_",
        "-"
    )}&q=${query.replace(/ /g, "+")}`;
    return fetch(API_URL).then(res => res.json())
}