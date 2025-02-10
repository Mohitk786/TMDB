"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MovieCard } from "@/components/movie-card"

interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average?: number
  release_date?: string
}

interface MovieSliderProps {
  title: string
  movies: Movie[]
  showRating?: boolean
}

export function MovieSlider({ title, movies, showRating }: MovieSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => scroll("left")}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => scroll("right")}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div ref={sliderRef} className="flex gap-4  overflow-x-hidden scrollbar-hide scroll-smooth">
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[200px]">
              <MovieCard
                id={movie.id}
                title={movie.title}
                posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={showRating ? movie.vote_average : undefined}
                releaseDate={movie.release_date}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

