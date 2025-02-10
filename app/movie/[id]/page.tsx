import React from "react";
import { Button } from "@/components/ui/button";
import { PlusSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import  MovieDetails  from "@/components/MovieDetails/MovieDetails";
import MovieSpecs  from "@/components/MovieDetails/MovieSpecs";

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie = await res.json();

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative flex flex-col justify-end max-w-screen h-screen overflow-hidden"
    >
      <div className=" mb-6  mx-auto flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl text-white font-black ">
            {movie.name ||
              movie.title ||
              movie.original_name ||
              movie.original_title}

            <small className="text-2xl font-bold text-zinc-300">
              ({movie.release_date.split("-")[0]})
            </small>
          </h2>
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

      <div className="text-white">
        <MovieDetails movie={movie} />
        <MovieSpecs movie={movie} />

      </div>

      {/* poster and details */}
      {/* 
        
                  <div className='content ml-[5%] text-white'>
                   
        
                    <div className='flex mt-3 mb-5  items-center gap-x-5'>
                      <span 
                          className='  w-[5vh] left-[-50%] bottom-[25%] bg-yellow-500 text-xl font-semibold rounded full flex justify-center items-center'
                      >
                          {(movie.vote_average*10).toFixed()} <sup>%</sup>
                      </span>
                      <h1 className='font-semibold text-2xl leading-6 w-[60px]'>User Score</h1>
                      <h1 >{movie.release_date}</h1>
                      <h1>{movie.genres.map(g=>g.name).join(',')}</h1>
                      <h1>{movie.runtime}min</h1>
        
                    </div>
        
                    <h1 className='text-xl font-semibold italic text-zinc-200'>{movie.tagline}</h1>
                    
                    <h1 className='text-xl mb-3 mt-5'>Overview</h1>
                    <p>{movie.overview}</p> 
                    
                    <h1 className='text-xl mb-3 mt-5'>Available in</h1>
                    <p className='mb-10 '>{movie.translations.join(', ')}</p>
        
                    <Link 
                      className="p-5 bg-[#6556Cd] rounded-lg" 
                      to={`${pathname}/trailer`}
                    >
                      <i className="text-xl mr-3 ri-play-fill"></i>  
                      Play Trailer
                    </Link>
                          
                  </div>
        
                </div> */}

      {/* Part 3 Availbale on platform */}
      {/* <div className='w-[80%] flex flex-col gap-5 mt-10'>
                    
                    {
                      movie.watchProviders &&
                      movie.watchProviders.flatrate && ( 
                      <div className='flex  gap-x-10 items-center text-white'>
                        <h1>Available on platforms</h1>
                        {   
                          movie.watchProviders.flatrate.map((w => (
                          <img 
                              title={w.provider_name}
                              className='h-[5vh] w-[5vh] object-cover rounded-md'
                              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}/>
                            )))
                        }
                      </div>)
                    }
        
                    {
                      movie.watchProviders &&
                      movie.watchProviders.rent && ( 
                      <div className='flex  gap-x-10 items-center text-white'>
                        <h1>Available on Rent</h1>
                        {   
                          movie.watchProviders.rent.map((w => (
                          <img 
                              title={w.provider_name}
                              className='h-[5vh] w-[5vh] object-cover rounded-md'
                              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}/>
                            )))
                        }
                      </div>)
                    }
        
        
                    {
                      movie.watchProviders &&
                      movie.watchProviders.buy && ( 
                      <div className='flex  gap-x-10 items-center text-white'>
                        <h1>Availavle to buy </h1>
                        {   
                          movie.watchProviders.buy.map(((w:any) => (
                          <img 
                              title={w.provider_name}
                              className='h-[5vh] w-[5vh] object-cover rounded-md'
                              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}/>
                            )))
                        }
                      </div>)
                    }
        
                </div> */}
    </div>
  );
};

export default page;
