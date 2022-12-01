import axios from "axios";

const API_KEY = "52ca5cfb8dc99b3611152d5057dab45b";
const API_BASE = "https://api.themoviedb.org/3";

const dataFetch = async (endpoint) => {
  const resquest = await axios.get(`${API_BASE}${endpoint}?api_key=${API_KEY}`);
  const data = await resquest.json();
  return data;
};

export default {
  getMoviesList: async () => {
    return [
      {
        slug: "trending",
        title: "Trending Movies",
        items: await dataFetch("/trending/all/week"),
      },
      {
        slug: "toprated",
        title: "Top Rated Movies",
        items: await dataFetch("/movie/top_rated"),
      },
      {
        slug: "action",
        title: "Action Movies",
        items: await dataFetch("/discover/movie?with_genre=28"),
      },
      {
        slug: "comedy",
        title: "Comedy Movies",
        items: await dataFetch("/discover/movie?with_genre=35"),
      },
      {
        slug: "horror",
        title: "Horror Movies",
        items: await dataFetch("/discover/movie?with_genre=27"),
      },
      {
        slug: "drama",
        title: "Drama Movies",
        items: await dataFetch("/discover/movie?with_genre=10749"),
      },
      {
        slug: "documentary",
        title: "Documentaries",
        items: await dataFetch("/discover/movie?with_genre=99"),
      },
    ];
  },
};
