module.exports = (query, page) => {
    const API_URL = `https://pixabay.com/api/?key=${process.env.VUE_APP_API_KEY.replace(
        "_",
        "-"
    )}&q=${query.replace(/ /g, "+")}&page=${page || 1}`;
    return fetch(API_URL).then(res => res.json())
}