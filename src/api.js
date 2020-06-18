import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "763e4c1b9500a48ad25a10e0c7d832ce"
  }
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) => api.get(`tv/${id}`),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const movieApi = {
  topRated: () => api.get("movie/top_rated"),
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
