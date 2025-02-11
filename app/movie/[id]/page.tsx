import React from "react";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import MovieSpecs from "@/components/MovieDetails/MovieSpecs";

import MovieHighLights from "@/components/MovieDetails/MovieHighLights";

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie: any = await res.json();

  return (
    <div className="bg-black flex flex-col items-center justify-center gap-20">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative  flex flex-col items-center justify-end max-w-screen min-h-screen overflow-hidden"
      >
        <MovieHighLights movie={movie} />
      </div>

      <div className="w-[90%] justify-around flex flex-col   text-white md:flex-row">
        <MovieDetails movie={movie} />
        <MovieSpecs movie={movie} />
      </div>

      
      
    </div>
  );
};

export default page;
