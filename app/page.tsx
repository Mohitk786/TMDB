import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MovieSlider } from "@/components/movie-slider";
import { GenreCard } from "@/components/genre-card";
import {
  getTrending,
  getUpcoming,
  getTopRated,
  getPopular,
  getGenres,
} from "@/lib/tmdb";
import Navbar from "@/components/Navbar";

async function fetchMoviesForGenre(genreId: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
    );
    const data = await response.json();
    return data.results.slice(0, 4);
  } catch (error) {
    console.error(`Error fetching movies for genre ${genreId}:`, error);
    return [];
  }
}

export default async function Page() {
  let trendingMovies = [];
  let upcomingMovies = [];
  let topRatedMovies = [];
  let popularMovies = [];
  let genres = [];

  try {
    const [trendingData, upcomingData, topRatedData, popularData, genresData] =
      await Promise.all([
        getTrending(),
        getUpcoming(),
        getTopRated(),
        getPopular(),
        getGenres(),
      ]);

    trendingMovies = trendingData.results || [];
    upcomingMovies = upcomingData.results || [];
    topRatedMovies = topRatedData.results || [];
    popularMovies = popularData.results || [];
    genres = genresData.genres || [];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Get 4 random movies for each genre's background
  const genresWithMovies = await Promise.all(
    genres.map(async (genre: any) => {
      const movies = await fetchMoviesForGenre(genre.id);
      return {
        ...genre,
        movies,
      };
    })
  );

  return (
    <div className="flex flex-col gap-8 bg-black text-white">
      <Navbar />

      <section className="relative">
        <div className="w-full grid grid-cols-6 gap-1 opacity-90">
          {trendingMovies.slice(0, 18).map((movie: any) => (
            <div key={movie.id} className="aspect-square relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="bg-black min-w-full py-10 absolute left-0 bottom-0 flex flex-col items-center container mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best viewing experience with Utsav
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl">
            Utsav offers the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. Enjoy a wide
            variety of content, including the latest blockbusters, classic
            movies, and popular TV shows. Create your own watchlists and find
            content effortlessly.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">
            Start Watching Now
          </Button>
        </div>
      </section>

      <section className="w-[80%] mx-auto flex flex-col gap-8 border-2 p-4 border-gray-700/70">
        <div className="w-[80%] flex flex-col mx-auto items-center  p-6">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6">Our Genres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {genresWithMovies.map((genre) => (
                <GenreCard key={genre.id} {...genre} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <MovieSlider title="Upcoming Bangers" movies={upcomingMovies} />
          <MovieSlider title="Latest on Utsav" movies={trendingMovies} />
          <MovieSlider title="Top Rated" movies={topRatedMovies} showRating />
          <MovieSlider title="Popular" movies={popularMovies} />
        </div>
      </section>
    </div>
  );
}
