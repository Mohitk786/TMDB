"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface GenreCardProps {
  id: number
  name: string
  movies: Array<{ poster_path: string }>
}

export function GenreCard({ id, name, movies }: GenreCardProps) {
  return (
    <Link href={`/genre/${id}`}>
      <motion.div
        className="relative aspect-square rounded-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="grid grid-cols-2 gap-0.5 absolute inset-0">
          {movies.slice(0, 4).map((movie, index) => (
            <div key={index} className="relative">
              <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-4">
          <span className="text-lg font-semibold">{name}</span>
        </div>
      </motion.div>
    </Link>
  )
}

