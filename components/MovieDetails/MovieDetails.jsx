import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";

const MovieDetails = ({ movie }) => {
  return (
    <div className="w-[55%] items-center flex flex-col md:items-start gap-8">
      <div className="p-7 flex  flex-col gap-2 border border-[#262626] bg-[#1A1A1A] text-gray-400">
        <p>Description</p>
        <p className="text-white">{movie.overview}</p>
      </div>

      <div className="p-7 w-full flex flex-col gap-2 border border-[#262626] bg-[#1A1A1A] text-gray-400">
        <p>Production Companies</p>

        <div className="flex  gap-8">
          {movie.production_companies.map((company, index) => (
            <div
              className="flex  flex-col items-center gap-4"
              key={company.id || index}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${
                  company.logo_path || movie.poster_path
                }`}
                alt="company logo"
                className="w-20 h-16 object-cover"
                objectFit="contain"
              />
              <p className="text-white">{company.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-7 w-full  flex flex-col gap-2 border border-[#262626] bg-[#1A1A1A] text-gray-400">
        <p>Extras</p>

        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex w-[80%]  justify-evenly">
            
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold">User Score</p>
              <span className="text-yellow-600 flex items-center">
                {(movie.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
            </div>

            <h1 className="font-semibold">{movie.release_date}</h1>
            <h1 className="font-semibold">{movie.runtime}min</h1>

            <h1 className="text-xl font-semibold italic text-zinc-200">
              {movie.tagline}
            </h1>
          </div>

          
            <Link
              className="p-5 bg-red-600  hover:bg-red-700 rounded-md flex gap-2 items-center"
              href="#"
            >
              <Play className="" />
              Play Trailer
            </Link>
        </div>

      </div>
    </div>
  );
};

export default MovieDetails;
