import React from "react";
import { Button } from "@/components/ui/button";
import { PlusSquare, ThumbsUp, ThumbsDown } from "lucide-react";

// interface MovieProps {

// }

const MovieHighLights = ({ movie }: any) => {
  return (
    <div className=" mb-6 w-[60%] mx-auto flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-end gap-2">
          <h2 className="text-5xl text-white font-black ">
            {movie.name ||
              movie.title ||
              movie.original_name ||
              movie.original_title}
          </h2>

          <small className="text-2xl  font-bold text-zinc-300">
            ({movie.release_date.split("-")[0]})
          </small>
        </div>
        <p className="text-gray-200 text-center">{movie.overview}</p>
      </div>

      <div className="flex gap-4">
        <Button className=" rounded-xl bg-red-600 hover:bg-red-700">
          Start Watching Now
        </Button>
        <Button className="bg-black rounded-xl">
          <PlusSquare className=" text-rounded-xl text-white" />
        </Button>
        <Button className="bg-black rounded-xl">
          <ThumbsUp className=" text-rounded-xl text-white" />
        </Button>
        <Button className="bg-black rounded-xl">
          <ThumbsDown className=" text-rounded-xl text-white" />
        </Button>
      </div>
    </div>
  );
};

export default MovieHighLights;
