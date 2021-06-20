import { getMovies, getMovieById } from "./db"
let a;
const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovieById(id),
    },

}
export default resolvers;