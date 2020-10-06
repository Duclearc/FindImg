module.exports = (query, page) => {
    const API_KEY = process.env.VUE_APP_API_KEY?.replace("_","-") || '';
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query.replace(/ /g, "+")}&page=${page || 1}`;
    return fetch(API_URL)
        .then(res => res.json())
        .catch(err => {
            const errMsg = API_KEY ? '':'API KEY MISSING';
            console.log(err, errMsg);
            alert('Could not connect to server. Please reload and try again');
        })
}