const TMDB_API_KEY = process.env.TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p"

export const fetchFromTMDB = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}`)
  return response.json()
}

export const getImageUrl = (path: string, size = "original") => {
  return `${IMAGE_BASE_URL}/${size}${path}`
}

export const getTrending = () => fetchFromTMDB("/trending/movie/day")
export const getUpcoming = () => fetchFromTMDB("/movie/upcoming")
export const getTopRated = () => fetchFromTMDB("/movie/top_rated")
export const getPopular = () => fetchFromTMDB("/movie/popular")
export const getGenres = () => fetchFromTMDB("/genre/movie/list?language=en")

