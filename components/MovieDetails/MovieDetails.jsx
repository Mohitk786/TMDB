import React from 'react'

const MovieDetails = ({movie}) => {
  return (
    <div>
        <div>
            <p>Description</p>
            <p>{movie.overview}</p>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default MovieDetails