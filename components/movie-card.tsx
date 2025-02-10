"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface MovieCardProps {
  id: number
  title: string
  posterPath: string
  rating?: number
  releaseDate?: string
}

export function MovieCard({ id, title, posterPath, rating, releaseDate }: MovieCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} >
      <Link href={`/movie/${id}`} className="block">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
          <Image
            src={posterPath || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        </div>
        <h3 className="font-medium text-sm truncate">{title}</h3>
        {rating && (
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i < Math.round(rating / 2) ? "bg-red-600" : "bg-gray-600"}`}
              />
            ))}
          </div>
        )}
        {releaseDate && (
          <p className="text-xs text-gray-400 mt-1">Released on {new Date(releaseDate).toLocaleDateString()}</p>
        )}
      </Link>
    </motion.div>
  )
}

