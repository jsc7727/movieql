const axios = require('axios');
const API_URL = "https://yts.mx/api/v2/movie_details.json";
const getQuery = async () => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(API_URL, {
        params: {
            movie_id: 19719,
        }
    })
}
getQuery();