import fetch from "node-fetch";
import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";
const API_DETAIL_URL = "https://yts.mx/api/v2/movie_details.json";



export const getMovies = async (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    console.log(REQUEST_URL);
    let res = await fetch(`${REQUEST_URL}`);
    let json = await res.json();
    return await json.data.movies;
}

export const getMovieById = async (id) => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(API_DETAIL_URL, {
        params: {
            movie_id: id,
        }
    })
    console.log(movie);
    return movie;
}