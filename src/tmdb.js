import axios from "axios";

const API_KEY = "52ca5cfb8dc99b3611152d5057dab45b";
const API_BASE = "https://api.themoviedb.org/3";

const dataFetch = async (endpoint, genre) => {
  const resquest = await axios.get(
    `${API_BASE}${endpoint}?api_key=${API_KEY}&with_genres=${genre}`
  );
  const data = await resquest.data;
  return data;
};

export default {
  getMoviesList: async () => {
    return [
      {
        slug: "trending",
        title: "Trending",
        items: await dataFetch("/trending/all/week"),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await dataFetch("/movie/top_rated"),
      },
      {
        slug: "action",
        title: "Action",
        items: await dataFetch("/discover/movie", "28"),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await dataFetch("/discover/movie", "35"),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await dataFetch("/discover/movie", "27"),
      },
      {
        slug: "drama",
        title: "Drama",
        items: await dataFetch("/discover/movie", "10749"),
      },
    ];
  },

  getMovieInfo: async (movieId) => {
    let info = await dataFetch(`/movie/${movieId}`);
    return info;
  },
};
