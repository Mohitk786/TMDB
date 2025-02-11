import { Calendar, Languages, Layout, Menu, StarIcon } from "lucide-react";
import React from "react";

const MovieSpecs = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div className="w-[40%] p-7 rounded-md border border-[#262626] bg-[#1A1A1A] flex flex-col items-start gap-8">
      <div className="flex flex-col justify-between w-full gap-2">
        <div className="flex gap-2 items-center">
          <Calendar className="text-gray-400" />
          <p className="text-gray-400">Released Year</p>
        </div>
        <p className="font-semibold text-lg">{movie.release_date.split("-")[0]}</p>
      </div>

      <div className="flex flex-col justify-between w-full gap-2">
        <div className="flex gap-2 items-center">
          <Languages className="text-gray-400" />
          <p className="text-gray-400">Available Languages</p>
        </div>
        <div className="flex gap-4">
          {movie.spoken_languages.map((language, index) => (
            <p className="bg-black text-white font-semibold rounded-md p-2" key={index}>{language.name}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between w-full gap-2">
        <div className="flex gap-2 items-center">
          <StarIcon className="text-gray-400" />
          <p className="text-gray-400">Ratings</p>
        </div>
        <div>
          <p className="font-semibold">IMDB - 4.5</p>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full gap-2">
        <div className="flex gap-2 items-center">
          <Layout className="text-gray-400" />
          <p className="text-gray-400">Genres</p>
        </div>
        <div className="flex gap-4">
          {movie.genres.map((genre, index) => (
            <p  className="bg-black text-white font-semibold rounded-md p-2" key={index}>{genre.name}</p>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MovieSpecs;

