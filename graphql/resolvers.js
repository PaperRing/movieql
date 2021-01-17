import { getMovies, getById, addMovies, deleteMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovies(name, score),
    deleteMovie: (_, { id }) => deleteMovies(id),
  },
};

export default resolvers;
