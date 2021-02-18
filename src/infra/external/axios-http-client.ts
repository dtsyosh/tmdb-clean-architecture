import axios from 'axios';

export const TMDBClient = axios.create({
  baseURL: process.env.TMDB_API_URL,
  params: {
    api_key: process.env.TMDB_API_KEY
  }
});

